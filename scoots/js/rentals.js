const requestURL = 'https://dafnita22.github.io/data/scoots.json';

fetch(requestURL)
 .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing.
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement ('p');
        let p2 = document.createElement ('p');
        let image = document.createElement ('img');

        h2.textContent = rentals[i].name;
        p1.textContent = 'MaxPersons: ' + rentals[i].personas;
        p2.textContent = 'Half day: ' + rentals[i].halfday;
        image.setAttribute('src', rentals[i].imageurl);
        image.setAttribute('alt', rentals[i].name);
      

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);
        document.querySelector('div.rentalsinfo').appendChild(card);
        
    }

});