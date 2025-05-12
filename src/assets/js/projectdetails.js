
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