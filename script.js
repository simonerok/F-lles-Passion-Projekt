





const endpoint = "https://conspirapedia-e82d.restdb.io/rest/conspirapedia";
const apikeys = {
    headers : {
        "x-apikey" : "1abc4f79c8afb63932d27ba9494bdcac3f866",
    }
}


async function hentData() {
    const response = await fetch(endpoint, apikeys);
    const teorier  = await response.json();
console.log("hentet");
}

hentData();