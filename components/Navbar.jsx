"use client";

import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
       setActive(!active);
    }

  return (
    <div className="navbar py-6">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold">Companes.</h1>
            </div>
            <ul className={`menu flex items-center gap-12 md:static absolute ${active ? "top-24 opacity-100" : "top-20 opacity-0"} left-1/2 -translate-x-1/2 md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black transition-all`}>
                <li>
                    <Link href={"#home"}>Home</Link>
                </li>
                <li>
                    <Link href={"#service"}>Service</Link>
                </li>
                <li>
                    <Link href={"#project"}>Project</Link>
                </li>
                <li>
                    <Link href={"#contact"}>Contact</Link>
                </li>
            </ul>
            <div className="md:hidden block" onClick={() => handleClick()}>
                <i className="ri-menu-line ri-2x font-bold"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
