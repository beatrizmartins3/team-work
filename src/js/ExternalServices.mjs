const baseURL= "http://server-nodejs.cit.byui.edu:3000/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw {name: "servicesError",message: jsonResponse};
  }
}

export default class ExternalServices {
   constructor(category) {
  //   this.category = category;
  //   this.path = `../json/${this.category}.json`;
   }
  // getData() {
  //   return fetch(this.path)
  //     .then(convertToJson)
  //     .then((data) => data);
  // }
  async getData(category){
    const response=await fetch(baseURL + `products/search/${category}`);
    const data= await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const response=await fetch(baseURL + `product/${id}`);
    const data= await convertToJson(response);
    return data.Result;
  }
  
  async checkout(payload){
    const opitions={
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    };
    return await fetch (baseURL+"checkout/",opitions).then(convertToJson);
  }
}
