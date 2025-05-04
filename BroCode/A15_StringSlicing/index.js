// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)


const submit = document.getElementById("submit");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const extension = document.getElementById("extension");


submit.onclick = function(){
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;

    fname.value = fullname.slice(0,fullname.indexOf(" "));
    lname.value = fullname.slice(fullname.indexOf(" ") + 1);
    uname.value = email.slice(0,email.indexOf("@"));
    extension.value = email.slice(email.indexOf("@") + 1);
}
