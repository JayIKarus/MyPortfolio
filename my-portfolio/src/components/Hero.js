import React, { useState } from "react";
import JovanGlint from "../assets/JovanGlint_NoBack.png";

import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillLinkedin
} from "react-icons/ai";

function Hero() {
    return (
        <section className="px-5 text-stone-200 pb-32 pt-16">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-8xl">
                        Hi, <br /> I'm <span className="text-accent text-9xl">Jovan</span>, a<br />
                        Developer and Designer
                    </h1>

                    <div className="flex py-8">
                        <a
                            href="https://www.instagram.com/bon_kojo/"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                        >
                            {" "}
                            <AiOutlineInstagram size={40} /> {" "}
                        </a>
                        <a
                            href="https://github.com/JayIKarus"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                        >
                            {" "}
                            <AiOutlineGithub size={40} /> {" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jovan-kouakou/"
                            className="pr-4 inline-block text-accent hover:text-stone-200"
                        >
                            {" "}
                            <AiFillLinkedin size={40} /> {" "}
                        </a>
                    </div>
                    
                    <a
                        href="/#projects"
                        className=" btn bg-accent border-2 border-[#74BB77] text-stone-200 px-6 py-3 drop-shadow-xl hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img 
                        src={JovanGlint}
                        alt="got my eyes on you"
                        className="lgw-[80%] ml-auto h-116 w-116 rounded-full drop-shadow-2xl hover:shadow-inner"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;