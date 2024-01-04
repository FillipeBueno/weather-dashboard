


const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener('click', presentContent);

const myKey = config.MY_KEY;

let queryUrl;

let url1 = "http://api.openweathermap.org/geo/1.0/direct?q="

let url2= "&limit=1&appid="

function presentContent() {

    queryUrl = url1 + searchInput.value + url2 + myKey;

    fetch(queryUrl)
    .then(function (response) {
        return response.json();

    }).then(function (data) {
        //console.log(data);
        //console.log(data[0].lat)
        //console.log(data[0].lon)


    
});}