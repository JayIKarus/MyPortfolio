import React, { useState } from "react";

function About() {
    return (
        <section className=" text-stone-200 px-5 py-32 " id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="tracking-tight text-6xl font-bold mb-5 border-b-[5px] w-[320px] border-stone-800 border-opacity-50 pb-1 drop-shadow-lg">
                        Who am I?
                    </h2>

                    <p className="pb-5">
                        Hola
                    </p>
                    <p className="pb-5">
                        Bonjour
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default About;