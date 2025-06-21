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
    console.log(data);
    const {name:city, 
        main: {temp,humidity},
        weather: [{description, icon}]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("img");

    cityDisplay.textContent = `${city}`;
    tempDisplay.textContent = `${(temp - 273).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = `${description}`;
    weatherEmoji.src = getWeatherEmoji(icon);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);


}

function getWeatherEmoji(weatherIconId){
    //  switch(true){
    //     case (weatherId >= 200 && weatherId < 300):
    //         return "⛈️";
    //     case (weatherId >= 300 && weatherId < 400):
    //         return "🌧️";
    //     case (weatherId >= 500 && weatherId < 600):
    //         return "🌧️";
    //     case (weatherId >= 600 && weatherId < 700):
    //         return "🌨️";
    //     case (weatherId >= 700 && weatherId < 800):
    //         return "🌫️";
    //     case (weatherId === 800):
    //         return "'☀️";
    //     case (weatherId >= 801 && weatherId < 810):
    //         return "☁️";
    //     default:
    //         return "❓";
    // }
    console.log(weatherIconId);
    const iconApiURL = `https://openweathermap.org/img/wn/${weatherIconId}@2x.png`;
    return iconApiURL;
    
}

function displayError(message){
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add("errorDisplay");


    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorMessage);
}