import axios from 'axios';


const baseUrl = 'http://api.vedicrishiastro.com/v1/';
const userID = '605145';
const apiKey = '103e82ed56513c3698f5f78a93b7e834';

function getResponse(resource, data) {
  console.log('HERE');
  axios.post(baseUrl, { data }, { headers: { authorization: `Basic ${btoa(`${userID}:${apiKey}`)}` } }).then((response) => {
    console.log('here');
    console.log('I am here');
  }).catch((error) => {
    // hit an error do something else!
    console.log('I am an error');
    console.log(error);
  });
}

// export default function trysomething(resource, data) {
//   console.log('HERE');
//   axios.get('https://love-calculator.p.rapidapi.com/getPercentage?fname=Morgan&sname=Alice', {}, 'headers': {
//     "x-rapidapi-host": "love-calculator.p.rapidapi.com",
//     "x-rapidapi-key": "5078037ea4msh6b2ae4f24d37831p1b2440jsncdb3ebd043f8"
//   }).then((response) => {
//     console.log('here');
//     console.log('I am here');
//   }).catch((error) => {
//     // hit an error do something else!
//     console.log('I am an error');
//     console.log(error);
//   });
// }


// const data = 'JSON Request Data';
// const request = $.ajax({
//   url: `https://json.astrologyapi.com/v1/${api}`,
//   method: 'POST',
//   dataType: 'json',
//   headers: {
//     authorization: `Basic ${btoa(`${userID}:${apiKey}`)}`,
//     'Content-Type': 'application/json',
//   },
//   data: JSON.stringify(data),
// });
// // Returns A promiss
// return (request.then((resp) => {
//   return resp;
// }, (err) => {
//   return err;
// }));


// const getResponse = (resource, data, callback) => {
//   const url = baseUrl + resource;
//   const auth = `Basic ${Buffer.alloc(`${userID}:${apiKey}`).toString('base64')}`;
//   request(
//     {
//       url,
//       headers: {
//         Authorization: auth,
//       },
//       method: 'POST',
//       form: data,
//     },
//     (err, res, body) => {
//       if (!err) {
//         if (typeof callback === 'function') {
//           return callback(null, body);
//         }
//       }
//       if (typeof callback === 'function') {
//         return callback(err);
//       }
//       return ('callback not provided properly');
//     },
//   );
// };

const packageHoroData = (date, month, year, hour, minute, latitude, longitude, timezone) => {
  return {
    day: date,
    month,
    year,
    hour,
    min: minute,
    lat: latitude,
    lon: longitude,
    tzone: timezone,
  };
};

const packageNumeroData = (date, month, year, name) => {
  return {
    day: date,
    month,
    year,
    name,
  };
};

const packageMatchMakingData = (maleBirthData, femaleBirthData) => {
  const mData = {
    m_day: maleBirthData.date,
    m_month: maleBirthData.month,
    m_year: maleBirthData.year,
    m_hour: maleBirthData.hour,
    m_min: maleBirthData.minute,
    m_lat: maleBirthData.latitude,
    m_lon: maleBirthData.longitude,
    m_tzone: maleBirthData.timezone,
  };
  const fData = {
    f_day: femaleBirthData.date,
    f_month: femaleBirthData.month,
    f_year: femaleBirthData.year,
    f_hour: femaleBirthData.hour,
    f_min: femaleBirthData.minute,
    f_lat: femaleBirthData.latitude,
    f_lon: femaleBirthData.longitude,
    f_tzone: femaleBirthData.timezone,
  };

  return Object.assign(mData, fData);
};


const api = {

  call: (resource, date, month, year, hour, minute, latitude, longitude, timezone, callback) => {
    const data = packageHoroData(date, month, year, hour, minute, latitude, longitude, timezone);
    return getResponse(resource, data, callback);
  },

  numeroCall: (resource, date, month, year, name, callback) => {
    const data = packageNumeroData(date, month, year, name);
    return getResponse(resource, data, callback);
  },

  matchMakingCall: (resource, maleBirthData, femaleBirthData, callback) => {
    const data = packageMatchMakingData(maleBirthData, femaleBirthData);
    return getResponse(resource, data, callback);
  },

};


module.exports = api;
