import React, {Component} from 'react'

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }

    return(){
        <form>
            <label>Username:
                <input type="text" name="userName" />
            </label>
            <label>Password:
                <input type="password" name="password" />
            </label>
        </form>
    }

}

export default Login

