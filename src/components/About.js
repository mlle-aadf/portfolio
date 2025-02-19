import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Name from "./Name";
import NavBar from "./NavBar";

import resume from "../data/Alexandra_de_Fourestier_CV.pdf";
import image from "../data/i1.jpg";

const About = () => {
    
    const linkedIn = <a href="https://linkedin.com/in/mlle-aadf" target="_blank" rel="noreferrer"><FaLinkedin className="tag"/></a>
    const ghLink = <a href="https://github.com/mlle-aadf" target="_blank" rel="noreferrer"><IoLogoGithub className="tag"/></a>
    const discord = <a href="https://discordapp.com/users/1111870664949891102" target="_blank" rel="noreferrer"><FaDiscord className="tag"/></a>
    const email = <a href="mailto:mlle.aadf@pm.me"><MdEmail className="tag"/></a>
    const CV = <a href={resume} target="_blank" rel="noreferrer" className="tag">CV</a>
    const close = String.raw` ]`
    
    const first =`
    const Alexandra = {

        devType: ["full_stack", "freelance"],
        skills: ["collaboration",
                 "thinking outside the box", 
                 "solving puzzles",
                 "awkward silences"],
        toolkit: ["MERN", "Figma", "git"], 
        links: [ `
    const last = `\n \n    }`

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

