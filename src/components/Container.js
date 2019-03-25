import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation"

const Container = styled.div`
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default ({ children }) => (
  <Container>
    <Navigation />
    {children}
  </Container>
)

// const Gallery = styled.div`
//   background: red;
// `

// export default ({ children }) => (
//   <Gallery>
//     {children}
//   </Gallery>
// )
