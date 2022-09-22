import React, { useState, useEffect, useMemo, useReducer } from "react";
import { FiChevronDown } from "react-icons/fi";
import { getConvertedData } from "../../functions/converData";
import ButtonComponent from "../ButtonComponent";
import FormikForm from "../FormikForm";
import FormDropdown from "../FormikForm/formDropdown";
import FormInput from "../FormikForm/formInput";
import FormInputDropdown from "../FormikForm/formInputDropdown";

const inittialValues = {
  amount: 0,
  final: 0,
  cur: "usd",
  loading: false,
  error: false,
  curArr: {},
};

const reducer = (state = inittialValues, action) => {
  switch (action.type) {
    case "GET_CUR_LOADING":
      return { ...state, curArr: {}, loading: true, error: false };
    case "GET_CUR_ERROR":
      return { ...state, curArr: {}, loading: false, error: true };
    case "GET_CUR":
      return { ...state, curArr: action.curArr, loading: false, error: false };
    case "CHANGE_DROP":
      return {
        ...state,
        cur: action.cur,
        final: state.amount / state.curArr[action.cur],
      };
    case "CHANGE_AMOUNT":
      return {
        ...state,
        amount: action.amount,
        final: isNaN(action.amount)
          ? 0
          : action.amount / state.curArr[state.cur],
      };
    default:
      return state;
  }
};

const Wallet = () => {
  // const [currencies, setcurrencies] = useState({});
  const [state, dispatch] = useReducer(reducer, inittialValues);
  // const [amount, setAmount] = useState(0);
  // const [final, setFinal] = useState(0);
  // const [cur, setCur] = useState("usd");

  useEffect(() => {
    getCurencies();
  }, []);

  // const onChange = () => {};

  const onDrop = (e) => {
    // setCur(e.target.value);
    // onChange();
    dispatch({ type: "CHANGE_DROP", cur: e.target.value });
  };

  const onAmChange = (e) => {
    // console.log("LALA", parseFloat(e.target.value));
    // if()
    dispatch({
      type: "CHANGE_AMOUNT",
      amount: parseFloat(e.target.value),
    });
    // setAmount(e.target.value);
    // onChange();
  };

  const options = useMemo(
    () => [
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
    []
  );
  const getCurencies = async () => {
    dispatch({ type: "GET_CUR_LOADING" });
    try {
      const data = await getConvertedData();
      // console.log(data);
      dispatch({ type: "GET_CUR", curArr: data });
    } catch (error) {
      dispatch({ type: "GET_CUR_ERROR" });
    }
    // setcurrencies(data);
  };

  const submitAction = (values) => {};
  return (
    // <FormikForm
    //   formClass="items-end justify-center"
    //   initialValues={{
    //     inputAmount: "",
    //     selectCurrency: "",
    //   }}
    //   onSubmit={submitAction}
    //   fields={[
    //     {
    //       label: "Your Wallet",
    //       placeholder: "$ 100",
    //       type: "number",
    //       name: "inputAmount",
    //       component: FormInput,
    //       inputClass:
    //         "py-2 px-4 text-2xl font-bold rounded-l-md  placeholder:text-dark_gray placeholder:font-bold",
    //     },
    //     {
    //       name: "selectCurrency",
    //       options: [
    //         {
    //           text: "USD",
    //           value: "usd",
    //         },
    //         {
    //           text: "CAD",
    //           value: "cad",
    //         },
    //         {
    //           text: "AUD",
    //           value: "aud",
    //         },
    //         {
    //           text: "GBP",
    //           value: "gbp",
    //         },
    //         {
    //           text: "EUR",
    //           value: "eur",
    //         },
    //         {
    //           text: "AED",
    //           value: "aed",
    //         },
    //         {
    //           text: "SAR",
    //           value: "sar",
    //         },
    //         {
    //           text: "NGN",
    //           value: "ngn",
    //         },
    //         {
    //           text: "NZD",
    //           value: "nzd",
    //         },
    //         {
    //           text: "SGD",
    //           value: "sgd",
    //         },
    //       ],
    //       component: FormDropdown,
    //       inputClass:
    //         "py-3 px-4 font-bold rounded-r-md placeholder:text-dark_gray h-[52px]",
    //     },
    //   ]}
    //   // action={() => (
    //   //   <ButtonComponent type="submit" buttonText="Convert" appearance="pri" />
    //   // )}
    // />

    state?.loading ? (
      <p>loading....</p>
    ) : state?.error ? (
      <p>error :( </p>
    ) : (
      <div>
        <p className="mb-2 text-pri">You Send</p>
        <div>
          <div className="flex mb-4">
            <input
              className="border text-pri border-gray px-4 py-2 rounded-l-md w-full !outline-none focus:border focus:border-pri"
              type={"number"}
              placeholder="Currency"
              value={state?.amount}
              onChange={onAmChange}
            />
            <select
              name="selectCurencies"
              id="cur"
              value={state?.cur}
              onChange={onDrop}
              className="bg-pri text-white px-4 py-2 h-[42px] rounded-r-md"
            >
              {options.map((e, i) => (
                <option value={e.value} key={i}>
                  {e.text}
                </option>
              ))}
            </select>
          </div>
          <div className="flex text-pri mt-6">
            <p>Transfer&nbsp;Fees</p>
            <div
              className="w-full mb-[6px]"
              style={{ borderBottom: "2px dotted rgb(102 103 171)" }}
            ></div>
            <span>$0.00</span>
          </div>
          <div className="flex my-4 text-pri mb-6">
            <p>Transfer&nbsp;Time</p>
            <div
              className="w-full mb-[6px]"
              style={{ borderBottom: "2px dotted rgb(102 103 171)" }}
            ></div>
            <span>15&nbsp;mins</span>
          </div>
          <p className="mb-2 text-pri">Recepient Gets &ldquo;INR&rdquo;</p>
          <p className=" rounded-md  flex items-stretch">
            <span className="border text-pri rounded-l-md border-gray flex-1 px-4 py-2">
              {state?.final.toFixed(2)}
            </span>
            <span className="w-[87px] bg-pri text-white flex justify-center items-center rounded-r-md">
              INR
            </span>
          </p>
        </div>
        {/* <img src="/images/fincrypt-visual.png" alt="charts" className="mt-10" /> */}
      </div>
    )
  );
};

export default Wallet;
