import { motion } from "framer-motion"


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

export default function Navbar(){
    return(
        <motion.nav 
        initial={{
            y : "-100%",
        }}
        animate={{
            y : 0
        }}
        transition={{
            duration : .4
          }}
        className="  text-dark wrapper flex items-center justify-between h-[80px] ">
            <span className=" font-caveat text-[32px] ">
                <a href="#">
                    fk
                </a>
            </span>
            
            <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-base flex gap-16">
                <motion.li
                variants={item}
                >
                    <a href="/" className="hover:text-hover transition-colors">Home</a>
                </motion.li>

                <motion.li
                variants={item}
                >
                    <a href="#about" className="hover:text-hover transition-colors">About</a>
                </motion.li>

                <motion.li
                variants={item}
                >
                    <a href="#work" className="hover:text-hover transition-colors">Works</a>
                </motion.li>

                <motion.li
                variants={item}
                >
                    <a href="#contact" className="hover:text-hover transition-colors">Contact</a>
                </motion.li>
            </motion.ul>

        </motion.nav>
    )
}