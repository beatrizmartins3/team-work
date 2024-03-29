import { setLocalStorage,getLocalStorage } from "./utils.mjs";

function productDetails(product){
    return `<section class="produt-detail"> <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="divider">${NameWhithoutBrand}</h2>
    <img class= "divider" src="${product.Image.PrimaryLarge}" alt="Image of ${product.NameWhithoutBrand} "/>
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart </button>
    </div> </section>`;
}

export default class ProductDet{
    constructor(productId,dataSource){
        this.productId=productId;
        this.dataSource=dataSource;
        this.product={};
    }
    async init(){
        this.product= await this.dataSource.findProductById(this.productId);
        this.renderProductDetails(main);

        document.getElementById("addToCart")
        .addEventListener("click",this.addToCart.bind(this));
    }
    addToCart(){
        let contents=getLocalStorage("so-cart");
        if(!contents){
            contents=[];
        }
        contents.push(this.product);
        setLocalStorage("so-cart",contents);
    }
    renderProductDetails(selector){
        const element=document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin",productDetails(this.product));
    }
}