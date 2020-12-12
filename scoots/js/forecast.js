const foreurl ="https://api.openweathermap.org/data/2.5/forecast?lat=20.501&lon=-86.94598&units=imperial&APPID=c3606e0d4042874cbcafbcaa8a132891";


fetch(foreurl)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject.list[0]);

const forecast = jsObject.list.filter(element => element.dt_txt.includes('18:00:00'));
console.log(forecast);
let day = 0;
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
forecast.forEach (element => {
    const d= new Date (element.dt_txt);
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
    document.querySelectorAll('.threedays .weathericons img')[day].src = imagesrc; 
    document.querySelectorAll('.threedays .tempicons span')[day].textContent = element.main.temp;
    day++;
   });

});
