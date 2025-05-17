// .reduce() = reduce the elements of an array
//                     to a single value    

const display = document.getElementById("example");
const content = [];

// ----------- EXAMPLE 1 -----------

const prices = [5, 30, 10, 25, 15, 20];
const logOutput = [];

const TOTAL = prices.reduce((accumulator, element, index) => {
    const logLine = `${index}th iteration: accumulator = ${accumulator}, element = ${element}`;
    console.log(logLine);
    logOutput.push(`<p>${logLine}</p>`);
    return accumulator + element;
}, 0);

logOutput.unshift(`<p>prices → ${prices.join(', ')}</p>`);
logOutput.push(`<p>prices.reduce(sum) → ₹${TOTAL.toFixed(2)}</p>`);

display.innerHTML = logOutput.join("");