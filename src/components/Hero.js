import React from 'react';
import styled, {keyframes} from "styled-components"
import star from "../images/star.svg"

const HeroContainer = styled.div`
  position: relative;
  background-image: radial-gradient(50% 100%, #F6625E 50%, #C7312D 100%);
  border: 20px solid #F5D099;
  box-sizing: border-box;
  height: 100vh;
`

const slidediagnonal = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px -10000px;
  }
`

const  AnimatedBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("${star}");
  background-repeat: repeat;
  background-position: 0 0;
  animation: ${slidediagnonal} 500s linear infinite;
`

const Hero = props => {
  return (
    <HeroContainer>
      <AnimatedBackground id="animatedBackground"></AnimatedBackground>
    </HeroContainer>
  )
}

export default Hero