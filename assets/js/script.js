// global variables
const thunderStormDescription = ["Thunderstorm", "thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"];
const drizzleDescription = ["Drizzle", "light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle"];
const rainDescription = ["Rain", "light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"];
const outcomeDescription = thunderStormDescription.concat(drizzleDescription, rainDescription);
const submitBtn = document.getElementById("zipCodeBtn");

// functions

// handleResults
function handleResults(event) {
  event.preventDefault();
  // grab search text from input
  const zipInput = document.getElementById("searchZip").value;
  // if input box is blank, call displayError function
  if (zipInput === "") {
    displayError();
  } else {
    // create fecth url
    const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&appid=0d38177c0e5e9ab3a9ccc614eb4acbe3`;
    // fetch
    fetch(fetchUrl)
      .then(function (response) {
        console.log();
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // if received a 404 error message for city not found
        if (data.cod === "404") {
          // call displayError function
          displayError();
        } else {
          // if no error message, call displayResults function and send weather description
          console.log(data.weather[0]);
          displayResults(data.weather[0]);
        }
      });
  }
}

// displayResults
function displayResults(results) {
  // clear existing string
  document.getElementById("results").innerHTML = "";
  // loop through array to find outcome term
  const isRaining = outcomeDescription.includes(results.description);
  //  if isRaining is true
  if (isRaining === true) {
    // create div and display current weather and that the user needs an umbrella
    document.getElementById("results").innerHTML = `<div class="js-text"> The current weather is : ${results.description}! <br> You need an umbrella!</div>`;
  } else {
    // if isRaining is false, create div and display current weather and that the user does not need an umbrella
    document.getElementById("results").innerHTML = `<div class="js-text"> The current weather is : ${results.description}! <br> You do not need an umbrella!</div>`;
  }
  // call getGif function and send it the weather description
  getGif(results.description);
}

// displayError
function displayError() {
  // clear existing string
  document.getElementById("results").innerHTML = "";
  // clear existing background image
  document.getElementById("gifBkg").style.backgroundImage = "";
  // call getGif function and send it "error"
  getGif("error");
  // display error response
  document.getElementById("results").innerHTML = `<div class="js-text"> Please enter a valid zip code.`;
}

// Giphy API
function getGif(searchTerm) {
  // create fetch url
  const fetchUrl = `https://api.giphy.com/v1/gifs/search?api_key=mEZ23vb42atGwQvVFV5MzgHdLaT0TrKX&q=${searchTerm}`;
  // fetch
  fetch(fetchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // variable of a random object from array of objects
      var randomObj = data.data[Math.floor(Math.random() * data.data.length)];
      console.log(randomObj);
      // display gif as the background
      document.getElementById("gifBkg").style.backgroundImage = `url("${randomObj.images.downsized.url}")`;
    });
}

// event listeners

// zip code search button
submitBtn.addEventListener("click", handleResults);
