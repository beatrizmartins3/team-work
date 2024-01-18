import { setLocalStorage,getParams } from "./utils.mjs";
import {ProductData} from "./ProductData.mjs";
import {productDetails} from "./ProductDetails.mjs"

const dataSource = new ProductData("tents");
const productId=getParams("product");
const product= new productDetails(productId,dataSource);
product.init();

//function addProductToCart(product) {
  //setLocalStorage("so-cart", product);
//}
// add to cart button event handler
//async function addToCartHandler(e) {
  //const product = await dataSource.findProductById(e.target.dataset.id);
  //addProductToCart(product);
//}

// add listener to Add to Cart button
//document
  //.getElementById("addToCart")
  //.addEventListener("click", addToCartHandler);

//console.log(dataSource,findProductById(productId));
