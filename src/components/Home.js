import NavBar from "./NavBar";
import { TypeAnimation } from "react-type-animation"
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeStyle >
          <ADF>ADF | </ADF>
          <TypeAnimation
            // sequence={["code ninja", 1000, "web wizard", 1000, "full-stack developer"]}
            sequence={["<> insert clever tagline here </> "]}
            wrapper="span"
            speed={35}
              style={{ display: 'inline-block' }}
            repeat={0}
          />
      </HomeStyle>
          <NavBar />
    </>
  );
};

const ADF = styled.h1`
    display: inline-block;
    font-weight: 400;
    font-size: 3rem;
`

const HomeStyle = styled.div`
    height:100vh; 
    width:90vw;
    margin-right:0.5rem;
    display:flex; 
    flex-direction:column;
    text-align: right;
    justify-content: center;
    
    @media screen and (min-width: 640px) {
      margin: 0 0 0 10%;
      text-align: left;
    }
    `
    

export default Home