const request = require('request');
const express = require('express');

const app = express();

let apiKey = '********************************';
let city = 'Delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    // defaults temperature is in Kelvin
    // If you use Celsius you’d add: units=metric and in case of Fahrenheit you’d use units=imperial
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees temperature with maximum temperature ${weather.main.temp_max} and minimum temperature ${weather.main.temp_min} having pressure ${weather.main.pressure} and humidity ${weather.main.humidity} in ${weather.name}!`;
    console.log(message);
  }
});

