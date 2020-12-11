const apiURL ="https://api.openweathermap.org/data/2.5/weather?lat=20.511773&lon=-86.948943&units=imperial&APPID=c3606e0d4042874cbcafbcaa8a132891";


fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject.list[0]);
document.getElementById('currenttemp').textContent = jsObject.list[0].main.temp;
document.getElementById('real').textContent= jsObject.list[0].weather[0].description;
document.getElementById('humidity').textContent= jsObject.list[0].main.humidity;
document.getElementById('currents').textContent= jsObject.list[0].wind.speed;

});