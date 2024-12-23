// Function to toggle the sliding panel and animate the hamburger icon
function togglePanel() {
    const panel = document.getElementById('sidePanel');
    const threeDotsBtn = document.querySelector('.three-dots-btn');
    const currentLeft = panel.style.left;
    
    // If the panel is hidden (off-screen), show it
    if (currentLeft === '' || currentLeft === '-250px') {
        panel.style.left = '0'; // Slide it in from the left
        threeDotsBtn.classList.add('open'); // Add class to animate the hamburger icon
    } else {
        panel.style.left = '-250px'; // Slide it back off the left
        threeDotsBtn.classList.remove('open'); // Remove class to reset hamburger icon
    }
}

// Function to toggle the Exams dropdown (on click)
function toggleExamDropdown() {
    const examDropdown = document.querySelector('.dropdown-content');
    examDropdown.style.display = (examDropdown.style.display === 'block') ? 'none' : 'block';
}

// Function to toggle the RPSC dropdown (on click)
function toggleRPSCDropdown() {
    const rpscDropdown = document.querySelector('.rpsc-dropdown');
    rpscDropdown.style.display = (rpscDropdown.style.display === 'block') ? 'none' : 'block';
}

// Close the sidebar if the user clicks outside of it
document.addEventListener('click', function(event) {
    const panel = document.getElementById('sidePanel');
    const threeDotsBtn = document.querySelector('.three-dots-btn');
    const sidebar = panel.contains(event.target); // Check if the click is inside the sidebar
    const hamburger = threeDotsBtn.contains(event.target); // Check if the click is on the hamburger icon

    // If the click is outside the sidebar and not on the hamburger icon, close the sidebar
    if (!sidebar && !hamburger) {
        panel.style.left = '-250px'; // Close the sidebar
        threeDotsBtn.classList.remove('open'); // Reset the hamburger icon
    }
});
