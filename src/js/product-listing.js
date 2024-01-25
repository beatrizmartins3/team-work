import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import {loadHeaderFooter, getParam} from "./utils.mjs";

// const dataSource=new ProductData("Tents");
// const element=document.querySelector(".product-list");
// const listing=new ProductListing("Tents",dataSource,element);

// listing.init();

loadHeaderFooter();
const category=getParam("category");
const dataSource= new ProductData();
const listElement=document.querySelector(".product-list");
const myList= new ProductListing(category,dataSource,listElement);
myList.init();