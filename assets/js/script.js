// global variables
const rainyTerm = ["light intensity drizzle"]

// create form where user inputs zipcode
// Button for zipcode input

const submitBtn = document.getElementById("zipCodeBtn");

// functions
function handleResults(event) {
    event.preventDefault();
    console.log("push button pushed");
    // grab search text from input
    const zipInput = document.getElementById("searchZip").value;
    
    // create fecth url
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&appid=0d38177c0e5e9ab3a9ccc614eb4acbe3` ;

    console.log("maybe you need an umbrella");
    
    fetch(fetchUrl)
    .then(function (response) {
        console.log()
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.weather[0]);
        displayResults(data.weather[0]);
    }); 
}

function displayResults(results) {
    document.getElementById("results").innerHTML = "";
    document.getElementById("results").innerHTML = `<div>current weather:${results.description}</div>`;

}

function suggestResponse() {
    document.getElementById(ifResponse).innerHTML = "";
    console.log("updated text should appear");
    document.getElementById("ifResponse").innerHTML = "";
}



// event listeners
submitBtn.addEventListener("click", handleResults);




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


