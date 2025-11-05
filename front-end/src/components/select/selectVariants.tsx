import { cva } from "class-variance-authority";

export const selectVariants = cva(
  "w-full bg-background-1/70 rounded-2xl text-white text-base/6 my-2 focus:outline-none",
  {
    variants: {
      size: {
        sm: "p-2 text-sm",
        md: "p-3 text-base",
        lg: "p-4 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
