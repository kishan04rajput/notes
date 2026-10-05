import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const listItems = [
        { to: "/", label: "Quiz" },
        { to: "/HtmlPage", label: "HTML" },
        { to: "/CssPage", label: "CSS" },
        { to: "/TailwindPage", label: "Tailwind" },
        { to: "/BootstrapPage", label: "Bootstrap" },
        { to: "/JavascriptPage", label: "JavaScript" },
        { to: "/MongoDbPage", label: "MongoDB" },
        { to: "/ExpressPage", label: "Express" },
        { to: "/ReactPage", label: "React" },
        { to: "/NodePage", label: "Node" },
        { to: "/GitPage", label: "GIT" },
    ];

    return (
        <div>
            <nav className="bg-gray-900 border-gray-700 fixed top-0 left-0 right-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            InterviewQA
                        </span>
                    </NavLink>
                    {/* Hamburger menu */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    {/* Navbar links */}
                    <div
                        className={`${
                            isOpen ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
                        id="navbar-default"
                        style={{ overflow: "auto" }}
                    >
                        <ul className="font-medium flex flex-col mt-4 border border-gray-700 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
                            {listItems.map((item) => (
                                <li className="md:flex md:items-center" key={item.to}>
                                    <NavLink
                                        onClick={() => setIsOpen(false)}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "block w-full text-blue-500 rounded text-center py-2"
                                                : "block w-full text-white rounded text-center py-2 hover:text-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                                    }
                                    aria-current="page"
                                >
                                        {item.label}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Outlet />
            </nav>
        </div>
    );
};
