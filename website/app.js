'use strict'


/* Global Variables */

let d = new Date();
let newDate = d.getMonth() +1 +'.'+ d.getDate()+'.'+ d.getFullYear();


const apiKey = '6c7badbc49988c7087b5c5362f24b804&units=metric';
// Create a new date instance dynamically with JS


const showData = async () =>
{
    const userDataa = await fetch('/getRoute');

    try{

        const allDataNeeded = await userDataa.json();
        

        const temp = document.querySelector('.title').textContent = "";

        const tempretaure =document.querySelector('#temp').innerHTML = `Temprature is ${allDataNeeded.temp}  degrees`;
        const feelings =document.querySelector('#content').innerHTML = `Feelings is ${allDataNeeded.feeling}`;
        const daydate= document.querySelector('#date').innerHTML =`Date is ${allDataNeeded.date}`;
        
    }catch(error){
        console.log(`ERRRORR : ${error}`);
    }
}




const generateInfo = document.querySelector('#generate');

generateInfo.addEventListener('click' , async () =>
{
    try{
        const feeling = document.querySelector('#feelings').value;

        const zipCode = document.querySelector('#zip').value;
        
        if(!zipCode){alert("Enter a zipCode please");}
        
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

        const res = await fetch(url); 

        const weatherInfo = await res.json();
        const temp = weatherInfo.main.temp; 
        
        console.log(zipCode , feeling , temp);
        await fetch('/weatherdata' ,
        {
            method :"Post",

            headers:{ "Content-type" : "application/json" },

            body: JSON.stringify({
                date : newDate,
                temp,
                feeling
            })
        })

        const response = await fetch('/getRoute');

        const data = response.json();

        showData();

    }catch(err){
            console.log(err)}
})
