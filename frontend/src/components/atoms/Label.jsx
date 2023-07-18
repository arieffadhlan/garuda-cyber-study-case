import { twMerge } from "tailwind-merge";

const Label = ({ id, children, className = "" }) => {
  return (
    <label htmlFor={id} className={twMerge(`font-medium text-sm text-black`, className)}>
      {children}
    </label>
  )
}

export default Label;