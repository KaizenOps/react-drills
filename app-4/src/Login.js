import React, { Component } from "react";

class Login extends Component {
    constructor(){
        super();

// USERNAME & PASSWORD
        this.state = {
            username: "",
            password: ""
        };

// LOGIN STATE
        this.handleLogin = this.handleLogin.bind(this);
    }

// USERNAME CHANGE
    handleUsernameChange(name) {
        this.setState({ username: name });
    }
    
// PASSWORD CHANGE
    handlePasswordChange(pass) {
        this.setState({ password: pass });
    }

// LOGIN ALERT
    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.handleUsernameChange(e.target.value)}
                    type="text"
                />
                <input
                    onChange={e => this.handlePasswordChange(e.target.value)}
                    type="text"
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }        
}

export default Login;