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
            <figure className="carousel-item"><img src={require("../images/betta.avif")} alt="betta"/></figure>
            <figure className="carousel-item"><img src={require("../images/goldfish.avif")} alt="goldfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/tetra.png")} alt="tetra"/></figure>
            <figure className="carousel-item"><img src={require("../images/guppy.jpeg")} alt="guppy"/></figure>
            <figure className="carousel-item"><img src={require("../images/clownfish.webp")} alt="clownfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/bluetang.webp")} alt="bluetang"/></figure>
            <figure className="carousel-item"><img src={require("../images/mandarinfish.jpeg")} alt="mandarinfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/angelfish.avif")} alt="angelfish"/></figure>
            <figure className="carousel-item"><img src={require("../images/mantisshrimp.webp")} alt="mantis shrimp"/></figure>
            <figure className="carousel-item"><img src={require("../images/arowana.avif")} alt="arowana"/></figure>
            <figure className="carousel-item"><img src={require("../images/discusfish.jpeg")} alt="discus fish"/></figure>
            <figure className="carousel-item"><img src={require("../images/puffer.jpeg")} alt="puffer"/></figure>
        </section>
    )
}