import { images } from "~/utils/images"
import { motion } from "framer-motion"
import Typed from 'typed.js'
import { useRef } from "react"
import { useEffect } from "react"

export default function Hero(){

    const type = useRef()

    useEffect(() => {
        const typed = new Typed(type.current, {
            strings : ["Front-end Developer", "UI/UX Designer"],
            typeSpeed : 100,
            backSpeed : 50,
            backDelay: 1000,
            loop : true,
            startDelay : 300
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };

    }, [])

    

    return(
        <section className=" flex max-md:flex-col items-center justify-center md:gap-20 min-h-hero ">
            <motion.div
            initial={{ scale: 0, rotate: 30, x : "-50%"}}
            animate={{ rotate : 0, scale: 1, x : 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            >
                 <img src={images.hero} alt="Hero Image" />
            </motion.div>
            <motion.div
            initial={{ scale: 0, rotate: 0, x : "100%"}}
            animate={{ rotate : 0, scale: 1, x : 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="  flex flex-col gap-10 items-start max-md:wrapper max-md:gap-8  ">
                <div>
                    <h1 className=" font-shadows text-8xl max-md:text-7xl">Fatih Kabul</h1>
                    <h2 className=" text-4xl text-main max-md:text-3xl " >
                        <span ref={type}></span>
                    </h2>
                </div>
                <p className=" max-w-md">
                    Hi, I'm a web developer and UI/UX designer. I'm as passionate about coding as I am about aesthetics. I enjoy creating user-friendly and impactful digital experiences. Take a look below to learn more about me.
                </p>
                <a href="#contact" className=" bg-dark text-light px-[50px] py-5 rounded-[20px] hover:bg-hover transition-all hover:scale-105 ">
                    Get in touch
                </a>
            </motion.div>
        </section>
    )
}