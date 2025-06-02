// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources

output = [];
const display = document.getElementById("display");

try {
    const dividend  = window.prompt("enter a Dividend");
    const divisor = window.prompt("Enter Divisor");

    if (divisor == 0){
        throw new Error("Can't divide by zero !");
    }

    if (isNaN(divisor) || isNaN(dividend)){
        throw new Error("Bruh type a number !")
    }

    const result = dividend /divisor;

    output.push(`<p>RESULT:  ${result}</p>`);
}
catch(error){
    output.push(`<p>you encountered ${error}</p>`);
}

output.push(`<p>you reached END !</p>`); 

display.innerHTML = output.join(" ");