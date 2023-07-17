import React, { useState } from "react";

function Skills() {
    return (
        <section className="text-stone-200 px-5 py-32" id="skills">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="tracking-tight text-stone-200 text-6xl font-bold mb-5 border-b-[5px] w-[240px] border-stone-800 pb-1 border-opacity-50 drop-shadow-lg">
                        Skills
                    </h2>

                    <p className="pb-5">Cool things I've seen recently</p>
                </div>

                <div></div>
            </div>
        </section>
    );
};

export default Skills;