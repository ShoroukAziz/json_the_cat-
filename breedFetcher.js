const request = require('request');



const fetchBreedDescription = (breedName, callback) => {

  const baseURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const URL = `${baseURL}${breedName}`;

  request(URL, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const bodyObj = JSON.parse(body);
    if (bodyObj.length === 0) {
      callback(null, 'The requested breed is not found! try again');
      return;
    }
    callback(null, bodyObj[0].description);

  });


};

module.exports = { fetchBreedDescription };
