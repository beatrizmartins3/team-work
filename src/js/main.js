import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const dataSource=new ProductData("Tents");
const element=document.querySelector(".product-list");
const listing=new ProductListing("Tents",dataSource,element);

listing.init();