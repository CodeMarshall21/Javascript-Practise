// .reduce() = reduce the elements of an array
//                     to a single value    

const display = document.getElementById("example");
const content = [];

// ----------- EXAMPLE 1 -----------
console.log(`----------- EXAMPLE 1 -----------`)
const prices = [5, 30, 10, 25, 15, 20];
const logOutput = [];
const TOTAL = prices.reduce(sum,0);
function sum(accumulator, element, index) {
    const logLine = `${index}th iteration: accumulator = ${accumulator}, element = ${element}`;
    console.log(logLine);
    logOutput.push(`<p>${logLine}</p>`);
    return accumulator + element;
};

logOutput.unshift(`<p>prices → ${prices.join(', ')}</p>`);
logOutput.unshift(`<h1>----------- EXAMPLE 1 -----------</h1>`)
logOutput.push(`<p>prices.reduce(sum) → ₹${TOTAL.toFixed(2)}</p>`);


// ----------- EXAMPLE 2 -----------
console.log(`----------- EXAMPLE 2 -----------`);
logOutput.push(`<h1>----------- EXAMPLE 2 -----------</h1>`);

const scores = [75, 50, 90, 80, 65, 95];
logOutput.push(`<p>scores -> ${scores.join(', ')}</p>`);

const maxScore = scores.reduce(getMax,0);
logOutput.push(`<p>maxScore = scores.reduce(getMax) -> ${maxScore}</p><br>`);

const minScore = scores.reduce(getMin,0);
logOutput.push(`<p>minScore = scores.reduce(getMin) -> ${minScore}</p><br>`);

function getMax(accumulator,element,index){
    const logLine = `${index}th iteration: accumulator = ${accumulator}, element = ${element}`;
    console.log(logLine);
    logOutput.push(`<p>${logLine}</p>`);

    return Math.max(accumulator,element);
}

function getMin(accumulator,element,index){
    const logLine = `${index}th iteration: accumulator = ${accumulator}, element = ${element}`;
    console.log(logLine);
    logOutput.push(`<p>${logLine}</p>`);

    return Math.min(accumulator,element);
}


display.innerHTML = logOutput.join("");
