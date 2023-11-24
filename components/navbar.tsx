"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();
  const button = {
    active: "text-primary",
    inactive: "text-tertiary hover:text-primary",
  };
  return (
    <nav className="bg-secondary border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
            Kui Hua Wang
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-tertiary bg-secondary hover:bg-primary border border-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contact me
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
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
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-secondary ">
            <li>
              <Link
                href={"/"}
                className={`${
                  pathName === "/" ? button.active : button.inactive
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about-me"}
                className={`${
                  pathName === "/about-me" ? button.active : button.inactive
                }`}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                className={`${
                  pathName === "/portfolio" ? button.active : button.inactive
                }`}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
