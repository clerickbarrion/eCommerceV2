import React, {useRef, useState} from "react"

export default function Carousel(){
    let sectionRef = useRef(null)
    let [scrollValue, setScrollValue] = useState(0)
    function scrollLeft(){
        const interval = setInterval(()=>{
            if (sectionRef.current){
                switch (scrollValue){
                    case 240*12:
                        setScrollValue(0)
                        sectionRef.current.scrollLeft = scrollValue
                        clearInterval(interval)
                        break;
                    default:
                        setScrollValue(scrollValue+=240)
                        sectionRef.current.scrollLeft = scrollValue
                }
            }
        },3000)
    }
    scrollLeft()
    return (
        <section className="carousel" ref={sectionRef}>
            <figure className="carousel-item"><img src={require("../images/betta.png")} alt="betta"/></figure>
            <figure className="carousel-item"><img src={require("../images/goldfish.png")} alt="goldfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/tetra.png")} alt="tetra"/></figure>
            <figure className="carousel-item"><img src={require("../images/guppy.png")} alt="guppy"/></figure>
            <figure className="carousel-item"><img src={require("../images/clownfish.png")} alt="clownfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/bluetang.png")} alt="bluetang"/></figure>
            <figure className="carousel-item"><img src={require("../images/mandarinfish.png")} alt="mandarinfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/angelfish.png")} alt="angelfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/mantisshrimp.png")} alt="mantis shrimp"/></figure>
            <figure className="carousel-item"><img src={require("../images/arowana.png")} alt="arowana"/></figure>
            <figure className="carousel-item"><img src={require("../images/discusfish.png")} alt="discus fish"/></figure>
            <figure className="carousel-item"><img src={require("../images/puffer.png")} alt="puffer"/></figure>
        </section>
    )
}