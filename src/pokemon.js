const url="https://pokeapi.co/api/v2/pokemon";
let results=null;
async function getPokemon(url){
    const response=await fetch (url);
    
    if (response.ok){
        const data= await response.json();
        doStuff(data);
    }
    function doStuff(data){
        results=data;
        console.log("first: ", results);

        results.results.forEach((pokemon) => {
            const select=document.createElement("select");
            select.textContent=pokemon.name;
            document.querySelector("main").appendChild(select);
        });
    }
    getPokemon(url);
    console.log("second: ",results);
}