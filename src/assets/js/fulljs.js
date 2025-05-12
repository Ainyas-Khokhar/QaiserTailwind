// NAVBAR -----------start

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
// NAvbar -----------END

// HOME PAGE---------- START------

// FAQS
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button[aria-expanded]");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const content = button.nextElementSibling;
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            // Collapse all other buttons and their content
            buttons.forEach(btn => {
                const otherContent = btn.nextElementSibling;
                if (btn !== button) {
                    btn.setAttribute("aria-expanded", "false");
                    otherContent.style.maxHeight = "0";  // Collapse the other sections
                    btn.classList.remove("bg-primary", "text-white");
                    const otherIcon = btn.querySelector("i");
                    otherIcon.classList.replace("fa-minus", "fa-plus");
                    otherIcon.classList.remove("text-white");
                }
            });

            // Toggle aria-expanded for the clicked button
            button.setAttribute("aria-expanded", !isExpanded);

            // Toggle max height for the content
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";  // Expand the clicked section
            } else {
                content.style.maxHeight = "0";  // Collapse the clicked section
            }

            // Toggle Tailwind background and text color for the button and icon
            button.classList.toggle("bg-primary");  // Change background to primary
            button.classList.toggle("text-white");  // Change text color to white

            const icon = button.querySelector("i");
            icon.classList.toggle("text-white");  // Change icon color to white
            if (isExpanded) {
                icon.classList.replace("fa-minus", "fa-plus");  // Change back to plus
            } else {
                icon.classList.replace("fa-plus", "fa-minus");  // Change to minus
            }
        });
    });

    // Automatically click the first button
    if (buttons.length > 0) {
        buttons[0].click();  // Click the first button
    }
});

// Slider
var swiper = new Swiper(".centered-slide-carousel", {
    centeredSlides: true, // Center the active slide
    paginationClickable: true, // Enable pagination clicks
    loop: true, // Enable infinite looping
    spaceBetween: 30, // Space between slides
    slideToClickedSlide: true, // Allow clicking to slide to that slide
    pagination: {
        el: ".centered-slide-carousel .swiper-pagination", // Pagination element
        clickable: true, // Clickable pagination
    },
    autoplay: {
        delay: 1300, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
        1028: {
            slidesPerView: 2, // Show 2 slides on medium screens
            spaceBetween: 50,
        },
        990: {
            slidesPerView: 1, // Show 1 slide on smaller screens
            spaceBetween: 0,
        }
    }
});

// HOME PAGE-----------END

// ABOUT US------------START--------

document.addEventListener("DOMContentLoaded", function () {
    // Function to animate the counting
    function animateCount(target, start, end, duration) {
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const increment = Math.min(Math.ceil((progress / duration) * end), end);
            target.textContent = increment;

            if (increment < end) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }

    // Animation settings
    const animationDuration = 2000; // Duration in milliseconds

    // Target elements
    const projectCompleted = document.querySelector("#project-completed");
    const happyClients = document.querySelector("#happy-clients");
    const workersEmployed = document.querySelector("#workers-employed");
    const awardsWon = document.querySelector("#awards-won");

    // Start animations
    animateCount(projectCompleted, 0, 200, animationDuration);
    animateCount(happyClients, 0, 200, animationDuration);
    animateCount(workersEmployed, 0, 200, animationDuration);
    animateCount(awardsWon, 0, 12, animationDuration);
});

// ABOUT US--------------END

// PROJECTDETAIL ----------------START

const buttons = document.querySelectorAll('.service-btn');
const tabContents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Hide all tab content
        tabContents.forEach(tab => tab.classList.add('hidden'));
        
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('bg-secondary', 'text-white'));

        // Show the clicked tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.remove('hidden');

        // Add active class to the clicked button
        this.classList.add('bg-secondary', 'text-white');
    });
});

// Programmatically click the first button to show initial content
if (buttons.length > 0) {
    buttons[0].click(); 
}
// PROJECTDETAIL ---------------END


 


