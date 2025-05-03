// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercardbtn");
const paypal = document.getElementById("paypalbtn");
const submit = document.getElementById("mySubmit");
const subres = document.getElementById("subresult");
const payres = document.getElementById("payresult");

submit.onclick = function(){
    if(subscribe.checked){
        if(visa.checked){
            subres.textContent = "You are Subscribed";
            payres.textContent = "You choose Visa";
        }
        else if(mastercard.checked){
            subres.textContent = "You are Subscribed";
            payres.textContent = "You choose MasterCard";
        }else if(paypal.checked){
            subres.textContent = "You are Subscribed";
            payres.textContent = "You choose PayPal";
        }else{
            subres.textContent = "You are Subscribed";
            payres.textContent = "You have not choosen anything !";
        }
    }
    else{
        if(visa.checked){
            subres.textContent = "You are NOT Subscribed";
            payres.textContent = "SUBSCRIBE TO PAY FIRST !";
        }
        else if(mastercard.checked){
            subres.textContent = "You are NOT Subscribed";
            payres.textContent = "SUBSCRIBE TO PAY FIRST !";
        }else if(paypal.checked){
            subres.textContent = "You are NOT Subscribed";
            payres.textContent = "SUBSCRIBE TO PAY FIRST !";
        }else{
            subres.textContent = "You are NOT Subscribed";
    }


}
}