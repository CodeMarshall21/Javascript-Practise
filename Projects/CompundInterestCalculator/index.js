// COMPOUND INTEREST CALCULATOR

const calculateTrigger = document.getElementById("calculate");


calculateTrigger.onclick = function calculate(){
    const principalInput = document.getElementById("principal");
    const interestInput = document.getElementById("interest");
    const yearInput = document.getElementById("years");
    const totalOutput = document.getElementById("total-amount");

    let principal = Number(principalInput.value);
    let interest = Number(interestInput.value / 100);
    let years = Number(yearInput.value);

    if (principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(interest < 0 || isNaN(interest)){
        interest = 0;
        interestInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }
    let result = principal * Math.pow((1 + interest), years);
    totalOutput.textContent = result.toLocaleString(undefined, {style: "currency", currency: "INR"});
    
}



