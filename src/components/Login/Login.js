import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  onEmailChange = event => this.setState({ email: event.target.value });
  onPasswordChange = event => this.setState({ password: event.target.value });

  render(){
    return(
      <main>
        <div className="login__form-container">
          <fieldset>
            <legend className="login__form-title">Sign In</legend>
            <div className="login__form-input">
              <label htmlFor="email">Email</label>
              <input
                className="login__input-text"
                type="email"
                name="email"
                id="email"
                onChange={this.onEmailChange}
                />
            </div>
            <div className="login__form-input">
              <label htmlFor="userPassword">Password</label>
              <input
                className="login__input-text"
                type="password"
                name="userPassword"
                id="userPassword"
                onChange={this.onPasswordChange}
                />
            </div>
            <div>
              <input
                className="login__input-submit"
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="login__register-btn">
              <p>Register</p>
            </div>
          </fieldset>
        </div>
      </main>
    );
  }
}

export default Login;