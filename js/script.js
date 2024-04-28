

let imageUrl = "https://picsum.photos/600/600";
document.querySelector("#image").src = imageUrl;



// Neues Bild wird geladen (refresh der Seite)

document.querySelector("#refresh").addEventListener("click", function() {
    location.reload();
});


