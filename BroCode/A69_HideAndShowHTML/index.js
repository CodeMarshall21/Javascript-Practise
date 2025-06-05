const button = document.getElementById("my-button");
const image = document.getElementById("my-img");

button.addEventListener("click", event =>{

    if(image.style.visibility === "hidden"){
        image.style.visibility = "visible";
        button.textContent = "hide";
    }
    else{
        image.style.visibility = "hidden";
        button.textContent = "Show";
    }

    /*  OR THIS CAN BE DONE
    
      // ----- DISPLAY -----
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
    */
    
})