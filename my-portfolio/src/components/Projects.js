import React from "react";
import SelfReflection from "../assets/selfReflection.webp";
import KidIcarus from "../assets/KidIcarus_SS.webp";
import Tusk from "../assets/promoTusk_v2.webp";
import Unreal from "../assets/jmk555_FP_Sequence.mp4";
import sciRECT from "../assets/sciRECT.webp";
import OESPage from "../assets/OESPage.webp";
import MinePig from "../assets/MinePig_Anim2_1.mp4";
import Bowser from "../assets/DragonDance.webp";
import Calcutone from "../assets/Calcutone.webp";

function Projects() {
    
    const projects = [
        {
            img: Calcutone,
            title: "Daily UI Project",
            desc: "My portfolio of graphics made as part of the Daily UI challenge.",
            live: "https://www.artstation.com/jovial/albums/9468004",
            isVideo: false
        },
        {
            img: Bowser,
            title: "DGA Graphics",
            desc: "A sample of graphics made for the Drexel Gaming Association as a Marketing Officer.",
            live: "https://www.artstation.com/artwork/6NPRmO",
            isVideo: false
        },
        {
            img: OESPage,
            title: "OES UI/UX Prototype",
            desc: "UI/UX project for an Upwork Client using their branding guidelines.",
            live: "https://www.artstation.com/artwork/BXnrO4",
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
            img: MinePig,
            title: "Minecraft Art Gallery Animation",
            desc: "Animation created and rendered in Maya. Upscaling and creation of textures done in Substance Painter.",
            live: "https://www.artstation.com/artwork/JvkaxR",
            isVideo: true
        },
        {
            img: KidIcarus,
            title: "Kid Icarus Fan Project",
            desc: "A Unity 3D Fan Game Project. A demake of the Nintendo 3ds game, Kid Icarus: Uprising reimagined as a 2D side-scroller.",
            live: "https://jayikarus.itch.io/project-icarus",
            isVideo: false
        },
        
    ];

    return (
        <section className=" text-stone-200 px-5 py-8 lg:py-32" id="projects">
            <div className="mx-auto">
                {/* <div className="about-info mb-5 mx-auto"> */}
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-stone-200 drop-shadow-lg">
                    Projects
                </h2>
                <p className="pb-10 mx-auto md:w-4/6 mb-8 lg:mb-16 font-light text-center text-stone-300">
                    On top of my UI/UX work, many of my recent projects have been games built in Unity and 3D models, textures, and animations built using Maya and Substance Painter. My work also includes real-time visualizations in Unreal 5.
                </p>
                {/* </div> */}
                {/* <div className="about-img"></div> */}
            </div>
            
            <div className="projects container mx-auto grid justify-stretch md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => {
                    return (
                        <a href={project.live} target="_blank" rel="noreferrer">
                            <div className="relative group block drop-shadow-xl shadow-md shadow-stone-800" key={i}> 
                                {project.isVideo ? 
                                <video src={project.img} alt={project.title} className=" opacity-100 h-[600px] w-[800px] duration-500 group-hover:opacity-25 object-cover max-h-full max-w-full rounded" autoPlay loop muted/> :
                                <img src={project.img} alt={project.title} className=" opacity-100 h-[600px] w-[800px] duration-500 group-hover:opacity-25 object-cover max-h-full max-w-full rounded"/> 
                                }
                                <div className="flex absolute left-0 right-0 top-1/3 bottom-1/3 mx-auto w-[90%] h-32 opacity-0 duration-500 justify-center flex-col group-hover:opacity-100">
                                    <h2 className="py-5 text-center font-bold px-2 text-stone-200 2xl:text-6xl lg:text-4xl md:text-3xl xl:text-5xl text-5xl">
                                        {project.title}
                                    </h2>
                                    <p className="py-5 text-center px-2 text-stone-200">
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