import { motion } from 'framer-motion'

export default function TopButton(){
    return(
        <motion.button
        initial={{
            opacity : 0,
            y : 100
        }}
        animate={{
            opacity : 1,
            y : 0
        }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        style={{
            borderRadius : "37% 49% 38% 60% / 60% 73% 35% 38%"
        }}
        className="fixed bottom-5 right-5 bg-dark text-light p-5 hover:scale-105 transition-all z-50 bg-gradient-to-t from-dark to-main "
        >
            UP
        </motion.button>
    )
}