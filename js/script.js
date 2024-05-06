

let url = "https://picsum.photos/v2/list?limit=100";

// Helper functions
function replaceSize(string, width = 1000, height = 500) {
    const regex = /(?<=\/\d*\/)\d*\/\d*/g;
    return string.replace(regex, `${width}/${height}`);
}

function reloadImage(newWidth, newHeight) {
    let imageURL = document.querySelector("#image").src;
    imageURL = replaceSize(imageURL, newWidth, newHeight);
    document.querySelector("#image").src = imageURL;
    document.querySelector("#download").href =  imageURL;
}

function checkSize(width, height) {
    if (width < 100) {
        width = 100;
    }

    if (width > 1200){
        width = 1000;
    }

    if (height < 100) {
        height = 100;
    }

    if (height > 800) {
        height = 800;
    }

    return [width, height];
}





// Fetch images from the API
async function loadImages() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
async function init() {
    const imageList = await loadImages();

    let id = sessionStorage.getItem("id");
    if (!id) {
        let randomNumber = Math.floor(Math.random() * imageList.length);
        sessionStorage.setItem("id", randomNumber);
        id = randomNumber;
    }
    let imageUrl = imageList[id].download_url;
    //regex that matches "3840/2160" in ""https://picsum.photos/id/104/3840/2160"
    imageUrl = replaceSize(imageUrl);
// if radio button is checked, add ?grayscale to the url
    console.log(imageUrl);
    document.querySelector("#image").src = imageUrl;
    document.querySelector("#download").href =  imageUrl;
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
    document.querySelector("#grayscale").checked = false;
});

document.querySelector("#width").addEventListener("input", function() {
    console.log("input");
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    newWidth = checkSize(newWidth, newHeight)[0];
    newHeight = checkSize(newWidth, newHeight)[1];
    reloadImage(newWidth, newHeight);
});

document.querySelector("#height").addEventListener("input", function() {
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    newWidth = checkSize(newWidth, newHeight)[0];
    newHeight = checkSize(newWidth, newHeight)[1];
    reloadImage(newWidth, newHeight);
    
    
});


document.querySelector("#grayscale").addEventListener("click", function() {
    let imageURL = document.querySelector("#image").src;
    if (document.querySelector("#grayscale").checked) {
        imageURL = imageURL + "?grayscale";
        reloadImage();     
    }
    else {
        imageURL = imageURL.replace("?grayscale", "");
        reloadImage();
    }
});


