// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param){
  const queryString=window.location.search;
  const urlParams=URLSearchParams(queryString);
  const product=urlParams.get("product");
  return product;
}

export function renderListWithTemplate(templateFn,parentElement,list,position="afterbegin",clear="false"){
  const htmlStrings=list.map(templateFn);
  if(clear){
    parentElement.innerHTML="";
  }
  parentElement.insertAdjacentHTML(position,htmlStrings.join(""));
}

export function renderWithTemplate(template,parentElement,data,callback){
  parentElement.insertAdjacentHTML("afterbegin",template);
  if(callback){
    callback(data);
  }
}

async function loadTemplate(path){
  const variable=await fetch(path).then(convertToText);
  const template= document.createElement("template");
  template.innerHTML=variable;
  return template;
}

export async function loadHeaderFooter(){
  const hTemplate=await loadTemplate("public/partials/header.html");
  const hElement= document.querySelector("#main-header");
  const fTemplate=await loadTemplate("public/partials/footer.html");
  const fElement= document.querySelector("#main-footer");

  renderWithTemplate(hTemplate,hElement);
  renderWithTemplate(fTemplate,fElement);
}

export function alertMessage(message,scroll=true){
  const alert=document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML=`<p>${message}</p><span>X</span>`;

  alert.addEventListener("click",function(e){
    if(e.target.tagName=="SPAN"){
      main.removeChild(this);
    }
  })
  const main=document.querySelector("main");
  main.prepend(alert);
  if(scroll)
    window.scrollTo(0,0);
}
export function removeAllAlerts(){
  const alerts=document.querySelector(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}