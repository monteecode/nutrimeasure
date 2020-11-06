import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Registraton extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    render(){
        return(

            <form>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} />
                </label>
            </form>
            
        )
    }

}

export default Registration