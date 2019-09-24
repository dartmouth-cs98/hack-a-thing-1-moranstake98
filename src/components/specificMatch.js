import React, { Component } from 'react';


class SpecificMatch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  calculateMatchPercetage = () => {
    return Math.floor(Math.random() * 100) + 1;
  }


  render() {
    return (
      <div>
        <p id="MatchName">
          Matchehs Name: {this.props.name}
        </p>
        <p id="percentcompatible">
          Percent Match: {this.calculateMatchPercetage()}
        </p>
      </div>
    );
  }
}

export default SpecificMatch;
