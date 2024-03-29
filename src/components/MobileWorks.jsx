import { images } from "~/utils/images"
import { motion } from "framer-motion"
import { useRef } from "react"
import cards from "~/utils/cards"


const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  }
    
  const item = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition : {
        delay : .3,
        type: "spring", stiffness: 100
      }
    }
  }



export default function MobileWorks(){

    const ref = useRef()

    return (
        <section id="work"  className="relative bg-dark ">

            <h2  className="text-5xl pt-16 pl-8 text-light font-bold selection:text-dark">Latest Works</h2>

            <div className=" w-full h-fit py-16">
                <motion.div
                // variants={container}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once : true }}
                
                    className="flex flex-col items-center justify-center gap-16">
                    {
                        cards.map((card) => (
                            <Card card={card} key={card.id} />
                        ))
                    }


                </motion.div>
            </div>
        </section>
    )
    
}



const Card = ({ card }) => {
    return (
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once : true }}
        className="group relative w-[90%] min-h-[200px] h-[300px] rounded-lg"
        style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        <a className=" bg-dark absolute z-10 right-3 bottom-3 rounded-2xl p-4 hover:bg-hover hover:scale-110 transition-all  " href={card.url} target="_blank" >
            <img src={images.eye} alt="" />
        </a>
      </motion.div>
    );
  };



