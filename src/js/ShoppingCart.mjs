import {getLocalStorage, renderListWithTemplate} from "./utils.mjs";

function cartItem(item){
    const itens= `<li class="cart-card divider">
    <a href="class= "cart-card link">
    <img src="${item.Image}" alt="Image of ${item.Name} "/>
    <h2 class="card__name">${item.Name}</h2>
    </a>
    </li>`;
    return itens;
}

export default class shoppingCart{
    constructor(key,parentSeletor){
        this.key=key;
        this.parentSeletor=parentSeletor;
    }
    cartContents(){
        const cartItens=getLocalStorage(this.key);
        const htmlItens= cartItens.map((item)=>cartItem(item));
        document.querySelector(this.parentSeletor).innerHTML=htmlItens.join("");
    }
}