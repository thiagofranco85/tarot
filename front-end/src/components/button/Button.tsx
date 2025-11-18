import { type VariantProps } from "class-variance-authority";
import React from "react";
import { buttonVariants } from "./buttonVariants";

interface ButtonVariants
  extends VariantProps<typeof buttonVariants>,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  className?: string;
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export function Button({
  type,
  size,
  className,
  children,
  ...props
}: ButtonVariants) {
  return (
    <div className="group">
      <button type={type} className={buttonVariants({ size, className })} {...props}>
        {children}
      </button>
    </div>
  );
}
