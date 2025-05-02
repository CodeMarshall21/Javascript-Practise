// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)


let val;
let num;
let str;
let bool;

document.getElementById("submit").onclick = function(){
    val = document.getElementById("inp").value;
    document.getElementById("myh1").textContent = `Datatype: ${typeof val}`;
}

document.getElementById("number").onclick = function(){
    num = Number(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof num}`;
    window.alert(`Datatype converted to: ${typeof num};`);
    document.getElementById("para").textContent = `val = ${num}`;
}

document.getElementById("string").onclick = function(){
    str = String(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof str}`;
    window.alert(`Datatype converted to: ${typeof str};`);
    document.getElementById("para").textContent = `val = ${str}`;
}

document.getElementById("boolean").onclick = function(){
    bool = Boolean(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof bool}`;
    window.alert(`Datatype converted to: ${typeof bool};`);
    document.getElementById("para").textContent = `val = ${bool}`;
}

