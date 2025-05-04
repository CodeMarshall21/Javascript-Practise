// Method Chaining = Calling one method after another
//                                    in one continuous line of code.


// document.getElementById("submit").onclick = function(){
//     let username = document.getElementById("username").value;
//     username = username.trim();
//     let letter = username.charAt(0);
//     letter = letter.toUpperCase();

//     let extra = username.slice(1);
//     extra = extra.toLowerCase();

//     username = letter + extra;

//     document.getElementById("result").value = username;
// }

// ---- NO METHOD CHAINING ----

document.getElementById("submit").onclick = function(){
    let username = document.getElementById("username").value.trim().charAt(0).toUpperCase() + document.getElementById("username").value.trim().slice(1).toLowerCase();

    document.getElementById("result").value = username;
}

