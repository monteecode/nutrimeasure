import React, {Component} from 'react'

class Registration extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        username: '',
        gender: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(

            <form onSubmit={this.handleSubmit}>
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
                <label>
                    Username:
                    <input type="text" name="login" value={this.state.username} onChange={this.handleChange} />
                </label>
                <fieldset>
                    <legend>Gender</legend>
                    <label for="female">Female
                        <input id="female" type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />
                    </label>
                    <label for="male">Male
                        <input id="male" type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />
                    </label>
                </fieldset>
                <button>Submit</button>
            </form>
            
        )
    }

}

export default Registration