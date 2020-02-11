import React, { Component } from 'react'
import styled from 'styled-components';

export class FormPersonalDetails extends Component {
    //TODO inputs only allow one character typed at a time
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep(); 
    }
    render() {
        const Wrapper = styled.div`
        padding: 20px; 
        display: flex; 
        justify-content: center;
        `

        const LabelTag = styled.label`
        margin-right: 30px; 
        `
        const Answers = styled.input`
        margin-right: 30px; 
        
        `

        const Title = styled.h2`
        font-size: 1.75em;
        `
        const { values, handleChange } = this.props; 
        return (
            <div>
            <Title>Enter Personal Details</Title>
                <Wrapper>
                    <LabelTag> Occupation:</LabelTag>
                    <Answers type="text" onChange={handleChange('occupation')} defaultValue={values.occupation}/> 

                    <LabelTag>City</LabelTag>
                    <Answers type = "text"  onChange={handleChange('city')} defaultValue={values.city} /> 
                    
                    <LabelTag>Bio</LabelTag>
                    <Answers type="text" onChange={handleChange('bio')} defaultValue={values.bio} /> 
                  
                </Wrapper>
                  
                <button onClick={this.continue}>Continue</button>
                    
                    <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default FormPersonalDetails
