import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
 display: flex; 
 flex-direction: row;
 justify-content: center; 
`

export class Success extends Component {
    render() {
        return (
            <Wrapper>
                Thank you for submitting your information
            </Wrapper>
        )
    }
}

export default Success
