/* Global Variables */

const { query } = require("express");

const apiKey = '6c7badbc49988c7087b5c5362f24b804&units=metric';
// Create a new date instance dynamically with JS

const generateInfo = document.querySelector('#zip');

generateInfo.addEventListener('clock' , async () =>
{

    const zipCode = document.querySelector('zip').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

    const res = await fetch(url);

    

})


let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();