// parts.js - small helper for parts page
document.addEventListener('DOMContentLoaded', function () {
    // Ensure HOME link points to indexx.html (page 1)
    const home = document.querySelector('.parts-navbar .home-link');
    if (home) home.setAttribute('href', 'indexx.html');

    // Small active-link behavior
    const links = document.querySelectorAll('.parts-navbar a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // if link is internal anchor, prevent default and set active class
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
