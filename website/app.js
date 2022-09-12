'use strict'

const { json } = require("body-parser");

/* Global Variables */



let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//const { query } = require("express");

const apiKey = '6c7badbc49988c7087b5c5362f24b804&units=metric';
// Create a new date instance dynamically with JS

const generateInfo = document.querySelector('#generate');

generateInfo.addEventListener('click' , async () =>
{
    const feeling = document.querySelector('#feelings').value;

    const zipCode = document.querySelector('#zip').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

    const res = await fetch(url); 

    const weatherInfo = await res.json();
    const todayTemp = weatherInfo.main.temp; 

    await fetch('/weatherdata' ,
    {
        method :"Post",

        headers:{ "Content-type" : "application/json" },

        body: JSON.stringify({
            date : newDate,
            temp : todayTemp,
            content : feeling
        })
    })

    const response = await fetch('/getRoute');

    const data = response.json();
})
