// NAVBAR
const menubutton = document.querySelector('#navbar-toggle');
const mobileMenu = document.querySelector('#mobile-menu');


// Add click event listener to the menu button
menubutton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
   
});
// Mobile dropdown
const dropdowns = [
    { button: '#services', dropdown: '#services-dropdown' },
    { button: '#projects', dropdown: '#projects-dropdown' },
    { button: '#company', dropdown: '#company-dropdown' }
];

dropdowns.forEach(({ button, dropdown }) => {
    const btnElement = document.querySelector(button);
    const dropdownElement = document.querySelector(dropdown);

    btnElement.addEventListener('click', () => {
        dropdownElement.classList.toggle('hidden');
    });
});

window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    if (window.scrollY > 10) {
        navbar.classList.add("shadow-md");
    } else {
        navbar.classList.remove("shadow-md");
    }
});

 