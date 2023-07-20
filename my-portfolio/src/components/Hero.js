import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import JovanGlint from "../assets/JovanGlint_NoBack.png";
import myResume from "../assets/Jovan_Resume_071823.pdf";

import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillProfile
} from "react-icons/ai";

function Hero() {
    return (
        <section className="px-5 text-stone-200 pb-32 pt-16">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-8xl">
                        Hi, <br /> I'm <motion.span className="text-accent text-9xl inline-block duration-200" whileHover={{ scale: 1.1}} initial={{ scale: 1}}>Jovan</motion.span>, <br />
                        Developer and Designer
                    </h1>

                    <div className="flex py-8">
                        <motion.a whileHover={{y: -3}}
                            href="https://www.instagram.com/bon_kojo/"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                            target="_blank"
                            type="text/html"
                        >
                            {" "}
                            <AiOutlineInstagram size={40} /> {" "}
                        </motion.a>
                        <motion.a whileHover={{y: -3}}
                            href="https://github.com/JayIKarus"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                            target="_blank"
                            type="text/html"
                        >
                            {" "}
                            <AiOutlineGithub size={40} /> {" "}
                        </motion.a>
                        <motion.a whileHover={{y: -3}}
                            href="https://www.linkedin.com/in/jovan-kouakou/"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                            target="_blank"
                            type="text/html"
                        >
                            {" "}
                            <AiFillLinkedin size={40} /> {" "}
                        </motion.a>
                        <motion.a whileHover={{y: -3}}
                            href={myResume}
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                            target="_blank"
                        >
                            {" "}
                            <AiFillProfile size={40} /> {" "}
                        </motion.a>
                    </div>
                    
                    <a 
                        href="/#projects"
                        className="btn bg-accent border-2 border-[#74BB77] text-stone-200 px-6 py-3 drop-shadow-xl hover:bg-transparent duration-500"
                    >
                        See Projects
                    </a>
                </div>

                <motion.div 
                    className="hero-img" 
                    animate={{
                        x: [0,Math.random(0,20), 15, 15, 0, -15, -15, 0], 
                        y: [0, 15, -15, 0, 15, -15, 0]}}
                    transition={{
                        ease: "easeInOut",
                        duration: 15,
                        repeat: Infinity,
                        }}
                    >
                    <a href={myResume} target="_blank">
                        <img 
                            src={JovanGlint}
                            alt="got my eyes on you"
                            className="lgw-[80%] ml-auto h-116 w-116 rounded-full drop-shadow-2xl hover:shadow-inner"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;