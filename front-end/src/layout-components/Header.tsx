import { NavLink } from "react-router";
import { Menu } from "./../layout-components/Menu";
 
export function Header(){
    return (
        <header className="text-center text-4xl">
            <Menu />           
            <NavLink to="/">
                <img src="/images/logo.png" alt="Logo do Tarolando" className="mx-auto w-40 md:w-60" />           
            </NavLink>
        </header>
    )
}