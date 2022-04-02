document.addEventListener('DOMContentLoaded', () => {
    /* Création AddEvtLstnr sur btn navbar et all-site */
    
    let buttonNavbar = document.getElementById("menu-btn");

    buttonNavbar.addEventListener('click', () => {

        let navbar = document.getElementById('navbar-id');
        let allSite = document.getElementById('all-site');
        if (navbar.classList.contains('opened-nav')) {
            navbar.classList.remove('opened-nav');
        }
        else {
            navbar.classList.add('opened-nav');
        }

        if (allSite.classList.contains('opened-nav')) {
            allSite.classList.remove('opened-nav');
        }
        else {
            allSite.classList.add('opened-nav');
        }
    })
})
