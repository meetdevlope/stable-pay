import React from "react";
import ButtonComponent from "./ButtonComponent";
import FormikForm from "./FormikForm";
import FormInput from "./FormikForm/formInput";

const EmailComponent = ({ buttonAppearence }) => {
  const submitAction = (values) => {
    console.log(values);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(values),
    });
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
          <ButtonComponent
            appearance={buttonAppearence}
            buttonText="Get Early Access"
            type="submit"
            buttonClass="self-center text-sm bg-pri-dark"
          />
        )}
      />
    </div>
  );
};

export default EmailComponent;
