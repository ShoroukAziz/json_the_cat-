const request = require('request');

const baseURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchQuery = process.argv[2];
const URL = `${baseURL}${searchQuery}`;

request(URL, (error, response, body) => {

  if (error) {
    console.log('Something went wrong');
    console.log(error);
    return;
  }

  const bodyObj = JSON.parse(body);
  if (bodyObj.length === 0) {
    console.log('The requested breed is not found! try again');
    return;
  }
  const describtion = bodyObj[0].description;
  console.log(describtion);

});