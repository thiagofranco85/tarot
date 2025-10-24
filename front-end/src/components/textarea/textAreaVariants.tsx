import { cva } from "class-variance-authority";

export const textAreaVariants = cva(
    "w-full h-32 bg-background-1/70 rounded-3xl p-4 text-white text-base/6 my-2 italic focus:outline-none md:text-xl", 
    {
        variants: {
            size: {
                sm: "h-24",
                md: "h-32",
                lg: "h-48"
            }
        },
        defaultVariants: {
            size: 'sm', 
        }
    }
)