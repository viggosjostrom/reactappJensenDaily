document.addEventListener('DOMContentLoaded', function () {
    console.log("site.js is loaded!");

    //Dark Mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    const darkModeButton = document.getElementById('dark-mode-button');
    darkModeButton.addEventListener('click', toggleDarkMode);

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});