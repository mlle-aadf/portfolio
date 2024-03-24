import NavBar from "./NavBar"
import Name from "./Name"
// https://react-type-animation.netlify.app/options
import { TypeAnimation } from "react-type-animation" 

import image from "../data/keys.jpg"

import pdf from "../data/CV2021.pdf"

const About = () => {
    
    const ghLink = <a href="https://github.com/mlle-aadf" target="_blank">gitHub</a>
    const open = String.raw` [`
    const close = String.raw` ]`
    const email = <a href="mailto:mlle.aadf@pm.me">mlle.aadf@pm.me</a>
    const CV = <a href={pdf} target="_blank">CV</a>

    const first =`
    const Alexandra = {

        location: 'Montréal, Canada',
        devType: ['full_stack', 'freelance'],
        stack: 'MERN',
        links: [ `
    const last = `\n\n    }`

    return(
        <>
        <Name/>
        {/* <div style={AboutStyle}> */}
        <div className="about">
            <img src={image} className="photo" alt="a code ninja"/>

            <div className="const">
                <pre> 
                {first}'{ghLink}','{email}', '{CV}'{close}
                {last}
                </pre>
        </div>

        <NavBar/>
        </div>
        </>
    )

    }


export default About

