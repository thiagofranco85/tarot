import { cva } from "class-variance-authority";

/*
border-1 
animate-border
focus:border-transparent
focus:[background:linear-gradient(45deg,var(--color-primary),var(--color-primary))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.zinc.600/.48))_border-box]
*/

export const textAreaVariants = cva(
  `w-full h-32 bg-background-1/70 border-1 border-blueviolet rounded-3xl p-4
   text-white text-base/6 my-2 italic focus:outline-none focus:not-italic md:text-xl
   placeholder:opacity-100 placeholder:transition-opacity placeholder:duration-600 focus:placeholder:opacity-0`
  ,
  {
    variants: {
      size: {
        sm: "h-24",
        md: "h-32",
        lg: "h-48",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);
