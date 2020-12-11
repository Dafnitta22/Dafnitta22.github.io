const apiURL ="https://api.openweathermap.org/data/2.5/weather?lat=20.501&lon=-86.94598&units=imperial&APPID=c3606e0d4042874cbcafbcaa8a132891";


fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject.coord[0]);
document.getElementById('currenttemp').textContent = jsObject.coord[0].main.temp;
document.getElementById('real').textContent= jsObject.coord[0].description;
document.getElementById('humidity').textContent= jsObject.coord[0].main.humidity;
document.getElementById('currents').textContent= jsObject.coord[0].wind.speed;

});