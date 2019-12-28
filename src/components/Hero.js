import React from 'react';
import styled, {keyframes} from "styled-components"

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
  background: url("https://via.placeholder.com/150");
  background-repeat: repeat;
  background-position: 0 0;
  animation: ${slidediagnonal} 500s linear infinite;
`

const Hero = props => {
  return (
    <AnimatedBackground id="animatedBackground"></AnimatedBackground>
  )
}

export default Hero