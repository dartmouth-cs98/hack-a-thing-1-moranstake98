import React, { Component } from 'react';
import { onSignIn } from '../services/datastore';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  signIn(event) {
    console.log(this.state.email);
    onSignIn(this.state.email, this.state.password);
  }


  render() {
    return (
      <div>
        <p id="email">
          Email:
          <input type="text" onChange={this.handleEmailChange} />
        </p>
        <p id="password">
          Password:
          <input type="text" onChange={this.handlePasswordChange} />
        </p>
        <button onClick={this.signIn}>
          sign in
        </button>
      </div>
    );
  }
}

export default SignIn;
