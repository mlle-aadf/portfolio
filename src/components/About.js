import { IoLogoGithub } from "react-icons/io"
import { FaDiscord } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import NavBar from "./NavBar"
import Name from "./Name"
// https://react-type-animation.netlify.app/options
import { TypeAnimation } from "react-type-animation" 

import image from "../data/keys.jpg"
import pdf from "../data/CV2024.pdf"

const About = () => {
    
    const ghLink = <a href="https://github.com/mlle-aadf" target="_blank"><IoLogoGithub className="tag"/></a>
    const close = String.raw` ]`
    const email = <a href="mailto:mlle.aadf@pm.me"><MdEmail className="tag"/></a>
    const discord = <a href="https://discordapp.com/users/1111870664949891102" target="_blank"><FaDiscord className="tag"/></a>
    const CV = <a href={pdf} target="_blank" className="tag">CV</a>

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
                <pre> 
                {first}'{ghLink}','{discord}','{email}','{CV}'{close}
                {last}
                </pre>
            </div>
        </div>
        <NavBar/>
        </>
    )
}


export default About

