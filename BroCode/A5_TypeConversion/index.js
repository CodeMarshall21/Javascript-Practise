let val;
let num;
let str;
let bool;

document.getElementById("submit").onclick = function(){
    val = document.getElementById("inp").value;
    document.getElementById("myh1").textContent = `Datatype: ${typeof val}`
}

document.getElementById("number").onclick = function(){
    num = Number(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof num}`
    document.getElementById("para").textContent = `Datatype converted to: ${typeof num}; val = ${num}`
}

document.getElementById("string").onclick = function(){
    str = String(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof str}`
    document.getElementById("para").textContent = `Datatype converted to: ${typeof str}; val = ${str}`
}

document.getElementById("boolean").onclick = function(){
    bool = Boolean(val);
    document.getElementById("myh1").textContent = `Datatype: ${typeof bool}`
    document.getElementById("para").textContent = `Datatype converted to: ${typeof bool}; val = ${bool}`
}

