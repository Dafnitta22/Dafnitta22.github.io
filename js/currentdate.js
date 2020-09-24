
  //*************** */
  
  // tolocaleDateString//
  try {
    let options = {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric" 
      };
      document.getElementById("currentdate2").textContent= new Date().toLocaleDateString("en-US", options);
      } catch (e) {
      alert("Error with code or your browser does not support Locale");
    
  }
  var x = document.lastModified;
  document.getElementById("currentdate2").innerHTML = x;
