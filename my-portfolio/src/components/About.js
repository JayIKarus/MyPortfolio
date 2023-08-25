import React from "react";
import {motion} from "framer-motion";
import FI_Logo from "../assets/FI_Logo.svg"
import COS_Logo from "../assets/COS_LOGO.webp"
import Yes from "../assets/yes.webp"

function About() {
    return (
        <section className=" text-stone-200 px-5 py-16 " id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center content-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="tracking-tight text-6xl font-bold mb-5 w-[320px] border-stone-800 border-opacity-30 pb-1 drop-shadow-lg">
                        Who Is <motion.span className="text-accent inline-block duration-200" whileHover={{ scale: 1.1}} initial={{ scale: 1}}>He</motion.span>?
                    </h2>

                    <p className="pb-5">
                        Jovan Kouakou is a developer and designer of many things. From websites to applications to games, his aim is always to deliver a memorable experience to anyone who experiences his work. Most recently, he's worked as an Audio Designer/Engineer as well as an Art Director on two Unity game projects. Jovan has also led the UI/UX development of several projects and serves as a Marketing Officer for the Drexel Gaming Association.
                    </p>
                    <p className="pb-5">
                        In his free time, you can find Jovan practicing guitar, making sprites and animations, playing Hearthstone, or lamenting over the books he'll never read.
                    </p>
                    <p className="pb-5">
                        Do yourself a favor and listen to Chasing Waves by Vista Kicks - it's actually the album of the summer.
                    </p>
                </div>
                <div className="container grid md:grid-flow-row md:grid-cols-3 items-center justify-center md:justify-between space-y-8 " >
                    <div className="lg:-right-16 relative opacity-50 group hover:opacity-100 duration-500 ">
                        <a href="https://soundcloud.com/jovan-jovial/sets/firmware-infirmary-official-soundtrack" target="_blank" rel="noreferrer">
                            <img className="lgw-[80%] w-64 h-64 drop-shadow-xl rounded-full shadow-md shadow-stone-800 object-cover" src={FI_Logo} alt="Firmware Infirmary Soundtrack"/>
                        </a>
                        <div className="flex flex-wrap mt-auto opacity-0 duration-500 justify-center flex-col group-hover:opacity-100 pointer-events-none">
                            <p className="mx-auto font-bold text-center place-items-center opacity-0 group-hover:opacity-100 duration-500">SoundCloud</p>
                        </div>
                    </div>
                    <div className="lg:top-64 relative opacity-50 group hover:opacity-100 duration-500">
                        <a href="https://podcasters.spotify.com/pod/show/coreofscore" target="_blank" rel="noreferrer">
                            <img className="lgw-[80%] w-64 h-64 drop-shadow-xl rounded-full shadow-md shadow-stone-800 object-cover" src={COS_Logo} alt="Core of Score Podcast"/>
                        </a>
                        <div className="flex flex-wrap mt-auto opacity-0 duration-500 justify-center flex-col group-hover:opacity-100 pointer-events-none">
                            <p className="mx-auto font-bold text-center place-items-center opacity-0 group-hover:opacity-100 duration-500">Podcast</p>
                        </div>
                    </div>
                    <div className="lg:right-16 relative opacity-50 group hover:opacity-100 duration-500">
                        <a href="https://open.spotify.com/user/12162886651" target="_blank" rel="noreferrer">
                            <img className="lgw-[80%] w-64 h-64 drop-shadow-xl rounded-full shadow-md shadow-stone-800 object-cover" src={Yes} alt="Spotify Profile"/>
                        </a>
                        <div className="flex flex-wrap mt-auto opacity-0 duration-500 justify-center flex-col group-hover:opacity-100 pointer-events-none">
                            <p className="mx-auto font-bold text-center place-items-center opacity-0 group-hover:opacity-100 duration-500">Spotify</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;