
import firebase from 'firebase';
import React, { Component } from 'react';
import SpecificMatch from './specificMatch';


class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: ['Dav', 'Goon'],
    };

    //    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
  //  const uids = [];
    const names = [];
    firebase.database().ref('users').on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot);
        //    uids.push(childSnapshot.key);
        names.push(childSnapshot.val().Username);
      });
      this.setState({
        matches: names,
        //    usernames: names,
      });
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
        <div> Hi there null</div>
      );
    } else {
      return (
        <div>
          {listItems}
        </div>
      );
    }
  }
}

export default Matches;
