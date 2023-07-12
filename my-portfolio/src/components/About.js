import React, { useState } from "react";

function About() {
    return (
        <section className="bg-secondary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
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