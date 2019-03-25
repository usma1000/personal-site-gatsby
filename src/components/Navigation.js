import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`

const Navigation = props => {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/designs/">Designs</Link>
      </li>
      <li>
        <Link to="/artwork/">Artwork</Link>
      </li>
      <li>
        <Link to="/writing/">Writing</Link>
      </li>
    </List>
  )
}

export default Navigation
