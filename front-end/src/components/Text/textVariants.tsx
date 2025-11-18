import { cva } from "class-variance-authority";

export const textVariants = cva("text-white", { // Remove text-white daqui
  variants: {
    variant: {
      "body-xs": "font-josefin text-sm leading-6",
      "body-sm": "font-josefin text-xl leading-7",
      "body-md": "font-josefin text-2xl leading-8",
      "title-xs": "font-cinzel text-sm leading-6",
      "title-sm": "font-cinzel text-xl leading-7",
      "title-md": "font-cinzel text-2xl leading-8",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }
  },
  defaultVariants: {
    variant: "body-sm",
    weight: "light",
  },
});