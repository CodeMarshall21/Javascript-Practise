const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const APIKEY = "784d991c56a56931e1d688fd81a605c0";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value;
    

    if (city){
        try{
            const weatherData = await weatherInfo(city);

            displayWeatherInfo(weatherData);

        }catch(error){
            console.error(`${error}`);
            displayError(error);
        }

    }else{
        displayError("Please Enter the CITY");
    }
});

async function weatherInfo(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    const cityWeatherData = await fetch(apiURL);
    if(!cityWeatherData.ok){
        throw new Error("Kadal laye illayam !");
    }else{
        return await cityWeatherData.json();
    }
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