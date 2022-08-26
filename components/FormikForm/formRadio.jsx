import React from "react";
import cn from "classnames";

const FormRadio = ({
  label,
  id,
  field,
  form: { setFieldValue },
  icon,
  wrapperClass,
  labelClass,
  inputClass,
  options,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      <label className={cn({ [labelClass]: !!labelClass })}>{label}</label>
      <div className="flex gap-8 items-center">
        {icon}
        {options.map((option, id) => (
          <div key={id}>
            <input
              {...field}
              {...props}
              type="radio"
              onChange={() => {
                setFieldValue(field.name, option.value, true);
              }}
              id={id}
            />
            <span
              className={cn("ml-2", {
                [inputClass]: !!inputClass,
              })}
            >
              {option.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;
