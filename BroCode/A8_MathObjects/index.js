// Math = built-in object that provides a
//              collection of properties and methods


const round = document.getElementById("round");
const floor = document.getElementById("floor");
const ceil = document.getElementById("ceil");
const trunc = document.getElementById("trunc");
const sqrt = document.getElementById("sqrt");
const log = document.getElementById("log");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const abs = document.getElementById("abs");
const sign = document.getElementById("sign");
const pow = document.getElementById("pow");
const pi = document.getElementById("pi");
const e = document.getElementById("e");
const max = document.getElementById("max");
const min = document.getElementById("min");

let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");

let val;


round.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.round(val);
};

floor.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.floor(val);
};

ceil.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.ceil(val);
};

trunc.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.trunc(val);
};

sqrt.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.sqrt(val);
};

log.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.log(val);
};

sin.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.sin(val);
};

cos.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.cos(val);
};

tan.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.tan(val);
};

abs.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.abs(val);
};

sign.onclick = function(){
    val = Number(num1.value);
    result1.value = Math.sign(val);
};

pow.onclick = function(){
    let val2 = Number(num2.value);
    let val3 = Number(num3.value);
    result2.value = Math.pow(val2,val3);
};

pi.onclick = function(){
    // num1 = Number(document.getElementById("num1"));
    result3.value = Math.PI;
};

e.onclick = function(){
    // num1 = Number(document.getElementById("num1"));
    result4.value = Math.E;
}

max.onclick = function(){
    let val4 = Number(num4.value);
    let val5 = Number(num5.value);
    let val6 = Number(num6.value);
    result5.value = Math.max(val4,val5,val6);
}

min.onclick = function(){
    let val4 = Number(num4.value);
    let val5 = Number(num5.value);
    let val6 = Number(num6.value);
    result5.value = Math.min(val4,val5,val6);
}