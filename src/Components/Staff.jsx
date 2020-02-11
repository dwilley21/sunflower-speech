import React, { Component } from 'react'
import styled from 'styled-components';
import Cards from '../Components/UI/Cards'

const FlexIt = styled.div`
 display: flex; 
 flex-direction: row;
 justify-content: center; 
`
const Header = styled.h1`
text-align: center;
`

export default class Staff extends Component {
    render() {
        return (
            <>
            <Header>Senior Staff</Header>
            <FlexIt>
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
             </FlexIt>
             <Header>Junior Staff</Header >
            <FlexIt>
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
                <Cards
                name ="Nicholas Owen"
                title="camp counselor"
                description="Nick likes long walks on the beach"
                />
             </FlexIt>
             </>
        )
    }
}
