import { images } from "~/utils/images"

export default function MobileWorks(){


    return (
        <section id="work" className="relative bg-dark ">

            <h2 className="text-5xl pt-16 pl-8 text-light font-bold selection:text-dark">Latest Works</h2>

            <div className=" w-full h-fit py-16">
                <div
                    className="flex flex-col items-center justify-center gap-16">
                    {
                        cards.map((card) => (
                            <Card card={card} key={card.id} />
                        ))
                    }


                </div>
            </div>
        </section>
    )
    
}



const Card = ({ card }) => {
    return (
      <div
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


