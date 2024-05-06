

let url = "https://picsum.photos/v2/list?limit=100";

async function loadImages() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
async function init(width = 200, height = 300) {
    const imageList = await loadImages();

    let id = sessionStorage.getItem("id");
    if (!id) {
        let randomNumber = Math.floor(Math.random() * imageList.length);
        sessionStorage.setItem("id", randomNumber);
        id = randomNumber;
    }
    let imageUrl = imageList[id].download_url;
    //regex that matches "3840/2160" in ""https://picsum.photos/id/104/3840/2160"
    const regex = /\d{3,4}\/\d{3,4}/; // TODO:

    imageUrl = imageUrl.replace(regex, `${width}//${height}`);
    console.log(imageUrl);
    document.querySelector("#image").src = imageUrl;
}


document.addEventListener("DOMContentLoaded", function() {
    init();
});


let imageWidth =document.querySelector("#width").value;
let imageHeight =document.querySelector("#height").value;



// Neues Bild wird geladen (refresh der Seite)

document.querySelector("#refresh").addEventListener("click", function() {
    sessionStorage.clear();
    init();
});

document.querySelector("#width").addEventListener("input", function() {
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    init(newWidth, newHeight);
});

document.querySelector("#height").addEventListener("input", function() {
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    init(newWidth, newHeight);
});

console.log(newHeight);
console.log(imageHeight);
 

