import React, { useState } from "react";
import JovanGlint from "../assets/JovanGlint_NoBack.png";

import {
    AiOutlineInstagram,
    AiOutlineGithub
} from "react-icons/ai";

function Hero() {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br /> I'm <span className="text-accent text-6xl">Jovan</span>, a<br />
                        Developer and Designer
                    </h1>

                    <p className="py-5">
                        React.js and Tailwind CSS are just a few things I'm great at.
                    </p>

                    <div className="flex py-5">
                        <a
                            href="https://www.instagram.com/bon_kojo/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineInstagram size={40} /> {" "}
                        </a>
                        <a
                            href="https://github.com/JayIKarus"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={40} /> {" "}
                        </a>
                    </div>
                    
                    <a
                        href="/#projects"
                        className=" btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img 
                        src={JovanGlint}
                        alt="got my eyes on you"
                        className="lgw-[80%] ml-auto h-116 w-116 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;