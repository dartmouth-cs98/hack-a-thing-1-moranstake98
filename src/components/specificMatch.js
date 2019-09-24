import React, { Component } from 'react';

const img = require('./heart.png');

class SpecificMatch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  calculateMatchPercetage = () => {
    return Math.floor(Math.random() * 100) + 1;
  }


  render() {
    const randomNum = this.calculateMatchPercetage();

    const numbers = [];

    for (let i = 0; i < 10; i += 1) {
      if (randomNum / 10 > i) {
        numbers.push(i);
      }
    }

    const hearts = numbers.map(number =>
      <img alt="img" src={img} style={{ width: '30px', height: '30px', margin: '10px' }} />);


    return (
      <div style={{
 backgroundColor: 'pink', padding: '2.5%', margin: '2.5%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center',
}}
      >
        <div style={{ width: '50%' }}>
          <p id="Match Name">
          Match Name: {this.props.name}
          </p>
          <p id="percentcompatible">
          Percent Match: {randomNum}
          </p>
        </div>
        <div style={{ width: '100%', alignItems: 'right' }}>
          {hearts}
        </div>
      </div>
    );
  }
}

export default SpecificMatch;
