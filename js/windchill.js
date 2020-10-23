
function windchill() {
    let t= parseFloat(document.getElementById('curenttemp').textContent);
    let s=13;
    let output= "Wind Chill: " +(Math.round(f)) + "&#8457;"
    if( t <= 50 && s >= 3) {
    f=(35.74 + (0.6215*t) - (35.75*Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16)));
    document. getElementById("output").innerHTML = output;  
}
}