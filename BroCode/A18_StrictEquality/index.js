//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const intPI = document.getElementById("integer");
const strPI = document.getElementById("string");

const result = document.getElementById("result");

const sInt = document.getElementById("strictlyint");
const sStr = document.getElementById("strictlystring");

const isInt = document.getElementById("isint");
const isStr = document.getElementById("isstring");

const submit = document.getElementById("Mysubmit");

let PI;

submit.onclick = function(){
    if (intPI.checked){
        PI = 3.14;
        if (sInt.checked){
            result.textContent = PI === 3.14;
        }
        else if (sStr.checked){
            result.textContent = PI === "3.14";
        }
        else if (isInt.checked){
            result.textContent = PI == 3.14;
        }
        else if (isStr.checked){
            result.textContent = PI == "3.14";
        }
    }


    else if (strPI){
        PI = "3.14";
        if (sInt.checked){
            result.textContent = PI === 3.14;
        }
        else if (sStr.checked){
            result.textContent = PI === "3.14";
        }
        else if (isInt.checked){
            result.textContent = PI == 3.14;
        }
        else if (isStr.checked){
            result.textContent = PI == "3.14";
        }
    }

}


