import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
];

export const Navbar = () => {
    return (
        <header>
            <div className="header-content">
                <a href="index.html">
                    <div className="website-title">
                        <h1>Efai De Leon's Portfolio</h1>
                    </div>
                </a>
            </div>
            <nav className="navbar">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => (isActive ? "active" : "")} // Conditional styling for active link
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
