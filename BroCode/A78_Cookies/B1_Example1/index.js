// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastname=Squarepants; expires=Sun, 1 January 2020 12:00:00 UTC; path=/";
// let allCookies = document.cookie;
// console.dir(allCookies)

function setCookies(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`
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
}

// deleteCookies("firstName");
//deleteCookies("lastName");
// console.log(getCookies("firstName"))

// let allCookies = document.cookie;
// console.dir(allCookies)
// console.log(allCookies.split("; "))

