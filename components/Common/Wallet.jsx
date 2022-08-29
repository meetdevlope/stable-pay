import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ButtonComponent from "../ButtonComponent";
import FormikForm from "../FormikForm";
import FormDropdown from "../FormikForm/formDropdown";
import FormInput from "../FormikForm/formInput";
import FormInputDropdown from "../FormikForm/formInputDropdown";

const Wallet = () => {
  const [currencies, setcurrencies] = useState({});
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <FormikForm
      formClass="items-end justify-center"
      initialValues={{
        inputAmount: "",
        selectCurrency: "",
      }}
      onSubmit={submitAction}
      fields={[
        {
          label: "Your Wallet",
          placeholder: "$ 100",
          type: "number",
          name: "inputAmount",
          component: FormInput,
          inputClass:
            "py-2 px-4 text-2xl font-bold rounded-l-md  placeholder:text-dark_gray placeholder:font-bold",
        },
        {
          name: "selectCurrency",
          options: [
            {
              text: "USD",
              value: "usd",
            },
            {
              text: "CAD",
              value: "cad",
            },
            {
              text: "AUD",
              value: "aud",
            },
            {
              text: "GBP",
              value: "gbp",
            },
            {
              text: "EUR",
              value: "eur",
            },
            {
              text: "AED",
              value: "aed",
            },
            {
              text: "SAR",
              value: "sar",
            },
            {
              text: "NGN",
              value: "ngn",
            },
            {
              text: "NZD",
              value: "nzd",
            },
            {
              text: "SGD",
              value: "sgd",
            },
          ],
          component: FormDropdown,
          inputClass:
            "py-4 px-4 font-bold rounded-r-md placeholder:text-dark_gray",
        },
      ]}
      // action={() => (
      //   <ButtonComponent type="submit" buttonText="Convert" appearance="pri" />
      // )}
    />
  );
};

export default Wallet;
