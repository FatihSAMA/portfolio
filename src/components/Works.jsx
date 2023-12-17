import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import cards from "~/utils/cards"
import { images } from "~/utils/images"

export default function Works(){



    return(
        
        <HorizontalScrollCarousel />
        
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({target: targetRef})

    const x = useTransform(scrollYProgress, [
        0, 1
    ], ["1%", "-85%"])

    return (
        <section id="work" ref={targetRef} className="relative h-[300vh] bg-dark ">

            <h2 className="text-5xl pt-16 pl-8 text-light font-bold selection:text-dark">Latest Works</h2>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{
                        x
                    }}
                    className="flex gap-16">
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
      <div
        key={card.id}
        className="group relative h-[500px] w-[800px] overflow-hidden rounded-2xl"
      >
        <div
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <a className=" bg-dark absolute z-10 right-3 bottom-3 rounded-2xl p-4 hover:bg-hover hover:scale-110 transition-all  " href={card.url} target="_blank" >
            <img src={images.eye} alt="" />
        </a>
      </div>
    );
  };





