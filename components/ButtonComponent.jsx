import React from "react";
import cn from "classnames";

function ButtonComponent({
  buttonText = "Button",
  appearance = "pri",
  icon,
  buttonClass,
  ...props
}) {
  return (
    <button
      {...props}
      className={cn("px-5 py-2 rounded-md", {
        "flex items-center justify-center gap-2": icon,
        "bg-pri hover:bg-pri-light text-white transition-all":
          appearance === "pri",
        "border-pri border text-pri hover:bg-pri-light hover:border-pri-light hover:text-white transition-all ":
          appearance === "pri-out",
        "hover:bg-pri text-white hover:text-white transition-all":
          appearance === "sec",
        "border-white border text-white hover:bg-pri-light hover:border-pri-light hover:text-pri-light transition-all ":
          appearance === "sec-out",
        "bg-pri-light hover:bg-pri-dark text-white transition-all":
          appearance === "ter",
        "bg-gray text-white cursor-not-allowed": appearance === "disabled",

        [buttonClass]: !!buttonClass,
      })}
    >
      {icon}
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
