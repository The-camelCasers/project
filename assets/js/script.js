// global variables
const thunderStormDescription = ["Thunderstorm", "thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"];
const drizzleDescription = ["Drizzle", "light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle"];
const rainDescription = ["Rain", "light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"];

const outcomeDescription = thunderStormDescription.concat(drizzleDescription, rainDescription);

// create form where user inputs zipcode
// Button for zipcode input

const submitBtn = document.getElementById("zipCodeBtn");

function handleResults(event) {
  event.preventDefault();
  // grab search text from input
  const zipInput = document.getElementById("searchZip").value;

  // create fecth url
  const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&appid=0d38177c0e5e9ab3a9ccc614eb4acbe3`;

  fetch(fetchUrl)
    .then(function (response) {
      console.log();
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //if received a 404 error message for city not found
      if (data.cod === "404") {
        //call displayError function
        displayError();
      } else {
        //if no error message, call displayResults function
        console.log(data.weather[0]);
        displayResults(data.weather[0]);
      }
    });
}

function displayResults(results) {
  // clear existing string
  document.getElementById("results").innerHTML = "";
  // loop through array to find outcome term
  const isRaining = outcomeDescription.includes(results.description);
  /*for (let index = 0; index < outcomeDescription.length; index++) {
    const arrayTerm = outcomeDescription[index];
    */
  if (isRaining === true) {
    document.getElementById("results").innerHTML = `<div class="js-text"> The current weather is : ${results.description}! <br> You need an umbrella!</div>`;
  } else {
    document.getElementById("results").innerHTML = `<div class="js-text"> The current weather is : ${results.description}! <br> You do not need an umbrella!</div>`;
  }
  getGif(results.description);
}

function displayError() {
  // clear existing string
  document.getElementById("results").innerHTML = "";
  //clear existing background image
  document.getElementById("gifBkg").style.backgroundImage = "";
  //call getGif function
  getGif("error");
  //display error response
  document.getElementById("results").innerHTML = `<div class="js-text"> Please enter a valid zip code.`;
}

// Giphy API
function getGif(searchTerm) {
  const fetchUrl = `http://api.giphy.com/v1/gifs/search?api_key=mEZ23vb42atGwQvVFV5MzgHdLaT0TrKX&q=${searchTerm}`;
  fetch(fetchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var randomObj = data.data[Math.floor(Math.random() * data.data.length)];
      console.log(randomObj);
      //document.getElementById("weatherGif").innerHTML = `<img src="${randomObj.images.downsized.url}">`;
      document.getElementById("gifBkg").style.backgroundImage = `url("${randomObj.images.downsized.url}")`;
    });
}

/* function displayResults(results) {
    document.querySelector("#results").innerHTML = "";
    results.forEach((result) => {
        
        // populate and style card
        
        const subjects = Array.isArray(result.subject) ? result.subject.toString() : "no subjects";
        const descriptions = Array.isArray(result.description) ? result.description.toString() : "no description";
        cardDiv.innerHTML =`<h2>${result.title}</h2> <div class="mb-3">Date: ${result.date}</div> <div>Subject: ${subjects}</div> <div>Subject: ${descriptions}</div>`;
        cardDiv.classList.add("card", "p-3", "mb-3");

        resultLink.innerHTML = "Read More";
        resultLink.classList.add("btn", "btn-dark");
        resultLink.setAttribute("href", result.url);

        // append link to card
        cardDiv.appendChild(resultLink);

        // append card to results
        document.querySelector("#results").appendChild(cardDiv);
    });
}

*/

// create submit button to send zipcode
// create function to obtain weather
// based on weather send message with gif to determine whether or not umbrella is needed

// event listeners
submitBtn.addEventListener("click", handleResults);

/* global variable

// create search history
    displaySearchList(searchText , searchFormat);

// functions
// display data

function displaySearchList(text, format) {
    const searchLink = document.createElement("a");
    searchLink.innerHTML = text;
    searchLink.setAttribute("href", `file:///C:/Users/josem/code/NU-CHI-VIRT-FSF-PT-11-2021-U-C/06-Server-Side-APIs/01-Activities/27-Stu_Mini-Project/index.html?text=${text}`)
    document.querySelector("#pastSearches").appendChild(searchLink);
    // create 
}

// obtain data


function handleQueryFetch() {
    const fetchUrl = `https://www.loc.gov/search/?fo=json&q=${myParam}`
    
    fetch(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
        displayResults(data.results);
    });
}
*/
/* check query string for text
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("text");
if (myParam.length > 0) {
    handleQueryFetch();
}
console.log(myParam); 
*/
