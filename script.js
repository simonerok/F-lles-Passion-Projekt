



let filter = "alle";
let teorier;

//url'en til vores rest db og vores api key til at få adgang til indholdet
const endpoint = "https://conspirapedia-e82d.restdb.io/rest/conspirapedia";
const apikeys = {
    headers : {
        "x-apikey" : "631b232cfdc15b0265f1727b",
    }   
}

//en asynkron funktion der henter json ned fra rest db og laver den om til noget man kan bruge i vscode
async function hentData() {
    const response = await fetch(endpoint, apikeys);
    teorier = await response.json();
    visTeori(teorier);
}

hentData();

// viser alle vores konspirationsteorier i html'en
function visTeori(teorier) {
const section = document.querySelector("section");
const template = document.querySelector("template").content;

section.innerHTML = ""; //visker tavlen ren først inden der sættes mere ind i html

// et for each loop der kører igennem alt json og kloner det ind i html elementerne. 
teorier.forEach(teori => { 
    const klon = template.cloneNode(true);
    if(filter == "alle" || filter == teori.kategori){ //filtrerer hvad der skal vises alt efter hvad for en knap man har klikket på
        klon.querySelector("h2").addEventListener("click", ()=> {visEnkelt(teori._id)})
        klon.querySelector(".billeder").addEventListener("click", ()=> {visEnkelt(teori._id)})
        klon.querySelector(".billeder").src = "nye billeder_tema7/" + teori.Billednavn;
        klon.querySelector("h2").textContent = teori.Overskrift;
        klon.querySelector("p").textContent = teori.Korttekst;
        section.appendChild(klon);
    }
});

}

const knapperne = document.querySelectorAll("button");
//et for each loop der gør at man kan klikke på alle knapperne
knapperne.forEach(knap => {
knap.addEventListener("click", vaelger);
});

//en funktion der sætter filter variablen til det dataset i knappen man har klikket på og putter en klasse valgt der highlighter knappen
function vaelger(){
    filter = this.dataset.kategori;
    visTeori(teorier);
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
}

//en funktion der ændrer hvor man havner henne på sitet vha. id'et fra json-elementerne
function visEnkelt(id){
    location.href ="singleview.html?id="+id;
}