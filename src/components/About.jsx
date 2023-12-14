import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export default function About(){

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start start", "end start"]
    })

    const xPosition = useTransform(scrollYProgress, [0, 1], ["-100%", "450%"])

    return(
        <section id="#about" className=" flex flex-col items-center justify-center gap-20 min-h-screen overflow-x-hidden ">
            
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
                className=" -z-10 text-9xl text-[rgba(86,85,100,.2)] font-bold absolute -top-10 wrapper ">WHO AM I?</motion.h3>
            </div>
            
            <p className=" text-lg text-dark max-w-2xl text-justify">
                My name is Fatih and I am a Web Developer and also UI/UX Designer. I work as a Frontend Developer and I am comfortable working with HTML, CSS, Bootstrap, Tailwind, Javascript, Node JS and React. I enjoy experimenting with new technologies.
            </p>
        </section>
    )
}