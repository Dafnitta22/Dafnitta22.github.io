
  //*************** */
  
  // tolocaleDateString//
  try {
    let options = {
      day: "numeric",
      month: "numeric",
      year: "numeric" 
      };
      document.getElementById("currentdate2"
      ).textContent= new Date().toLocaleDateString("en-US", options);
  } catch (e) {
      alert("Error with code or your browser does not support Locale");
alert(document.lastModified);
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);
  }

