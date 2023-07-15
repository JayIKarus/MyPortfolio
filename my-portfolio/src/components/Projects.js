import React, { useState } from "react";
import selfReflection from "../assets/selfReflection.png";
import firmwareInfirmary from "../assets/firmwareInfirmary.png";


function Projects() {
    
    const projects = [
        {
            img: selfReflection,
            title: "Self-Refelection",
            desc: " A Unity 3D Game Project made by Flaming Bee Studios. I served as the Art Director, UI/UX Developer and a Programmer.",
            live: "https://sites.google.com/view/flaming-bee-studios/home?authuser=0", 
        },
        {
            img: firmwareInfirmary,
            title: "Firmware Infirmary",
            desc: " A Unity 3D Senior Game Project made by Mudsoft. I served as the Audio Designer and Engineer using both Reaper and WWise.",
            live: "https://mudsoft.itch.io/firmware-infirmary"
        },
    ];

    return (
        <section className=" text-stone-200 px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cold-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="tracking-tight text-6xl font-bold mb-5 border-b-[5px] w-[300px] border-stone-800 border-opacity-50 pb-1 drop-shadow-lg">
                        Projects
                    </h2>
                    <p className="pb-5">
                        Most of my recent projects have been games built in Unity, models, textures, and animations built in Maya and Substance Painter, and scenes created in Unreal. I'm always trying to something and create something cool.
                    </p>
                </div>
                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <a href={project.live} target="_blank">
                            <div className="relative" key={i}>
                                <image src={project.img} alt={project.title} />
                                <div className="flex absolute left-0 right-0 top-[20px] bottom-0 mx-auto w-[90%]  h-32 bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                                    <p className="py-5 text-center font-bold px-2 text-white">
                                        {project.desc}
                                    </p>
                                </div>
                                
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;