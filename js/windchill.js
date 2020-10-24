
function windchill() {
    let t = parseFloat(document.getElementById('currenttemp').innerHTML);
    let s = parseFloat(document.getElementById('currentmph').innerHTML); 
    let output =  totalwc(t,s);

    if( t <= 50 && s > 3) {
        document.getElementById("wc").innerHTML = output + (Math.round(f)) + "&#8457;";  
    }
    else {
        document.getElementById("wc").innerHTML = N/A;  
    }
}
function totalwc(t,s) {

    let f=(35.74 + (0.6215*t)) - (35.75*(Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s, 0.16))));
    return f;
}