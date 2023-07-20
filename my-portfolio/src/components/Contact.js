import React, { useState, useRef } from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
    var myButton = {
        text: "Send"
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_l0yz78r", "template_6w3tyfe", form.current, "TlOtVM0HV0X8vcZfD")
            .then((result) => {
                myButton.text = "Thank You!";
            }, (err) => {
                console.log('Failed...', err)
            });
    };

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" id="contact">
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-stone-200 drop-shadow-lg">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-stone-300 sm:text-xl">Send me anything from jobs to cool art and music you want to share. Hope your day is better than before.</p>
                <form action="#" ref={form} onSubmit={sendEmail} class="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-md font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="text-md block w-full p-2.5 bg-stone-900 placeholder-stone-400 text-white drop-shadow-lg" placeholder="pierceD@heavens.com" required/>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-md font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" className="text-md block w-full p-2.5 bg-stone-900 placeholder-stone-400 text-white drop-shadow-lg" placeholder="Hot topic" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-md font-medium text-gray-300">Your message</label>
                        <textarea id="message" rows="6" name="message" className="text-md block w-full p-2.5 bg-stone-900 placeholder-stone-400 text-white drop-shadow-lg" placeholder="Wealth. Fame. Power. The man who had everything in this world..."></textarea>
                    </div>
                    <div className="container mx-auto flex flex-col items-center justify-center">
                        <button type="submit" className="py-3 px-8 text-2xl font-medium text-center bg-accent border-2 border-[#74BB77] drop-shadow-xl hover:bg-transparent duration-500 text-white sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 focus:ring-primary-800">{myButton.text}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;