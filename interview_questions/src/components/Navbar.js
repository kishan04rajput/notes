import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 border-gray-700 fixed top-0 left-0 right-0 z-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            InterviewQA
          </span>
        </a>
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
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-400 md:p-0"
                aria-current="page"
              >
                HTML
              </a>
            </li>
            <li>
              <a
                href="/CssPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                CSS
              </a>
            </li>
            <li>
              <a
                href="/BootstrapPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                Bootstrap
              </a>
            </li>
            <li>
              <a
                href="/JavascriptPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                JavaScript
              </a>
            </li>
            <li>
              <a
                href="/MongoDbPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="/ExpressPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                Express
              </a>
            </li>
            <li>
              <a
                href="/ReactPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="/NodePage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                Node
              </a>
            </li>
            <li>
              <a
                href="/GitPage"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                GIT
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
