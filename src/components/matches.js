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


  signIn(event) {
    console.log(this.state.email);
  //  onSignIn(this.state.email, this.state.password);
  }


  render() {
    const listItems = this.state.matches.map(name =>
      <SpecificMatch name={name} />);
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default Matches;
