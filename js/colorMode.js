document.addEventListener('DOMContentLoaded', function() {
    console.log("hello");
    toggleColorMode();
    
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

}