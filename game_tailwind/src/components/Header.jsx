import { useState } from "react";
import { navLinks } from "../constants";
import { logo, find, cart, menu, close } from "../assets";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center">
            {/* MOBILE NAVBAR */}
            <div className="sm:hidden flex justify-start items-center relative">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    onClick={() => setToggle((prev) => !prev)}
                    className="z-10 cursor-pointer"
                />
                {toggle && (
                    <div className="fixed inset-0 bg-bgInput opacity-50 z-5"></div>
                )}
                <div
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 absolute top-10 left-0 mx-4 my-2 min-w-[140px]rounded-xl sidebar z-6`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, idx) => (
                            <li
                                key={nav.id}
                                className={`font-satoshi font-normal cursor-pointer text-[16px] text-white ${
                                    idx === navLinks.length - 1
                                        ? "mb-0"
                                        : "mb-4"
                                }`}
                            >
                                <a
                                    href={`${nav.id}`}
                                    className="hover:text-primary transition-opacity duration-300"
                                >
                                    {" "}
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* DESKTOP NAVBAR */}
            <ul className="list-none sm:flex hidden justify-start items-center">
                {navLinks.map((nav, idx) => (
                    <li
                        key={nav.id}
                        className={`font-satoshi font-normal cursor-pointer text-[16px] text-white ${
                            idx === navLinks.length - 1 ? "mr-0" : "mr-10"
                        }`}
                    >
                        <a
                            href={`${nav.id}`}
                            className="hover:text-primary transition-opacity duration-300"
                        >
                            {" "}
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* LOGO */}

            <img src={logo} alt="hologaze" />

            {/* SEARCH */}
            <div className="flex gap-4 ralative">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search games & products..."
                        className="bg-bgInput rounded-md outline-0 px-6 py-3 font-satoshi text-white text-[16px] w-[300px] h-[50px] hidden sm:block"
                    />
                    <img
                        src={find}
                        alt="search"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block "
                    />
                </div>
                <img
                    src={find}
                    alt="search"
                    className=" cursor-pointer left-15 md:hidden"
                />
                <img src={cart} alt="cart" className="cursor-pointer cart" />
            </div>
        </nav>
    );
};
export default Header;
