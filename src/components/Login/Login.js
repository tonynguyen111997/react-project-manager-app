import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      email: '',
      password: ''
    }
  }

  onUsernameChange = event => this.setState({ username: event.target.value });
  onEmailChange = event => this.setState({ email: event.target.value });
  onPasswordChange = event => this.setState({ password: event.target.value });

  render(){
    return(
      <main>
        <fieldset className="register__form-container">
          <legend>Register</legend>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.onUsernameChange}
              />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.onEmailChange}
              />
          </div>
          <div>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              onChange={this.onPasswordChange}
              />
          </div>
        </fieldset>
      </main>
    );
  }
}

export default Login;