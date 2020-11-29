/*------Town Events-------*/

const fhrequesturl = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(fhrequesturl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  const fishhavenp0 = jsObject.towns[6].events[0];      
  document.getElementById('fheventsp0').textContent = fishhavenp0;

  const fishhavenp1 = jsObject.towns[6].events[1]    
  document.getElementById('fheventsp1').textContent = fishhavenp1;
  
  const fishhavenp2 = jsObject.towns[6].events[2];
  document.getElementById('fheventsp2').textContent = fishhavenp2;
  
     
});
  

 /*const sodasprings = jsObject.towns[6].events;
  document.getElementById('ssevents').textContent = sodasprings;  // informational specification only */



