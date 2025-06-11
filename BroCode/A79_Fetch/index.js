// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

async function fetchData(){

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();
        const pokemonImage = document.querySelectorAll(".pokemonImage");


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
        throw new Error;
        }

        const data = await response.json();
        console.log(data)
        
        const pokemonBackShinySprite = data.sprites.back_shiny;
        const pokemonFrontShinySprite = data.sprites.front_shiny;

        
        pokemonImage[0].src = pokemonFrontShinySprite;
        pokemonImage[1].src = pokemonBackShinySprite;

        pokemonImage[0].alt = `${pokemonName} Front Image`;
        pokemonImage[1].alt = `${pokemonName} Back Image`;
    
        pokemonImage[0].title = `${pokemonName} Front Image`;
        pokemonImage[1].title = `${pokemonName} Back Image`;



        pokemonImage.forEach(image => {
            image.style.display = "block";
        })
        
        
    }catch(error){
        console.log(error);
    }

    
}

// console.log(pokemonImage[1])