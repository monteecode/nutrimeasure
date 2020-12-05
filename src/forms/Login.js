import React, {Component} from 'react'

class Login extends Component {
    state = {
        userName: '',
        password: ''
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
            <label>Username:
                <input type="text" name="userName" value={this.state.userName} handleChange={this.handleChange}/>
            </label>
            <label>Password:
                <input type="password" name="password" value={this.state.password} handleChange={this.handleChange} />
            </label>
            <button>Login</button>
        </form>
        )
    }

}

export default Login

