import React from "react";
import ButtonComponent from "./ButtonComponent";
import FormikForm from "./FormikForm";
import FormInput from "./FormikForm/formInput";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailComponent = ({ buttonAppearence }) => {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastErrorMessage = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const submitAction = async (values) => {
    console.log(values);

    try {
      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(values),
      });
      showToastMessage();
    } catch (error) {
      showToastErrorMessage();
    }
  };

  return (
    <div>
      <FormikForm
        formClass="gap-1"
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
              buttonText="Get Early Access"
              type="submit"
              buttonClass="self-center text-sm bg-pri-dark"
            />
            <ToastContainer />
          </>
        )}
      />
    </div>
  );
};

export default EmailComponent;
