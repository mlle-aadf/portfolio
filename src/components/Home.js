import { useMediaQuery } from 'react-responsive';
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

import NavBar from "./NavBar";

const Home = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' });

  const mobSequence = `Hello! I'm Alexandra.\nI'm a full-stack developer.\n\nIn other words,\nI create cool stuff with code.\n\nWelcome to my website ٩(◕‿◕)۶ `

  const deskSequence = `Hello! I'm Alexandra. I'm a full-stack developer.\nIn other words, I create cool stuff with code.\n\nWelcome to my website ٩(◕‿◕)۶ `

  const mobStyle = {
    whiteSpace: "pre-line",
    fontWeight: "200",
    textAlign: "left",
    fontSize: "1rem",
    display: "flex",
    margin: "0 auto",
    position: "relative"
  }
  
  const deskStyle = {
    whiteSpace: "pre-line",
    fontWeight: "200",
    textAlign: "left",
    fontSize: "1.5rem",
    position: "relative"
  }

  return (
    <>
      <HomeContainer isLargeScreen={isLargeScreen}>
        <ADF>A | ADF </ADF>
        <TypeAnimation
          className={"type"}
          sequence={[ isLargeScreen ? deskSequence : mobSequence]}
          wrapper="span"
          speed={55}
          style={isLargeScreen ? deskStyle : mobStyle}
          repeat={0}
          cursor={isLargeScreen ? true : false }
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
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 90vw;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${(props) => (props.isLargeScreen ? '1.2rem' : '1rem')};
  text-align: ${(props) => (props.isLargeScreen ? 'left' : 'right')};
  margin: ${(props) => (props.isLargeScreen ? '0 0 0 10%' : '0')};
`;

export default Home;
