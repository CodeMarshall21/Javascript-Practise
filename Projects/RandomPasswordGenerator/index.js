const passwordLen = document.getElementById("pwLen");
const LowerCaseBtn = document.getElementById("IncLowerCase");
const UpperCaseBtn = document.getElementById("IncUpperCase");
const IncSymbolsBtn = document.getElementById("IncSymbols"); 
const IncNumbersBtn = document.getElementById("IncNumbers");
const passwordGenerateBtn = document.getElementById("pwGen");
const passwordResult = document.getElementById("password");



const passwordArray = 
                    [
                        "abcdefghijklmnopqrstuvwxyz",
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        "0123456789",
                        "!@#$%^&*()_+-=[]';,./{}|:\"<>?",
                    ]


passwordGenerateBtn.onclick = function generatePassword(){
    let generateArr = [];
    if (LowerCaseBtn.checked){
        generateArr.push(passwordArray[0]);
    }
    if (UpperCaseBtn.checked){
        generateArr.push(passwordArray[1]);
    }
    if (IncSymbolsBtn.checked){
        generateArr.push(passwordArray[3]);
    }
    if (IncNumbersBtn.checked){
        generateArr.push(passwordArray[2]);
    }

    
    let len = generateArr.length;
    if (Number(passwordLen.value) < 1){
        window.alert("BRO SERIOUSLY ? ENTER SOME LENGTH ABOVE 1 !!!");
        return;
    }if(len < 1){
        window.alert("SELECT ATLEAST ONE BOX BITCH !!!");
        return;
    }
    
    let password = ``;
    for (let i = 0; i < Number(passwordLen.value); i ++){
        password += generateArr[i % len][Math.floor(Math.random() * (generateArr[i % len].length))];
    }
    passwordResult.textContent = password;


}


