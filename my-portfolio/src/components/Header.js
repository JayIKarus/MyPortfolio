import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


// function ClickOutside(ref, onClickOutside) {
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 onClickOutside();
//             }
//         }

//         document.body.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.body.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [ref, onClickOutside]);
// }

let useClickOutside = (handler) => {
    let domRef = useRef();

    useEffect(() => {
        let handleClickOutside = (event) => {
            if (!domRef.current.contains(event.target)) {
                handler();
                console.log(event.target)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    return domRef;
}

function Header() {
    const [toggle, setToggle] = useState(false);

    let domNode = useClickOutside(() => {
        setToggle(false);
    })
    // onClickOutside(burger, () => {
    //     setToggle(false);
    // })
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className={toggle ? "flex justify-between px-5 py-2 text-stone-200 fixed w-full z-10  shadow-stone-800 bg-opacity-100 duration-500 bg-stone-800"  : "flex justify-between px-5 py-2 text-stone-200 fixed w-full z-10 md:hover:drop-shadow-xl  shadow-stone-800 bg-opacity-0 hover:bg-opacity-80 duration-500 bg-stone-800 "}>
            <a href="/" className="logo text-2xl font-bold text-accent -translate-x-1 hover:text-white duration-500">
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
            <nav ref={domNode} className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0 z-0"}>
                <ul className="flex flex-col justify-between gap-2 translate-y-1">
                    <li>
                        <a href="/#about" className=" drop-shadow-[0_1px_0.6px_rgba(0,40,0,0.6)]">About</a>
                    </li>
                    <li>
                        <a href="/#projects" className=" drop-shadow-[0_1px_0.6px_rgba(0,40,0,0.6)]">Projects</a>
                    </li>
                    <li>
                        <a href="/#skills" className=" drop-shadow-[0_1px_0.6px_rgba(0,40,0,0.6)]">Skills</a>
                    </li>
                    <li>
                        <a href="/#contact" className=" drop-shadow-[0_1px_0.6px_rgba(0,40,0,0.6)]">Contact</a>
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