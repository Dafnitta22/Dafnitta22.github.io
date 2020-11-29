/*------Town Events-------*/
const prequesturl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(prequesturl)
   .then((response) => response.json())
   .then((jsObject) => {
     console.log(jsObject);

  const prestonp0 = jsObject.towns[5].events[0];      
  document.getElementById('peventsp0').textContent = prestonp0;

  const prestonp1 = jsObject.towns[5].events[1]    
  document.getElementById('peventsp1').textContent = prestonp1;
  
  const prestonp2 = jsObject.towns[5].events[2];
  document.getElementById('peventsp2').textContent = prestonp2;
});



 /*const sodasprings = jsObject.towns[6].events;
  document.getElementById('ssevents').textContent = sodasprings;  // informational specification only */



