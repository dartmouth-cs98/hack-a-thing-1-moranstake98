
import firebase from 'firebase';
import React, { Component } from 'react';
import SpecificMatch from './specificMatch';


class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: ['Dav', 'Goon'],
      currUsername: '',
    };

    //    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
  //  const uids = [];

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currUsername: user.displayName });
        const currName = user.displayName;
        const names = [];
        firebase.database().ref('users').on('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot);
            if (childSnapshot.val().Username !== currName) {
              names.push(childSnapshot.val().Username);
            }
          });
          this.setState({
            matches: names,
          });
        });
      } else {
        // No user is signed in.
      }
    });

    console.log(this.state.matches === null);
  }


  signIn(event) {
    console.log(this.state.email);
  //  onSignIn(this.state.email, this.state.password);
  }


  render() {
    console.log(this.state.usernames);

    const listItems = this.state.matches.map(name =>
      <SpecificMatch name={name} />);
    if (this.state.matches === []) {
      return (
        <div>No matches exist</div>
      );
    } else {
      return (
        <div>
          <div>Welcome, {this.state.currUsername}!</div>
          <div>
            {listItems}
          </div>
        </div>
      );
    }
  }
}

export default Matches;
