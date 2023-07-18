"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ButtonLink = ({
  href,
  children,
  className = "",
  ...props
}) => {
  const classNames = twMerge("button", className);
  
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={classNames} {...props}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;