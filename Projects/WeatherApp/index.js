const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const APIKEY = "784d991c56a56931e1d688fd81a605c0";

weatherForm.addEventListener("submit", event =>{
    event.preventDefault();
    const city = cityInput.value;
    

    if (city){

    }else{
        displayError("Please Enter the CITY");
    }
});

async function weatherInfo(city){

}

function displayWeatherInfo(data){

}

function weatherEmoji(weatherID){

}

function displayError(message){
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add("errorDisplay");


    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorMessage);
}