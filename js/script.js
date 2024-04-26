

let bildurl = "https://picsum.photos/600/600";



// Neues Bild wird geladen (refresh der Seite)

document.querySelector("#refresh").addEventListener("click", function() {
    location.reload();
});
// Eine Funktion, die an die Variable bildurl den Text "?grayscale" anhängt, wenn die Checkbox "grayscale" aktiviert ist.
function updateImageUrl() {
    if (document.querySelector("#grayscale").checked) {
        bildurl += "?grayscale";
    }
}

// Event Listener für die Checkbox "grayscale"
document.querySelector("#grayscale").addEventListener("change", updateImageUrl);

