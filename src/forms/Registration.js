import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Registraton extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(

            <form>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                </label>
            </form>
            
        )
    }

}

export default Registration