const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(word, cities) {
    if (word === '' || word === ' ') {
        return;
    }

    return cities.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    while (suggestions.lastChild) {
        suggestions.removeChild(suggestions.lastChild);
    }

    const matchesArr = findMatches(this.value, cities);
    
    matchesArr.forEach(place => {
        const elem = document.createElement('li');

        elem.textContent = `${place.city}, ${place.state}, ${place.population}`;
        suggestions.appendChild(elem);
    });
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);
