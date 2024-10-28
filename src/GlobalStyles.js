import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

body {
    font-family: "Source Code Pro", monospace;
    font-weight: 200;
    font-size: 1rem;
    max-height: 100vh;
    max-width: 100vw;
    background-color: black;
    color: rgb(221, 221, 221);

    @media screen and (min-width: 640px){
        font-size: 1.5rem;
    }
}
	
.tag  {
    color: white;
    text-decoration: none;
    &:hover {
        scale: 110%;
        color: aqua
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
    font-size: 0.9rem;
    
    /* font-weight: lighter; */
    line-height: 200%;
    /* border: 2px solid fuchsia; */
    
    animation: fadeIn 5s ease-in 0 infinite;
    
    @media screen and (min-width: 640px)
    {
        margin: 5rem 0.5rem;
        font-size: 1.1rem;
        flex-direction: row;
        align-items: center;
    }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.photo {
    height: 35vh;
    margin-top: 1rem;
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
        margin: -3rem 0 0 0;
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


`



export default GlobalStyles;
