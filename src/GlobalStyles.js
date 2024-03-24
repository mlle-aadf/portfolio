import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

        :root {
            --main: rgb(25, 25, 25);
            --text: rgb(221, 221, 221);
        }

body {
    font-family: "Source Code Pro", monospace;
        font-weight: 200;
        font-size: 1rem;
        max-height: 100vh;
        max-width: 100vw;
        background-color: black;
        color: var(--text);

    @media screen and (min-width: 640px){
        font-size: 1.5rem;
    }
}
	

.navbar {
    
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
}

.about {
    margin: 0;
    display:flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 70vh;

    @media screen and (min-width: 640px)
    {
        margin: 5rem 0.5rem;
        flex-direction: row;
        align-items: center;
    }
}

.photo {
    height: 35vh;
    border-radius: 10px;
    display: inline-block;
    @media screen and (min-width: 640px)
    {
       margin-right: 1rem;
    }
}


.const {
    line-Height: 1.5;
    margin: 0.5rem 0 -2rem -2rem;
    
    @media screen and (min-width: 640px)
    {
        flex-direction: row;
        height: 40vh;
        margin: -4rem 0 0 -1rem;
    }
}


.slide {
    width: 75vw;
    height: 50vw;
    
    @media screen and (min-width: 640px)
    {
        width: 45vw;
        height: 30vw;
        &:hover{
            opacity: 0.5;
            cursor: pointer;
        }
    }
}



.slider-control-centerleft, .slider-control-centerright {
    position: fixed;
    top: 50%;
    &:hover {
        scale: 150%;
    }
}

    /* @media all and (min-width: 1024px) and (max-width: 1280px) { }
 
@media all and (min-width: 768px) and (max-width: 1024px) { }
  */
/* @media all and (min-width: 480px) and (max-width: 768px) { } */ 
 
/* @media only screen and (min-width: 320px) and (max-width: 479px){ */
    
`

export default GlobalStyles;
