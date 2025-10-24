import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { Text } from '../components/text/Text';

type DeckMenuItemProps = { 
    text: string;
    href: string;
    description?: string;
    children: ReactNode;
    className?: string;
}

export function DeckMenuItem({ text, children, href, description, className } : DeckMenuItemProps){
    return (       
        <div className={`group flex flex-col items-center cursor-pointer ${className ?? ''}`} >
            <div className="text-white group-hover:scale-130 transition-transform duration-200 
            group-hover:text-hover-primary">
                {children}
            </div>
            {/* <HrDivider className='mt-5' /> */}
            
            <Text 
                as="h3"
                variant={'title-xs'} 
                className="
                px-5 mt-4 rounded-full
                group-hover:text-hover-primary 
                transition-transform duration-200

                border-1
                border-transparent 
                animate-border 
                bg-background-1/50
                group-hover:[background:linear-gradient(45deg,var(--color-primary),var(--color-primary))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.zinc.600/.48))_border-box]
            ">
                <NavLink to={href} title={description}>{text}</NavLink>
            </Text>  
            {/* <HrDivider/> */}
        </div>       
    )
}