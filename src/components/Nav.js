import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
function Nav() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/Utbildning">Utbildning</NavLink>
      <NavLink to="Arbetslivserfarenhet">Arbetslivserfarenhet</NavLink>
    </div>
  )
}
const NavLink = styled(Link)`
text-decoration: none;
text-align: center;
color: red;
font-size: 1em;
margin: 1em;
padding:  1em;
border: 2px solid blue;
border-radius: 10px;

&: hover {
  background-color: green;
  color: white;
  border: 2px solid white;
}
`

export default Nav