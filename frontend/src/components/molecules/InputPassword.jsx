"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import Alert from "../atoms/Alert";

const InputPassword = ({ 
  name, 
  className = "",
  ...props
}) => {
  const { register, formState: { errors } } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  
  const classNames = twMerge(
    "input", 
    className, 
    errors[name]?.message && "border-danger"
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (  
    <div className="flex flex-col">
      <div className="relative">
        <input 
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          className={classNames}
          {...register(name)}
          {...props}
        />
        <button 
          type="button" 
          onClick={handleShowPassword}
          className="material-icons-round absolute top-3 right-4 text-neutral-3"
        >
          {showPassword ? <EyeIcon className="w-4 h-4" /> : <EyeSlashIcon className="w-4 h-4" />}
        </button>
      </div>
      {errors[name]?.message && <Alert type="error" message={errors[name].message} />}
    </div>
  );
}

export default InputPassword;