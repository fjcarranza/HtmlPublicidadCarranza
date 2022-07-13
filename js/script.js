console.log('Hola Fer');
const menuResponsiveElement=document.getElementById('menu-responsive');
const headerMenuElement=document.getElementById('header-menu');

menuResponsiveElement.addEventListener('click', () => {
    headerMenuElement.classList.toggle('header-menu--show');
});