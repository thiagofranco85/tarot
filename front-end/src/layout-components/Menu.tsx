import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { Text } from "../components/text/Text";

export function Menu(){

    const [isMenuOpen, setIsMenuOpen] =  useState(false);

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

    return (  
        <nav className="relative"> 
            <button className='flex ml-auto mr-2 mt-2 mb-2.5 cursor-pointer md:hidden' onClick={toggleMenu}>
                <MenuIcon size={32} className='text-white z-1 hover:text-hover-primary' />
            </button>
        
            <menu className={`flex flex-col absolute top-full left-0 right-0 
            justify-start bg-background-1/80
            ${isMenuOpen ? 'opacity-100 visible translate-y-0 z-1' : 'opacity-0 invisible -translate-y-2'}
            md:flex-row md:justify-center md:visible md:opacity-100 md:gap-10 md:py-4 md:relative md:bg-transparent`}>
                <li><Text variant={"title-xs"}><NavLink to="/">Início</NavLink></Text></li>
                <li><Text variant={"title-xs"}><NavLink to="/como-funciona">Como Funciona</NavLink></Text></li>
                <li><Text variant={"title-xs"}><NavLink to="/pagina-do-dev">Página do Dev.</NavLink></Text></li>
            </menu>    
            
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-0 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}  
             
        </nav>   
    )
}