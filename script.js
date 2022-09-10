



let filter = "alle";
let teorier;

const endpoint = "https://conspirapedia-e82d.restdb.io/rest/conspirapedia";
const apikeys = {
    headers : {
        "x-apikey" : "631b232cfdc15b0265f1727b",
    }   
}


async function hentData() {
    const response = await fetch(endpoint, apikeys);
    teorier = await response.json();
    visTeori(teorier);
}

hentData();


function visTeori(teorier) {
const section = document.querySelector("section");
const template = document.querySelector("template").content;

section.innerHTML = ""; //visker tavlen ren først

teorier.forEach(teori => {
    const klon = template.cloneNode(true);
    if(filter == "alle" || filter == teori.kategori){
        klon.querySelector(".billeder").src = "images/" + teori.Billednavn;
        klon.querySelector("h2").textContent = teori.Overskrift;
        klon.querySelector("p").textContent = teori.Korttekst;
        section.appendChild(klon);
    }
});

}

const knapperne = document.querySelectorAll("button");

knapperne.forEach(knap => {
knap.addEventListener("click", vaelger);
});

function vaelger(){
    filter = this.dataset.kategori;
    visTeori(teorier);
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
}