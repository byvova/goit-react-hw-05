import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink to='/' className={makeLinkClass}>
                    Home
                </NavLink>
                <NavLink to='/movies' className={makeLinkClass}>
                    Movies
                </NavLink>
            </nav>
        </header>
    )
}