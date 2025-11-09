// Archivo: ./toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navBar = document.getElementById('navbar');

    // **Añade estas líneas para depuración:**
    console.log('Ícono del menú:', menuIcon); 
    console.log('Barra de navegación:', navBar); 

    function toggleMenu() {
        if (navBar) {
            navBar.classList.toggle('active');
            // **Añade esta línea para depuración:**
            console.log('Clase activa alternada. Estado actual:', navBar.classList.contains('active'));
        }
    }

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});