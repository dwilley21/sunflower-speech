import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Form process goes here
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep(); 
    }
    render() {
        const { values: {firstName, lastName, email, 
            occupation, city, bio }  } = this.props; 
        return (
            <div>
                <React.Fragment>
                    <div>Confirm User data</div>
                    <div>
                        <li>
                            {firstName}
                        </li>
                        <li>
                            {lastName}
                        </li>
                        <li>
                            {email}
                        </li>
                        <li>
                            {occupation}
                        </li>
                        <li>
                            {city}
                        </li>
                        <li>
                            {bio}
                        </li>
                    </div>
                    <button onClick={this.continue}>Confirm & Continue</button>
                    <br></br>
                    <button onClick={this.back}>Back</button>
                </React.Fragment>
            </div>
        )
    }
}

export default Confirm;
