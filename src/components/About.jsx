import { motion, useScroll, useTransform } from "framer-motion"


export default function About(){


    const {scrollYProgress} = useScroll({
        offset : ["start start", "end start"]
    })

    const xPosition = useTransform(scrollYProgress, [0, 1], ["-100%", "600%"])

    return(
        <section id="about" className=" flex flex-col items-center justify-center gap-32 min-h-screen overflow-x-hidden max-md:mt-24 ">
            
            <div className="relative w-full">
                <h2 className="text-5xl text-center text-dark font-bold ">
                    AB
                    <span className=" hover:italic">O</span>
                    UT M
                    <span className="hover:italic transition-all">E</span>
                </h2>
                
                <motion.h3 
                style={{
                    x : xPosition
                }}
                className=" -z-10 text-9xl text-[rgba(86,85,100,.2)] font-bold absolute -top-10 wrapper max-md:-top-[100px] ">WHO AM I?</motion.h3>
            </div>
            
            <p className=" text-lg text-dark max-w-2xl text-justify wrapper">
                Hello, I'm an innovative Web Developer and UI/UX Designer with a focus on Frontend Development. Proficient in HTML, CSS, Bootstrap, Tailwind, Javascript, Node JS, and React, I thrive on sculpting captivating digital experiences. Embracing a passion for exploring emerging technologies, I am dedicated to pushing boundaries and crafting the future of web development.
            </p>
        </section>
    )
}