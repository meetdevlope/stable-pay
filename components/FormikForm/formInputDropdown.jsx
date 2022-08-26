import React from "react";
import cn from "classnames";

const FormInputDropdown = ({
  label,
  id,
  field,
  wrapperClass,
  labelClass,
  inputClass,
  placeholderDropdown,
  inputDropdownClass,
  icon,
  optionsClass,
  options,
  type,
  ...props
}) => {
  return (
    <div
      className={cn(
        `flex ${
          type === "checkbox" || type === "radio"
            ? "flex-row gap-4 items-center"
            : "flex-col"
        } `,
        {
          [wrapperClass]: !!wrapperClass,
        }
      )}
    >
      {{ label } && (
        <label className={cn({ [labelClass]: !!labelClass })}>{label}</label>
      )}
      <div className="flex">
        {icon}
        <input
          id={id}
          {...props}
          {...field}
          type={type}
          className={cn(
            `focus:outline-none ${
              type === "file" ? "border-none" : "border-2 border-gray "
            }`,
            {
              [inputClass]: !!inputClass,
            }
          )}
        />

        <select
          {...field}
          {...props}
          className={cn(
            "bg-gray p-1 focus:outline-none placeholder:text-black",
            {
              [inputDropdownClass]: !!inputDropdownClass,
            }
          )}
        >
          {placeholderDropdown && (
            <option
              className={cn("bg-gray text-black", {
                [optionsClass]: !!optionsClass,
              })}
            >
              {placeholder}
            </option>
          )}
          {options.map((option, idx) => (
            <option
              key={idx}
              value={option.value}
              className={cn("bg-gray text-black", {
                [optionsClass]: !!optionsClass,
              })}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormInputDropdown;
