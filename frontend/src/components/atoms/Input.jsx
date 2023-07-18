"use client";

import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Alert from "./Alert";

const Input = ({ 
  type, 
  name, 
  hookForm = true,
  className = "",
  ...props
}) => {
  let formRegister;
  let formErrors;
  if (hookForm) {
    const { register } = useFormContext();
    const { formState: { errors } } = useFormContext();
    formRegister = register;
    formErrors = errors;
  }

  const classNames = twMerge(
    "input", 
    className, 
    formErrors ? formErrors[name]?.message && "border-danger" : ""
  );

  return (  
    <div className="flex flex-col">
      {hookForm === false ? (
        <input 
          type={type}
          name={name}
          id={name}
          className={classNames}
          {...props}
        />
      ) : (
        <input 
          type={type}
          name={name}
          id={name}
          className={classNames}
          {...formRegister(name)}
          {...props}
        />
      )}
      {formErrors && formErrors[name]?.message && (
        <span className="mt-1 text-sm text-red-700">{formErrors[name].message}</span>
      )}
    </div>
  );
}

export default Input;