// Function to toggle the side panel
function togglePanel() {
    const sidePanel = document.getElementById("sidePanel");
    const toggleButton = document.querySelector(".three-dots-container");
    const isOpen = sidePanel.style.left === "0px";

    if (isOpen) {
        sidePanel.style.left = "-250px"; // Close the panel
        toggleButton.classList.remove("open");
    } else {
        sidePanel.style.left = "0px"; // Open the panel
        toggleButton.classList.add("open");
    }
}

// Function to toggle Exams dropdown
function toggleExamDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Function to toggle RPSC dropdown
function toggleRPSCDropdown() {
    const rpscDropdown = document.querySelector(".rpsc-dropdown");
    rpscDropdown.style.display = rpscDropdown.style.display === "block" ? "none" : "block";
}

// Function to toggle RSSB dropdown
function toggleRSSBDropdown() {
    const rssbDropdown = document.querySelector(".rssb-dropdown");
    rssbDropdown.style.display = rssbDropdown.style.display === "block" ? "none" : "block";
}

// Function to fetch and display news from JSON
async function fetchNews() {
    const url = 'https://yourusername.github.io/news-website/news.json'; // Replace with your GitHub Pages URL

    try {
        const response = await fetch(url);
        const newsItems = await response.json();

        // Get the container to display news
        const newsContainer = document.getElementById('news-container');

        // Clear any existing content
        newsContainer.innerHTML = '';

        // Render each news item
        newsItems.forEach(news => {
            const newsHTML = `
                <div class="news-item">
                    <h3><a href="${news.link}" target="_blank">${news.title}</a></h3>
                    <p>${news.description}</p>
                    <small>${news.date}</small>
                </div>
            `;
            newsContainer.innerHTML += newsHTML;
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
    }
}

// Call the fetchNews function to load news on page load
fetchNews();
