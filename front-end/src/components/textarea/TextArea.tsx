import { type VariantProps } from "class-variance-authority";
import React from "react";
import { textAreaVariants } from "./textAreaVariants";

interface TextAreaProps extends VariantProps<typeof textAreaVariants>, React.TextareaHTMLAttributes<HTMLTextAreaElement>{   
    className?: string;
    children?: React.ReactNode; 
}

export function TextArea({size,  className, children, ...props} : TextAreaProps){
    // return  React.createElement("textarea",
    //     {
    //         className: textAreaVariants({size, className}),
    //         ...props
    //     },
    //     children
    // )   

    return (
        <textarea 
            className={textAreaVariants({size, className})} 
            {...props}
        >
            {children}
        </textarea>
    )
}