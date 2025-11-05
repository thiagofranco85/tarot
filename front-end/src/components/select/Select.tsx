import { type VariantProps } from "class-variance-authority";
import React from "react";
import { selectVariants } from "./selectVariants";

interface SelectVariants
  extends VariantProps<typeof selectVariants>,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  className?: string;
  children?: React.ReactNode;
}

export function Select({
  size,
  className,
  children,
  ...props
}: SelectVariants) {
  return (
    <select className={selectVariants({ size, className })} {...props}>
      {children}
    </select>
  );
}
