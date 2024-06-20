import Name from "./Name"
import NavBar from "./NavBar"
import slides from "../data/slides/slides"
// import slides from "../data/slides/slides"

import Carousel from "nuka-carousel"
import { useMediaQuery } from "react-responsive"


const Gallery = () =>  {

    const params = {
        className: "carousel",
        autoplay : "true" ,
        cellAlign: "center",
        wrapAround: "true",
        cellSpacing: "!isMobile && 10",
        animation: "zoom"
    }

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    
    return(
        <>
        <Name/>
        <Carousel {...params} slidesToShow={ isMobile ? 1 : 2} 
    
        defaultControlsConfig={{nextButtonText:">>", nextButtonClassName:"next", prevButtonText:"<<"}}

        style={isMobile ? MobileStyle : BigScreenStyle}>
        
        {slides.map((slide)=> 
            <div>
                <a href={slide.link} target="blank"><img src={slide.src} key={slide} alt={slide.alt} className="slide" style={{display:"block", margin:"0 auto"}}/></a>
                <h4 style={{textAlign: "center", marginTop: "0.25rem"}}>{slide.title}</h4>
            </div>
        )}

        </Carousel>
        <NavBar/>
        </>
    )
}


const MobileStyle = {
    position: "fixed",
    top: "35%",
    width: "80vw",
    left: "10%"
}

const BigScreenStyle = {
    position: "fixed",
    top: "20%",
    left: "5%",
    width: "90vw"
}


export default Gallery