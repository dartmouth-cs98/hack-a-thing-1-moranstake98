const sdkClient = require('./horoscopedata');

// create a male profile data
const maleData = {
  date: 25,
  month: 12,
  year: 1988,
  hour: 4,
  minute: 0,
  latitude: 25.123,
  longitude: 82.34,
  timezone: 5.5,
};

// create female data
const femaleData = {
  date: 27,
  month: 1,
  year: 1990,
  hour: 12,
  minute: 10,
  latitude: 25.123,
  longitude: 82.34,
  timezone: 5.5,
};

// match making api to be called
const resource = 'match_ashtakoot_points';

// call matchMakingCall method of VRClient for matching apis and print Response
const matchMakingData = (callback) => { sdkClient.matchMakingCall(resource, maleData, femaleData, callback); };

export default matchMakingData;
