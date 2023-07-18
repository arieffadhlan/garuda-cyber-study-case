"use client";

import { twMerge } from "tailwind-merge";
import { ArrowPathIcon } from "@heroicons/react/24/outline"

const Button = ({
  type,
  children,
  className = "",
  loading = false,
  ...props
}) => {
  const classNames = twMerge("button", className);
  
  return type === "submit" ? (
    <button
      type="submit"
      className={classNames}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ArrowPathIcon className="w-4 h-4 animate-spin" />
      ): children}
    </button>
  ) : (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;