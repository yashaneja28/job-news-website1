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

// Fetch the news from the JSON file
const newsUrl = "https://raw.githubusercontent.com/yashaneja28/job-news-website1/main/news.json";  // Updated URL

fetch(newsUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load news');
        }
        return response.json();
    })
    .then(data => {
        const newsContainer = document.querySelector('.content-box');
        
        // Loop through each news item and create HTML content
        data.forEach(newsItem => {
            const newsElement = document.createElement('div');
            newsElement.classList.add('news-item');
            
            newsElement.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p><strong>Date:</strong> ${newsItem.date}</p>
                <p>${newsItem.description}</p>
                <a href="${newsItem.link}" target="_blank">Read more</a>
            `;
            
            // Append to the content box
            newsContainer.appendChild(newsElement);
        });
    })
    .catch(error => {
        const newsContainer = document.querySelector('.content-box');
        newsContainer.innerHTML = `<p class="error-message">${error.message}</p>`;
    });
