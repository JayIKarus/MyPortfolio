import React from "react";
import { motion } from "framer-motion";
import {
    BiLogoFigma,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoReact,
    BiLogoAngular,
    BiLogoVisualStudio,
    BiLogoBlender
} from "react-icons/bi";
import {
    SiUnrealengine,
    SiUnity,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobeindesign,
    SiAdobexd,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    SiMusescore,
    SiWwise,
    SiFmod,
    SiKrita,
    SiAseprite,
    SiAutodesk
} from "react-icons/si";

function Skills() {

    const mySkills = [
        {
            img: BiLogoFigma,
            desc: "Figma"
        },
        {
            img: BiLogoHtml5,
            desc: "Html"
        },
        {
            img: BiLogoCss3,
            desc: "CSS"
        },
        {
            img: BiLogoReact,
            desc: "React"
        },
        {
            img: BiLogoAngular,
            desc: "Angular"
        },
        {
            img: BiLogoVisualStudio,
            desc: "Visual Studio"
        },
        {
            img: SiAutodesk,
            desc: "Maya"
        },
        {
            img: SiAdobeillustrator,
            desc: "Adobe Illustrator"
        },
        {
            img: SiAdobephotoshop,
            desc: "Adobe Photoshop"
        },
        {
            img: SiAdobeindesign,
            desc: "Adobe InDesign"
        },
        {
            img: SiAdobexd,
            desc: "Adobe XD"
        },
        {
            img: SiAdobepremierepro,
            desc: "Adobe Premiere Pro"
        },
        {
            img: SiAdobeaftereffects,
            desc: "Adobe After Effects"
        },
        {
            img: SiUnrealengine,
            desc: "Unreal 5"
        },
        {
            img: SiUnity,
            desc: "Unity"
        },
        {
            img: SiMusescore,
            desc: "Musescore"
        },
        {
            img: SiWwise,
            desc: "Wwise"
        },
        {
            img: SiFmod,
            desc: "FMOD"
        },
        {
            img: SiKrita,
            desc: "Krita"
        },
        {
            img: SiAseprite,
            desc: "Aseprite"
        },
        {
            img: BiLogoBlender,
            desc: "Blender"
        },
    ]
    return (
        <section className="text-stone-200 px-5 py-8 lg:py-32" id="skills">
            <div className="mx-auto">
                {/* <div className="about-info mb-5"> */}
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-stone-200 drop-shadow-lg">
                    Skills
                </h2>
                {/* </div> */}

                <div className="pb-10"></div>
            </div>
            <div className="container mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 gap-y-24 justify-items-center place-content-around justify-stretch">
                {mySkills.map((skill, i) => {
                    const Icon = skill.img;
                    return (
                        <div className="mx-auto col-span-1 h-[160px] w-auto flex flex-col group hover:opacity-100 drop-shadow-xl shadow-stone-800 " key={i}>
                            <motion.a whileHover={{scale: 1.2}}
                                className="mx-auto h-screen text-accent items-center hover:text-stone-200 opacity-100 group-hover:opacity-100 relative duration-500"
                            >
                                {" "}
                                <Icon size={110} /> {" "}
                                
                            </motion.a>
                            <div className="flex flex-wrap mt-auto opacity-0 duration-500 justify-center flex-col group-hover:opacity-100 pointer-events-none">
                                    <p className="mx-auto font-bold text-center place-items-center opacity-0 group-hover:opacity-100 duration-500">{skill.desc}</p>
                                </div>
                        </div>
                        
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;