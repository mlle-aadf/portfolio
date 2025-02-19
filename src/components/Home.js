import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <HomeContainer >
          <ADF>A | ADF </ADF>
          <TypeAnimation
            className={"type"}
            sequence={["Hello! I'm Alexandra. I'm a full-stack developer.", 300, "In other words, I create cool stuff with code.", 300, "Welcome to my website ٩(◕‿◕)۶ "]}
            // sequence={["Hello! I'm Alexandra.", 400,  "I'm a full-stack developer.", 350, "In other words,", 250, "I create cool stuff with code.", 350, "Welcome to my website ٩(◕‿◕)۶ "]}
            // sequence={["code ninja", 1000, "web wizard", 1000, "full-stack developer"]}
            // sequence={["<> insert clever tagline here </> "]}
            wrapper="span"
            speed={55}
            repeat={0}
          />
      </HomeContainer>
          <NavBar />
    </>
  );
};

const ADF = styled.h1`
    display: inline-block;
    font-weight: 200;
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
  `

const HomeContainer = styled.div`
    height:100vh; 
    width:90vw;
    margin-right:0.5rem;
    display:flex; 
    flex-direction:column;
    justify-content: center;
    font-size: 1rem;
    text-align: right;
    
    @media screen and (min-width: 640px) {
      font-size: 1.2rem;
      text-align: left;
      margin: 0 0 0 10%;
    }
    `
    

export default Home