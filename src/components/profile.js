import React, { Component } from 'react';
import firebase from 'firebase';
import { onUpdateProfile } from '../services/datastore';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      partner: '',
      horoscope: '',
      interest: '',
      hatred: '',
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('have user');
        this.setState({ username: user.displayName });
      } else {
        console.log('do not have user');
      }
    });
  }

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  }

  handlePartnerChange = (event) => {
    this.setState({
      partner: event.target.value,
    });
  }

  handleHoroscopeChange = (event) => {
    this.setState({
      horoscope: event.target.value,
    });
  }

  handleInterestChange = (event) => {
    this.setState({
      interest: event.target.value,
    });
  }

  handleHatredChange = (event) => {
    this.setState({
      hatred: event.target.value,
    });
  }

  updateProfile = (event) => {
    onUpdateProfile(this.state.gender, this.state.partner, this.state.horoscope, this.state.interest, this.state.hatred);
  }


  render() {
    if (this.state.username === '') {
      return (
        <div> Please Log In to View Profile </div>
      );
    }
    return (
      <div>
        <p>
          Gender:
          <input type="text" onChange={this.handleGenderChange} />
        </p>
        <p>
          Partner Gender Preference:
          <input type="text" onChange={this.handlePartnerChange} />
        </p>
        <p>
          Horoscope:
          <input type="text" onChange={this.handleHoroscopeChange} />
        </p>
        <p>
          Main Interest:
          <input type="text" onChange={this.handleInterestChange} />
        </p>
        <p>
          Deepest Hate:
          <input type="text" onChange={this.handleHatredChange} />
        </p>
        <button onClick={this.updateProfile}>
          Update Profile
        </button>
      </div>
    );
  }
}

export default SignIn;
