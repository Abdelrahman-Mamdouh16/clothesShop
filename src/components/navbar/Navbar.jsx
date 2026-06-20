import {
    ArrowRightStartOnRectangleIcon,
    Bars3CenterLeftIcon,
    MoonIcon,
    ShoppingBagIcon,
    SunIcon,
    UserIcon
} from "@heroicons/react/24/outline";

import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { UserSignInContext } from "../../Context/UserSignInContext";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const navLinkClass = `
relative
text-secondary
dark:text-primary
transition-colors
duration-300
hover:bg-inherit
rounded-none

after:content-['']
after:absolute
after:left-[10%]
after:right-[10%]
after:bottom-0
after:h-[2px]
after:w-0
after:bg-secondary
dark:after:bg-primary
after:transition-all
after:duration-300

hover:after:w-[80%]

`;

const mobileLinkClass = `
block
px-4
py-2
rounded-lg
transition-colors
duration-300
hover:bg-gray-100
dark:hover:bg-gray-800
dark:text-primary
text-secondary
cursor-pointer
`;

const iconClass =
    "lg:hidden w-6 h-6 dark:text-primary text-secondary cursor-pointer transition-colors duration-300";
" p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
function Navbar() {
    const [darkMode, setDarkMode] = useState(() =>
        document.documentElement.classList.contains("dark")
    );
    const [open, setOpen] = useState(false);
    const { cartItems } = useContext(ShopContext);
    const { userSignIn, UserLogOut } = useContext(UserSignInContext);

    const dropdownRef = useRef(null);

    // Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    // console.log(userSignIn);


    return (
        <nav className="bg-white  dark:bg-gray-900 shadow-sm shadow-gray-300 dark:shadow-gray-800  transition-colors duration-300" ref={dropdownRef}>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo + Mobile toggle */}
                    <div className="flex items-center gap-3" >

                        {/* Mobile Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className={iconClass}
                        >
                            <Bars3CenterLeftIcon className="w-6 h-6 text-secondary dark:text-primary" />
                        </button>

                        {/* Logo */}
                        <NavLink to="/" className="text-2xl font-bold text-secondary dark:text-primary">
                            Veloura
                        </NavLink>
                    </div>

                    {/* Right buttons (desktop + mobile icons) */}
                    <div className="flex items-center  md:order-2">




                        <Link to="/cart" className="p-1 cursor-pointer focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                            <ShoppingBagIcon className="w-6 h-6 text-secondary dark:text-primary" />
                            {cartItems.length > 0 && (
                                <span className="absolute top-4 -right-0.5 bg-secondary dark:bg-primary text-white dark:text-gray-900 text-[12px]
                                rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-1 cursor-pointer focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {darkMode ? (
                                <SunIcon className="w-6 h-6  text-gray-700 dark:text-gray-200" />
                            ) : (
                                <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                            )}
                        </button>
                        {userSignIn ?
                            <button onClick={UserLogOut} className="p-1 cursor-pointer focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                                <ArrowRightStartOnRectangleIcon
                                    className="w-6 h-6 text-secondary dark:text-primary" />
                            </button> :
                            <Link to="/Signin" className="p-1 cursor-pointer focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                                <UserIcon className="w-6 h-6 text-secondary dark:text-primary" />
                            </Link>}
                    </div>

                    {/* Center Menu (Desktop) */}
                    <div className="hidden lg:flex lg:items-center lg:w-auto w-full md:order-1">
                        <ul className="flex flex-col md:flex-row gap-6 md:gap-5 mt-4 md:mt-0">

                            {navLinks.map((link) => (
                                <li key={link.href} className="relative">

                                    <NavLink
                                        to={link.href}
                                        className={({ isActive }) => `
                                        ${navLinkClass}
                                        ${isActive
                                                ? "after:w-[80%]"
                                                : "after:w-0 hover:after:w-[80%]"
                                            } `}
                                    >
                                        {link.name}
                                    </NavLink>

                                </li>
                            ))}

                            {/* <li>
                                <NavLink
                                    to="#"
                                    className="px-3 py-1 rounded-full  border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-secondary dark:text-primary transition"
                                >
                                    Admin panel
                                </NavLink>
                            </li> */}

                        </ul>
                    </div>

                </div>

                {/* Mobile Dropdown */}
                <div className={`lg:hidden overflow-hidden transition-all  duration-300 ease-in-out ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`} >
                    <ul className="flex flex-col gap-1 px-4 pb-4">

                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <NavLink
                                    to={link.href}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) => `
                                        ${mobileLinkClass}
                                        ${isActive
                                        && "bg-primary dark:bg-secondary"

                                        } `}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}

                        {/* <li>
                            <NavLink
                                to="#"
                                onClick={() => setOpen(false)}
                                className="block px-3 py-1 rounded-full  border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-secondary dark:text-primary transition"
                            >
                                Admin panel
                            </NavLink>
                        </li> */}

                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;