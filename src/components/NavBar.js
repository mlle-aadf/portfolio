import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NavBar = () =>  {
        
    return(
        <>
        <div  className="navbar">
            
            <StyledLink to={'/about'} >about</StyledLink>
            <p>|</p>
            <StyledLink to={'/gallery'} >gallery</StyledLink>
            {/* <p>|</p>
            <StyledLink to={'/contact'} >contact</StyledLink> */}
        </div>
        </>

    )
}

const StyledLink = styled(NavLink)`
    margin: 1rem;
    text-decoration: none;
    color: var(--text);
    &:hover {
        font-weight: bold;
    }
    &:active {
        border-bottom: 2px solid white;
    }
`

export default NavBar