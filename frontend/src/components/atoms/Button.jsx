"use client";

import { twMerge } from "tailwind-merge";

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
        <span className="animate-spin material-icons-round">
          autorenew
        </span>
      ): children}
    </button>
  ) : (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;