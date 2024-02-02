import {loadHeaderFooter} from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const theCheckout=new CheckoutProcess("so-cart",".checkout-summary");
theCheckout.init();

document.querySelector("#zipcode").addEventListener("blur",theCheckout.calculateOrder.bind(theCheckout));

document.querySelector("#submit").addEventListener("click",(e)=>{
    e.preventDefault();
    const theForm=document.forms[0];
    const chk_status=theForm.checkValidity();
    theForm.reportValidity();
    if(chk_status)
       theCheckout.checkout();
})