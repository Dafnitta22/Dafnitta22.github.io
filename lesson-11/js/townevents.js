/*------Town Events-------*/
const inrequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(inrequestURL)
   .then((response) => response.json())
   .then((jsObject) => {
    console.log(jsObject);
  
  document.getElementById('sseventsp0').textContent = jsObject.towns[6].events[0];
  document.getElementById('sseventsp1').textContent = jsObject.towns[6].events[1];
  document.getElementById('sseventsp2').textContent = jsObject.towns[6].events[2];
 
});
  
  /*const sodasprings = jsObject.towns[6].events;
  document.getElementById('ssevents').textContent = sodasprings;  // informational specification only */



