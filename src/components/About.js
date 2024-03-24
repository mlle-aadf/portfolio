// import { TypeAnimation } from "react-type-animation"
import NavBar from "./NavBar"
import Name from "./Name"
// https://react-type-animation.netlify.app/options
import { TypeAnimation } from "react-type-animation" 

// import image from "../IMG_20220226_230613_813.jpg"
import image from "../keys - Copy.jpg"

const About = () => {
    
    const line1 = String.raw`
    const Alexandra = {
    `
    const line2 = String.raw`
        location: 'Montréal, Canada',
        devType: ['full_stack', 'freelance'],
        stack: 'MERN',
    `
    const open = String.raw` [`
    const close = String.raw` ]`
    const ghLink = <a href="https://github.com/mlle-aadf" target="blank">gitHub</a>
    const email = String.raw`mlle.aadf@pm.me`
    const CV = "CV"
    const line4 = String.raw`
    
    }`

    return(
        <>
        <Name/>
        {/* <div style={AboutStyle}> */}
        <div className="about">
            <img src={image} className="photo" alt="a code ninja"/>

            <div className="const">
                <pre>
                {line1}
                {line2}    links:{open} {ghLink}, {email}, {CV} {close}
                {line4}
                </pre>

            <div>
            
            {/* <pre>
            location: 'Montréal, Canada',
            devType: ['full_stack', 'freelance'],
            stack: 'MERN'
            </pre>
            links: {ghLink}
            {line4} */}
            </div>
        </div>

        <NavBar/>
        </div>
        </>
    )

    }


export default About

