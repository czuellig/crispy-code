// ------------------------------------------------------------ Variables

let url = "https://picsum.photos/v2/list?limit=100";

let imageWidth = document.querySelector("#width").value;
let imageHeight =document.querySelector("#height").value;

// ------------------------------------------------------------ Helper functions
function replaceSize(string, width = 1000, height = 500) {
    const regex = /(?<=\/\d*\/)\d*\/\d*/g;
    return string.replace(regex, `${width}/${height}`);
}

function reloadImageSize(newWidth, newHeight) {
    let imageURL = document.querySelector("#image").src;
    imageURL = replaceSize(imageURL, newWidth, newHeight);
    document.querySelector("#image").src = imageURL;
    document.querySelector("#download").href = imageURL;
}

function reloadImage(imageURL) {
    document.querySelector("#image").src = imageURL;
    document.querySelector("#download").href = imageURL;
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

// ------------------------------------------------------------ Fetch images from the API

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
    imageUrl = replaceSize(imageUrl);
    reloadImage(imageUrl);
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});

// ------------------------------------------------------------ Grösse des Bildes wird angepasst

document.querySelector("#width").addEventListener("input", function() {
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    newWidth = checkSize(newWidth, newHeight)[0];
    newHeight = checkSize(newWidth, newHeight)[1];
    reloadImageSize(newWidth, newHeight);
});



document.querySelector("#height").addEventListener("input", function() {
    let newWidth = document.querySelector("#width").value;
    let newHeight = document.querySelector("#height").value;
    newWidth = checkSize(newWidth, newHeight)[0];
    newHeight = checkSize(newWidth, newHeight)[1];
    reloadImageSize(newWidth, newHeight);
});

// ------------------------------------------------------------ Blur des Bildes wird angepasst

document.querySelector("#range_blur").addEventListener("input", function() {
    let blurValue = document.querySelector("#range_blur").value;
    let imageURL = document.querySelector("#image").src;

    if (blurValue == 0) {
        imageURL = imageURL.replace(/[&?]blur=\d+/, "");
        if (imageURL.includes("&")) {
            imageURL = imageURL.replace("&", "?");
        }
        reloadImage(imageURL);
        return;
    }
    let param;
    let imageURLBlur;
    if (document.querySelector("#grayscale").checked) {
        param = "&";
    } else {
        param = "?";
    } if (imageURL.includes("blur=")) {
        imageURLBlur = imageURL.replace(/blur=\d+/, `blur=${blurValue}`);
    } else {
        imageURLBlur = imageURL + param + "blur=" + blurValue;
    }
    reloadImage(imageURLBlur);
});

// ------------------------------------------------------------ Graustufe des Bildes wird angepasst

document.querySelector("#grayscale").addEventListener("click", function() {
    let imageURL = document.querySelector("#image").src;
    let blurValue = document.querySelector("#range_blur").value;

    // Wenn die Graustufen-Checkbox aktiviert ist
    if (document.querySelector("#grayscale").checked) {
        // Wenn der Blur-Effekt nicht aktiviert ist oder der Blur-Effekt aktiviert ist und der Wert 0 ist
        if (blurValue == 0) {
            // Füge den Graustufen-Parameter hinzu
            imageURL += (imageURL.includes("?") ? "&" : "?") + "grayscale";
        } else {
            // Behalte den Blur-Effekt bei und füge den Graustufen-Parameter hinzu
            imageURL = imageURL.replace(/[&?]blur=\d+/g, ""); // Entferne vorhandenen Blur-Parameter
            imageURL += (imageURL.includes("?") ? "&" : "?") + `blur=${blurValue}`; // Füge Blur-Parameter hinzu
            imageURL += "&grayscale"; // Füge Graustufen-Parameter hinzu
        }
    } else {
        // Wenn die Graustufen-Checkbox nicht aktiviert ist
        // Entferne den Graustufen-Parameter aus der URL
        imageURL = imageURL.replace(/[&?]grayscale/g, "");

        // Wenn der Blur-Effekt aktiviert ist und die Graustufen-Checkbox deaktiviert ist
        if (blurValue > 0) {
            // Wenn ein & im URL existiert, ersetze es durch ?
            imageURL = imageURL.replace("&", "?");
        }
    }

    // Lade das Bild neu
    reloadImage(imageURL);
});

// ------------------------------------------------------------ Neues Bild wird geladen (SessionStorage wird gelöscht)

document.querySelector("#refresh").addEventListener("click", function() {
    sessionStorage.clear();
    init();
    document.querySelector("#grayscale").checked = false;
    document.querySelector("#range_blur").value = 0;
    document.querySelector("#width").value = 1000;
    document.querySelector("#height").value = 500;
});

// ------------------------------------------------------------ Image Url wird kopiert

document.querySelector("#copy").addEventListener("click", function() {
    let imageURL = document.querySelector("#image").src;
    navigator.clipboard.writeText(imageURL);
    console.log("Copied to clipboard");
});

// ------------------------------------------------------------ Dark/Ligt Mode Switcher

document.addEventListener('DOMContentLoaded', function() {
    console.log("hello");
    toggleColorMode();
    



    // document.body.classList.add('dark-mode');

    // modeToggle.addEventListener('change', function() {
    //   if (modeToggle.checked) {
    //     document.body.classList.add('dark-mode');
    //     // Dark Mode
    //     document.querySelector("#teamLink").style.color = '#ffffff';
    //     document.querySelector("#footerBorder").style.borderColor = '#ffffff';
    //     document.querySelector("#copyIcon").style.color = '#ffffff';
    
    //   } else {
    //     document.body.classList.remove('dark-mode');
    //     // Light Mode
    //     document.querySelector("#teamLink").style.color = '#000000';
    //     document.querySelector("#footerBorder").style.borderColor = '#000000';
    //     document.querySelector("#copyIcon").style.color = '#000000';
    //   }
    // });
  });

  function toggleColorMode() {
    const modeToggle = document.getElementById('modeToggle');

    if (localStorage.getItem('color-mode') === null) {
      localStorage.setItem('color-mode', 'dark');
      modeToggle.checked = true;
    }
    if (localStorage.getItem('color-mode') === 'light') {
      document.body.classList.add('light-mode');
      modeToggle.checked = false;
    }


    modeToggle.addEventListener('change', function() {
        localStorage.setItem('color-mode', modeToggle.checked ? 'dark' : 'light');
        let colorMode = localStorage.getItem('color-mode');

      if (colorMode === "light") { 
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    });
    // const currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    // document.body.classList.toggle('light-mode');
    // localStorage.setItem('color-mode', currentMode);
  }