import firebase from 'firebase';
import React, { Component } from 'react';
import onSignUp from '../services/datastore';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.signUp = this.signUp.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(event) {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log('unable to sign in');
      console.log(error);
    });
    console.log('finsihed trying to sign in');
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
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

  signUp(event) {
    console.log(this.state.email);
    onSignUp(String(this.state.email), this.state.username, this.state.password);
  }


  render() {
    return (
      <div>
        <p id="username">
          Username:
          <input type="text" onChange={this.handleUsernameChange} />
        </p>
        <p id="email">
          Email:
          <input type="text" onChange={this.handleEmailChange} />
        </p>
        <p id="password">
          Password:
          <input type="text" onChange={this.handlePasswordChange} />
        </p>
        <button onClick={this.signUp}>
          sign up
        </button>
      </div>
    );
  }
}

export default SignUp;
