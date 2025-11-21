import { cva } from "class-variance-authority";

const classNames = `px-5 py-1.5 mt-4 rounded-full text-white

                hover:cursor-pointer
                group-hover:text-hover-primary 
                transition-transform duration-200
                border-1
                border-transparent 
                animate-border 
                bg-background-1/80
                group-hover:[background:linear-gradient(45deg,var(--color-primary),var(--color-primary))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.zinc.600/.48))_border-box]`;


export const buttonVariants = cva(
    classNames,
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
