import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
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
    ], ["1%", "-70%"])

    return (
        <section id="#works" ref={targetRef} className="relative h-[300vh] bg-dark ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{
                        x
                    }}
                    className="flex gap-4">
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
        className="group relative h-[500px] w-[700px] overflow-hidden rounded-2xl"
      >
        <div
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <button className=" bg-dark absolute z-10 right-3 bottom-3 rounded-2xl p-4 hover:bg-hover hover:scale-110 transition-all  ">
            <img src={images.eye} alt="" />
        </button>
      </div>
    );
  };


const cards = [
    {
        url : "https://www.behance.net/gallery/185668145/Rafazu-Agency-Website-Design",
        image : images.portfolio,
        id : 1
    },
    {
        url : "https://www.behance.net/gallery/185668145/Rafazu-Agency-Website-Design",
        image : images.seta,
        id : 2
    },
    {
        url : "https://www.behance.net/gallery/185668145/Rafazu-Agency-Website-Design",
        image : images.herdemney,
        id : 3
    },
    {
        url : "https://www.behance.net/gallery/185668145/Rafazu-Agency-Website-Design",
        image : images.nokta,
        id : 4
    },
    {
        url : "https://www.behance.net/gallery/185668145/Rafazu-Agency-Website-Design",
        image : images.toygar,
        id : 5
    },
    
]


