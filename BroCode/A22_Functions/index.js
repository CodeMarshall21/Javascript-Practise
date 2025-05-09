// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

function isValid(email){
    return email.includes("@") && email.includes(".") ? true : false ;
};

document.getElementById("check").onclick = function(){
    let email = document.getElementById("myEmail").value;
    if (isValid(email)){
        document.getElementById("result").textContent = "Your Email ID is verified !";
    }
    else{
        document.getElementById("result").textContent = "Your Email ID is NOT verified !";
    }
}