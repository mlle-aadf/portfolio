import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavBar = () =>  {
        
    return(
        <>
        <Nav>
            
            <StyledLink to={'/about'} >about</StyledLink>
            <p>|</p>
            <StyledLink to={'/gallery'} >gallery</StyledLink>
        </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10%;
    width: 100vw;
    height: 1.5rem;
    font-size: 1rem;
    
    @media screen and (min-width: 640px)
    {
        font-size: 1.25rem;
        bottom: 10%;
    }
`

const StyledLink = styled(NavLink)`
    margin: 1rem;
    text-decoration: none;
    color: var(--text);
    font-family: "Montserrat", sans-serif;
    &:hover {
        font-weight: 400;
    }
    &:active {
        font-weight: 400;
        border-bottom: 2px solid white;
    }
`

export default NavBar