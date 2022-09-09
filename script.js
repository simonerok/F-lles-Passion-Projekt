





const endpoint = "https://conspirapedia-e82d.restdb.io/rest/conspirapedia";
const apikeys = {
    headers : {
        "x-apikey" : "631b232cfdc15b0265f1727b",
    }   
}


async function hentData() {
    const response = await fetch(endpoint, apikeys);
    const teorier  = await response.json();
    visTeori(teorier);
}

hentData();


function visTeori(teorier) {
    
const main = document.querySelector("main");
const template = document.querySelector("template").content;

teorier.forEach(teori => {
 
    const klon = template.cloneNode(true);
    klon.querySelector(".billeder").src = "images/" + teori.Billednavn;
    main.appendChild(klon);
});

}