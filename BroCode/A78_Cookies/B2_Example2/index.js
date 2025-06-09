// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs

// console.log(navigator.cookieEnabled);


const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const createCookie = document.querySelector("#submit-btn");
const getCookie = document.querySelector("#get-btn");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete-btn");


createCookie.addEventListener("click", () =>{
    if(firstName.value.length === 0 || lastName.value.length === 0){
        window.alert("Invalid Input");
    }else{
        setCookies("firstName",firstName.value,365);
        setCookies("lastName",lastName.value,365);
    }
    console.log(firstName.value.length);
    console.log(lastName.value.length);
})

getCookie.addEventListener("click", () =>{
    firstName.value = getCookies("firstName");
    lastName.value = getCookies("lastName");
})

clearBtn.addEventListener("click",() =>{
    firstName.value = "";
    lastName.value = "";
})

deleteBtn.addEventListener("click",() =>{
     if(firstName.value.length === 0 || lastName.value.length === 0){
        window.alert("Invalid Input");
    }else{
        deleteCookies("firstName");
        deleteCookies("lastName");
    }

})


function setCookies(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`
    if(value !== null && daysToLive !== null){
        console.log("Cookie Created");
    }
}


function getCookies(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}

function deleteCookies(name){
    setCookies(name,null,null);
    console.log("Cookie Deleted");
}

console.dir(document.cookie);

