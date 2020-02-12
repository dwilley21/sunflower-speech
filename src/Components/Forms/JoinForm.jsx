import React, { Component } from 'react';

import FormUserDetails from '../UserInformation/FormUserDetails';
import FormPersonalData from '../UserInformation/FormPersonalData';
import Confirm from '../UI/Confirm';
import Success from '../UI/Success';

export class JoinForm extends Component {
    state = {
        step: 1, 
        firstName: '', 
        lastName: '', 
        email: '',
        occupation: '',
        city: '', 
        bio: '',
    }
// Proceed to next step

nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step+1
    }); 
}

//Going back a step

prevstep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    }); 
}

//Handle fields change 

handleChange = input => e => {
    this.setState({[input]: e.target.value });
}

    render() {
        const { step } = this.state; 
        const {firstName, lastName, email, occupation, city, bio } = this.state; 
        const values = {firstName, lastName, email, occupation, city, bio }
        
        // eslint-disable-next-line default-case
        switch(step) {
            case 1: 
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                 return (
                      <FormPersonalData 
                           nextStep={this.nextStep}
                           prevstep={this.prevstep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    );
             case 3:
                    return (
                        <Confirm
                             nextStep={this.nextStep}
                             prevstep={this.prevstep}
                              values={values}
                          />
                      );
            case 4:
                return <Success />;
        }
    

        return (
            
            <div>
                
            </div>
        )
    }
}

export default JoinForm;
