import React, { Component } from 'react';
import firebase from 'firebase';

class Suggested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserID: [],
    };
  }

  componentDidMount() {
    const uids = [];
    firebase.database().ref('users').on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        uids.push(childSnapshot.key);
      });
      this.setState({
        allUserID: uids,
      });
    });
    console.log(this.state.allUserID === null);
  }


  render() {
    if (this.state.allUserID === []) {
      return (
        <div> Hi there null</div>
      );
    } else {
      return (
        <div>
          <ul>
            {this.state.allUserID.map(item => (
              <li key={item}>{item}</li>
          ))}
          </ul>
        </div>
      );
    }
  }
}

export default Suggested;
