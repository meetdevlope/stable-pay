import React from "react";
import cn from "classnames";

const FormTextarea = ({
  label,
  id,
  field,
  icon,
  wrapperClass,
  labelClass,
  inputClass,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      {{ label } && (
        <label className={cn({ [labelClass]: !!labelClass })}>{label}</label>
      )}
      <div>
        {icon}
        <textarea
          id={id}
          rows="5"
          {...props}
          {...field}
          className={cn(
            "border bg-[transparent] mt-2 w-full p-1 focus:outline-none placeholder:text-white",
            {
              [inputClass]: !!inputClass,
            }
          )}
        ></textarea>
      </div>
    </div>
  );
};

export default FormTextarea;
