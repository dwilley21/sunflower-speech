import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div` 
  margin: 20px; 
  padding: 35px;
  border: 2px solid black; 
  width: 20%; 
`

const Name = styled.h2`
  color: black; 
  font-weight: 300; 
  border-bottom: 2px solid dodgerblue;
  @media (max-wdth: 500px){
    font-size: 1rem;
  }
`

const Title = styled.div`
  color: black; 
  font-weight: 300; 
  margin: 20px; 
  @media (max-wdth: 500px){
    font-size: .8rem;
  }
`
const Description = styled.p`
  color: black; 
  font-weight: 300;
  @media (max-wdth: 500px){
    font-size: .75rem;
  }

`
const Shorten = styled.div`
  grid-template-columns: fit-content(40%);
`
const Cards = ({
  name, 
  title, 
  description
}) => (
  <Wrapper>
    <Name>{name}</Name>
    <Title>{title}</Title>
    <Shorten>
    <Description>{description}</Description>
    </Shorten>
  </Wrapper>
)

export default Cards;