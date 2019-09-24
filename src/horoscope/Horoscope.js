import React from 'react';
// this can be dumb or smart component - connect works with either
class Horoscope extends React.Component {
  // ...

  constructor() {
    super();
    this.state = { resultText: '' };
  }

  calculateMatchPercetage = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  render() {
    return (
      <div>
    tis is text {this.state.resultText } { this.calculateMatchPercetage() }
      </div>
    );
  }
}

// axios.get('https://love-calculator.p.rapidapi.com/getPercentage?fname=Morgan&sname=Alice', {}, 'headers': {
//   "x-rapidapi-host": "love-calculator.p.rapidapi.com",
//   "x-rapidapi-key": "5078037ea4msh6b2ae4f24d37831p1b2440jsncdb3ebd043f8"
// }).then((response) => {
//   console.log('here');
//   console.log('I am here');
// }).catch((error) => {
//   // hit an error do something else!
//   console.log('I am an error');
//   console.log(error);
// });

// matchMakingData((error, result) => {
//   if (error) {
//     console.log('Error returned!!');
//   } else {
//     console.log('Response has arrived from API server --');
//     this.setState({ resultText: result });
//   }
// });

//  const url = new URL('https://api.prokerala.com/v1/astrology/horoscope-matching');

// const params = {
//   system: 'kerala',
//   ayanamsa: '1',
//   bride_dob: '2004-02-12T15:19:21+00:00',
//   bride_coordinates: '10.214747,78.097626',
//   bridegroom_dob: '2004-02-12T15:19:21+00:00',
//   bridegroom_coordinates: '10.214747,78.097626',
// };
// Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//
// const headers = {
//   Authorization: 'Bearer {73729f466637277517b9f888c2dfff90d467c288dda2fa530047dac99b34b73b}',
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Credentials': true,
// };
//
// fetch(url, {
//   mode: 'no-cors',
//   method: 'GET',
//   headers,
// })
//   .then(response => response.json())
//   .then(json => console.log(json));
//
//     fetch('https://love-calculator.p.rapidapi.com/getPercentage?fname=Morgan&sname=Alice', {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
//         'x-rapidapi-key': '5078037ea4msh6b2ae4f24d37831p1b2440jsncdb3ebd043f8',
//       },
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//
//
//     return (
//       <div>
//         {this.state.resultText}
//       </div>
//     );
//   }
// }

// connects particular parts of redux state to this components props


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default Horoscope;
