import React, { Component } from 'react'
import styled from 'styled-components';


const Header = styled.h1`
text-align: center;
font-size: 1.5em
`

const Subtitle = styled.h2`
text-align: center; 
font-size: 1.2em
`
export default class Homepage extends Component {
    render() {
        return (
            <div>
              <Header>
                Sunflower speech camp
              </Header>
              <Subtitle>
                Come grow with us
              </Subtitle>
            </div>
        )
    }
}
