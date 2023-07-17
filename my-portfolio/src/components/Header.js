import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 text-stone-200 fixed w-full z-10 hover:drop-shadow-xl  shadow-slate-800 bg-opacity-0 hover:bg-opacity-80 bg-stone-800">
            <a href="/" className="logo text-2xl font-bold text-accent">
                Jovan
            </a>

            {/*Desktop*/}
            <nav className="hidden md:block">
                <ul className="flex">
                    <motion.li whileHover={{y: -3}}>
                        <a href="/#about">About</a>
                    </motion.li>
                    <motion.li whileHover={{y: -3}}>
                        <a href="/#projects">Projects</a>
                    </motion.li>
                    <motion.li whileHover={{y: -3}}>
                        <a href="/#skills">Skills</a>
                    </motion.li>
                    <motion.li whileHover={{y: -3}}>
                        <a href="/#contact">Contact</a>
                    </motion.li>
                </ul>
            </nav>

            {/*Mobile*/}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/*Toggle*/}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    );
};

export default Header;