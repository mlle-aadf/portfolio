import styled from "styled-components"
import { NavLink } from "react-router-dom"
// import image from "../github.svg"

const Name = () => {
    return(
        <header style={{NameLink}}>
            <NameLink to={'/'}><p>AADF |</p></NameLink>
            {/* <img src={image} style={{height:"2rem"}}></img> */}
        </header>
    )
}


const NameLink = styled(NavLink)`
    margin-right: 1.5rem;
    display: block;
    align-items: center;
    float: right;
    top:0;
    right: 0;

    width: fit-content;
    line-height: 1;
    text-decoration: none;
    color: var(--text);
    font-size: 2rem;
    &:hover {
        font-weight: 400;
        /* border-bottom: 2px solid var(--text); */
    }

  @media screen and (min-width: 640px) {
        position: fixed;   
    }
    `
// const NameStyle = {
//     width: "100vw", display:"flex", justifyContent:"flex-end", alignItems:"center"
// }
    
export default Name
