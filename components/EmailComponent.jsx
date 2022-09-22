import React, { useCallback, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import FormikForm from "./FormikForm";
import FormInput from "./FormikForm/formInput";
import { ClipLoader } from "react-spinners";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EmailComponent = ({ buttonAppearence }) => {
  const [loading, setloading] = useState(false);
  const showToastMessage = useCallback(() => {
    toast.success("Thank you for submitting!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);
  const showToastErrorMessage = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const submitAction = async (values, submitProps) => {
    console.log(values);
    setloading(true);

    submitProps.setSubmitting(false);
    submitProps.resetForm();
    try {
      const data = await axios.post("/api/mail", values);
      // await data.json();
      console.log(data);
      showToastMessage();
    } catch (error) {
      console.log("error", error);
      showToastErrorMessage();
    }
    setloading(false);
  };

  return (
    <div className="">
      <FormikForm
        formClass="gap-1 items-start"
        validationSchema={validationSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={submitAction}
        fields={[
          {
            placeholder: "Enter Email Address",
            type: "email",
            name: "email",
            component: FormInput,
            inputClass: "py-1 px-4 h-full placeholder:text-sm rounded-md",
          },
        ]}
        action={() => (
          <>
            <ButtonComponent
              appearance={buttonAppearence}
              buttonText={
                loading ? (
                  <ClipLoader loading={true} size={"1rem"} color={"white"} />
                ) : (
                  "Get Early Access"
                )
              }
              type="submit"
              buttonClass="text-sm bg-pri-dark"
            />
          </>
        )}
      />
    </div>
  );
};

export default EmailComponent;
