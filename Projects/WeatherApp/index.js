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
    const {name:city, 
        main: {temp,humidity},
        weather: [{description, id}]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = `${city}`;
    tempDisplay.textContent = `${(temp - 273).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = `${description}`;
    // weatherEmoji.textContent = `${weatherEmoji(id)}`;

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    // weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    // card.appendChild(weatherEmoji);


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