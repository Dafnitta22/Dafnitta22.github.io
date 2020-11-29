/*------Fish Haven Town---------*/
const apiURL ="https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&APPID=c3606e0d4042874cbcafbcaa8a132891";


fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject.list[0]);
document.getElementById('currenttemp').textContent = jsObject.list[0].main.temp;
document.getElementById('real').textContent= jsObject.list[0].weather[0].description;
document.getElementById('humidity').textContent= jsObject.list[0].main.humidity;
document.getElementById('currents').textContent= jsObject.list[0].wind.speed;


const forecast = jsObject.list.filter(element => element.dt_txt.includes('18:00:00'));
console.log(forecast);
let day = 0;
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
forecast.forEach (element => {
    const d= new Date (element.dt_txt);
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
    document.querySelectorAll('.fivedays .weathericons img')[day].src = imagesrc; 
    document.querySelectorAll('.fivedays .tempicons span')[day].textContent = element.main.temp;
    day++;
   });

});



