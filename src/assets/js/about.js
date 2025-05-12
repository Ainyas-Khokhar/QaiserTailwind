
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

