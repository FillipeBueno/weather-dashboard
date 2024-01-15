


const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener('click', presentContent);

const myKey = config.MY_KEY;

//FIRST API INFO:

let queryUrl;

const url1 = "http://api.openweathermap.org/geo/1.0/direct?q="

const url2 = "&limit=1&appid="

let lat;

let lon;

//SECOND API INFO:

let queryUrl2;



function presentContent() {


    queryUrl = url1 + searchInput.value + url2 + myKey;

    fetch(queryUrl)
        .then(function (response) {
            return response.json();

        }).then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon
            
        })
        .then(function () {
            //console.log(lat);
            //console.log(lon);

            queryUrl2 = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+ myKey;
            fetch(queryUrl2)
                .then(function (response) {
                    return response.json();
                }).then(function (data2) {
                    console.log(data2)
                    let icon = data2.list[0].;
                    console.log(icon)
                })
        }
        )



        ;
}
