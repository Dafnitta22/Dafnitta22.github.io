/*------Town Events-------*/

const ssrequesturl = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(ssrequesturl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  

  const sodaspringsp0 = jsObject.towns[6].events[0];      
  document.getElementById('sseventsp0').textContent = sodaspringsp0;

  const sodaspringsp1 = jsObject.towns[6].events[1]    
  document.getElementById('sseventsp1').textContent = sodaspringsp1;
  
  const sodaspringsp2 = jsObject.towns[6].events[2];
  document.getElementById('sseventsp2').textContent = sodaspringsp2;

});



 /*const sodasprings = jsObject.towns[6].events;
  document.getElementById('ssevents').textContent = sodasprings;  // informational specification only */



