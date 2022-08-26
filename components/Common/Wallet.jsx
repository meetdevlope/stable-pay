import React from "react";
import { FiChevronDown } from "react-icons/fi";
import FormikForm from "../FormikForm";
import FormInput from "../FormikForm/formInput";
import FormInputDropdown from "../FormikForm/formInputDropdown";

const Wallet = () => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <FormikForm
      formClass="flex-col gap-4"
      initialValues={{
        inputAmount: "",
        outputAmount: "$ 100",
      }}
      onSubmit={submitAction}
      fields={[
        {
          label: "Your wallet",
          type: "number",
          name: "inputAmount",
          placeholder: "₹ 7000",
          options: [
            {
              text: "$ USD",
              value: "usd",
            },
            {
              text: "₹ INR",
              value: "inr",
            },
            {
              text: "€ Euro",
              value: "euro",
            },
          ],
          component: FormInputDropdown,
          inputDropdownClass: "w-1/4 rounded-r-md",
          inputClass:
            "py-2 px-4 text-2xl w-3/4 font-bold rounded-l-md placeholder:text-dark_gray placeholder:font-bold",
        },
        {
          label: "Maximum Deposit Amount",
          type: "text",
          name: "outputAmount",
          component: FormInput,
          inputClass:
            "py-2 px-4 text-2xl w-full font-bold rounded-l-md placeholder:text-dark_gray placeholder:font-bold",
        },
      ]}
    />
  );
};

export default Wallet;
