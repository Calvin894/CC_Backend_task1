const prompt = require('prompt-sync')();
const axios= require('axios');

/*var base= prompt("Enter final currency code");
var final= prompt("Enter final currency code");
var amount= prompt("Enter base amount");
var date= prompt("Enter date in YYYY-MM-DD format");
*/
const request= {
  method: 'GET',
  url: 'https://api.apilayer.com/exchangerates_data/convert?to=INR&from=KWD&amount=20',
  headers: { 'apikey': 'TCxk4IJ0vDrj7RjFlFDzutrnQMCxQO31'}
};
axios.request(request)
  .then(res => console.log(res.data)) 
  .catch(err => console.log(err))