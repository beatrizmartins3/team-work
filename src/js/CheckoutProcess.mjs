import {getLocalStorage} from ".utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

export default class CheckoutProcess{
    constructor(key,outputSelector){
        this.key=key;
        this.outputSelector=outputSelector;
        this.list=[];
        this.total=0;
        this.shipping=0;
        this.order=0;
        this.tax=tax;
    }
    init(){
        this.list=getLocalStorage(this.key);
        this.calculateSummary();
    }
    calculateSummary(){
        const element=document.querySelector(this.outputSelector + "subtotal");
        const NumElement=document.querySelector(this.outputSelector + "numItems");
        NumElement.innerText=this.list.length;
        const amounts=this.list.map((item)=>item.FinalPrice);
        this.itemTotal=amounts.reduce((sum,item)=>sum+item);
        element.innerText="$"+this.itemTotal;
    }
    calculateOrder(){
        this.shipping=10+(this.list.length-1)*2;
        this.tax=(this.itemTotal*0.06).toFixed(2);
        this.order=(
            parseFloat(this.itemTotal)+parseFloat(this.shipping)+parseFloat(this.tax)).toFixed(2);
        this.displayOrderTotal();
    }
    displayOrderTotal(){
        const shipping=document.querySelector(this.outputSelector+"#shipping");
        const tax=document.querySelector(this.outputSelector + "#tax");
        const order=document.querySelector(this.outputSelector + "#order");
        shipping.innerText=$+this.shipping;
        tax.innerText=$+this.tax;
        order.innerText=$+this.order
    }

}