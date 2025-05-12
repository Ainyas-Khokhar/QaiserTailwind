
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


// Initialize Swiper
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




 


