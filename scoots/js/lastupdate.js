const d = new Date();
const year = d.getFullYear();
document.getElementById ('currentyear').innerHTML = year;



const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString('en-US', options);

