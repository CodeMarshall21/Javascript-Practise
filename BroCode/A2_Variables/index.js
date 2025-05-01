// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

let name = "MarshallMathers";   //String
let age = 45;                   //Number
let gpa = 6.9;                  //Float
let online = true;              //Boolean


document.getElementById("h1").textContent = `Hi ${name} !`
document.getElementById("p1").textContent = `your name is:  ${name} !`
document.getElementById("p2").textContent = `your age is:  ${age} !`
document.getElementById("p3").textContent = `your gpa is:  ${gpa} !`
document.write("use 'typeof' to find datatype of variable ex: typeof name -> String");

if(online){
    document.getElementById("p4").textContent = `You are Online !`
}else{
    document.getElementById("p4").textContent = `You are Offline !`    
}


