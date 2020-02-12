import React, { Component } from 'react'
import styled from 'styled-components';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const Wrapper = styled.div`
        padding: 20px; 
        display: flex; 
        justify-content: center;
        flex-direction: column;
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
                <Title>Enter User Details</Title>
                <Wrapper>

                    <LabelTag>First name:</LabelTag>
                    <Answers type="text" onChange={handleChange('firstName')} defaultValue={values.firstName}/> 
                    
                    <LabelTag>Last Name:</LabelTag>
                    <Answers type = "text"  onChange={handleChange('lastName')} defaultValue={values.lastName} /> 
                 
                    <LabelTag>Email:</LabelTag>
                    <Answers type="text" onChange={handleChange('email')} defaultValue={values.email} />

                </Wrapper>
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

export default FormUserDetails
