import {loadHeaderFooter} from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const theCheckout=new CheckoutProcess("so-cart",".checkout-summary");
theCheckout.init();

document.querySelector("#zipcode").addEventListener("blur",theCheckout.calculateOrder.bind(theCheckout));

const sub=document.getElementById("submit");
sub.addEventListener("submit",function(event){
    event.preventDefault();
    theCheckout.checkout();
})