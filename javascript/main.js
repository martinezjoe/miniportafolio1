// --------------------------------------------
//  Filters tabs 

const tabs = document.querySelectorAll('[data-target]');

const tabContents =  document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
    
        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });

        target.classList.add('filters__active');

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active');
        });

        tab.classList.add('filter-tab-active');

    });
})


// -------------------------------------------------

// Cambiar tema oscuro / claro 

// Tema oscuro 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previamente se selecciona el tipo 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtenemos el tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validamos si el usario ha usado un tema previamente
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

// Activamos y desactivamos el tema, presionando el boton

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


// ------------------------------------------------------

// Animacion Scroll Reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

});

sr.reveal(`.profile__perfil-container`);
sr.reveal(`.profile__name`, {delay:500});
sr.reveal(`.profile__profession`, {delay:600});
sr.reveal(`.profile__social`, {delay:700});
sr.reveal(`.profile__info-group`, {interval:100, delay:700});
sr.reveal(`.profile__buttons`, {delay: 800});
sr.reveal(`.filters__content`, {delay: 900});
sr.reveal(`.filters`, {delay: 1000});







// sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'});
// sr.reveal(`.new__card, .brand__img`, {interval: 100});
// sr.reveal(`.collection__explore:nth-child(1)`, {origin:  'right'});
// sr.reveal(`.collection__explore:nth-child(2)`, {origin:  'left'});
// sr.reveal(`.footer`, {origin:  'bottom'});
