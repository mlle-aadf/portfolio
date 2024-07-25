import { IoLogoGithub } from "react-icons/io"
import { FaDiscord, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import NavBar from "./NavBar"
import Name from "./Name"
// import { TypeAnimation } from "react-type-animation" 

import image from "../data/keys.jpg"
import resume from "../../src/data/Alexandra_ de_ Fourestier_CV.pdf"

const About = () => {
    
    const ghLink = <a href="https://github.com/mlle-aadf" target="_blank"><IoLogoGithub className="tag"/></a>
    const linkedIn = <a href="https://linkedin.com/in/mlle-aadf" target="_blank"><FaLinkedin className="tag"/></a>
    const close = String.raw` ]`
    const email = <a href="mailto:mlle.aadf@pm.me"><MdEmail className="tag"/></a>
    const discord = <a href="https://discordapp.com/users/1111870664949891102" target="_blank"><FaDiscord className="tag"/></a>
    const CV = <a href={resume} target="_blank" className="tag">CV</a>


    // stack/skills ---> MERN, js html css figma git
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
        <div className="about">
            <img src={image} className="photo" alt="a code ninja"/>
            <div className="const">
                <pre > 
                {first}'{linkedIn}','{ghLink}','{discord}','{email}','{CV}'{close}
                {last}
                </pre>
            </div>
        </div>
        <NavBar/>
        </>
    )
}


export default About

