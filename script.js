const endpoint = "https://conspirapedia-e82d.restdb.io/rest/conspirapedia";
const apikeys = {
  headers: {
    "x-apikey": "631b232cfdc15b0265f1727b",
  },
};

async function hentData() {
  const response = await fetch(endpoint, apikeys);
  const teorier = await response.json();
  visTeori(teorier);
}

hentData();

function visTeori(teorier) {
  const section = document.querySelector("section");
  const template = document.querySelector("template").content;

  teorier.forEach((teori) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".billeder").src = "images/" + teori.Billednavn;
    section.appendChild(klon);
  });
}
