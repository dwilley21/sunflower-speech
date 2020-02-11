import React from 'react';
import styled from 'styled-components';
import Homepage from '../Homepage';
import Join from '../Join';
import Staff from '../Staff';
import About from '../About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const FlexIt = styled.div `
 display: flex; 
 flex-direction: row;
 justify-content: center;
`
const Tags = styled.div `
  padding: 40px; 
  text-decoration: none;
  font-size: 1.5em;
  &:hover{
   font-size: 1.75em;
  }
`

function HomeNav() {
  return (
    <>
    <Router>
        <nav>
          <FlexIt>
            {/* <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/">Home</Link>
            </Tags> */}
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/About">About</Link>
            </Tags>
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/Join">Join</Link>
            </Tags>
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/Staff">Staff</Link>
            </Tags>          
          </FlexIt>
          {/* <Route exact path='/' component={Homepage}/> */}
              <Route exact path='/Join' component={Join}/>
              <Route exact path='/Staff' component={Staff}/>
              <Route exact path='/About' component={About}/>
        </nav>
        </Router>
    </>
  );
}
export default HomeNav;