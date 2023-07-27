import React, { useState } from "react";
import SelfReflection from "../assets/selfReflection.png";
import KidIcarus from "../assets/KidIcarus_SS.png";
import Tusk from "../assets/promoTusk_v2.png";
import Unreal from "../assets/jmk555_FP_Sequence.mp4";
import sciRECT from "../assets/sciRECT.png";
import OESPage from "../assets/OESPage.jpg";

function Projects() {
    
    const projects = [
        {
            img: SelfReflection,
            title: "Self-Reflection",
            desc: "A Unity 3D Game Project made by Flaming Bee Studios. I served as the Art Director, UI/UX Developer and a Programmer.",
            live: "https://sites.google.com/view/flaming-bee-studios/home", 
            isVideo: false
        },
        {
            img: Tusk,
            title: "Firmware Infirmary",
            desc: "A Unity 3D Senior Game Project made by Mudsoft. I served as the Audio Designer and Engineer using both Reaper and WWise.",
            live: "https://mudsoft.itch.io/firmware-infirmary",
            isVideo: false
        },
        {
            img: Unreal,
            title: "Realtime Visualization in Unreal 5",
            desc: "Alchemist Lab scene created in Unreal 5. Models made in Maya and textured in Substance Painter.",
            live: "https://www.artstation.com/artwork/Ke4l5B",
            isVideo: true
        },
        {
            img: KidIcarus,
            title: "Kid Icarus Fan Project",
            desc: "A Unity 3D Fan Game Project. A demake of the Nintendo 3ds game, Kid Icarus: Uprising reimagined as a 2D side-scroller.",
            live: "https://jayikarus.itch.io/project-icarus",
            isVideo: false
        },
        {
            img: sciRECT,
            title: "sciRECT",
            desc: "UI/UX Project for a lab sciences VR/Web application. This platform is meant for use by students and educators.",
            live: "https://www.artstation.com/artwork/el9BrG",
            isVideo: false
        },
        {
            img: OESPage,
            title: "OES UI/UX Prototype",
            desc: "UI/UX project for an Upwork Client.",
            live: "https://www.artstation.com/artwork/BXnrO4",
            isVideo: false
        }
    ];

    return (
        <section className=" text-stone-200 px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cold-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="tracking-tight text-6xl font-bold mb-5 w-[300px] border-stone-800 border-opacity-50 pb-1 drop-shadow-lg">
                        Projects
                    </h2>
                    <p className="pb-10 w-3/6">
                        Most of my recent projects have been games built in Unity, models, textures, and animations built using Maya and Substance Painter as well as scenes created in Unreal.
                    </p>
                </div>
                <div className="about-img"></div>
            </div>
            
            <div className="projects container mx-auto grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => {
                    return (
                        <a href={project.live} target="_blank">
                            <div className="relative group block drop-shadow-md shadow-md shadow-stone-800" key={i}> 
                                {project.isVideo ? 
                                <video src={project.img} alt={project.title} className=" opacity-100 h-[600px] w-[800px] duration-500 group-hover:opacity-25 object-cover max-h-full max-w-full rounded" autoPlay loop/> :
                                <img src={project.img} alt={project.title} className=" opacity-100 h-[600px] w-[800px] duration-500 group-hover:opacity-25 object-cover max-h-full max-w-full rounded"/> 
                                }
                                <div className="flex absolute left-0 right-0 top-1/3 bottom-1/3 mx-auto w-[90%] h-32 opacity-0 duration-500 justify-center flex-col group-hover:opacity-100">
                                    <h2 className="py-5 text-center font-bold px-2 text-white text-6xl">
                                        {project.title}
                                    </h2>
                                    <p className="py-5 text-center px-2 text-white">
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