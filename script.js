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

// Function to fetch and display news from the JSON file
function fetchNews() {
    // URL of the news.json file (update this URL based on your GitHub Pages link)
    const newsUrl = "https://raw.githubusercontent.com/yourusername/job-news-website/main/news.json";

    fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.querySelector(".content-box"); // The container where news will be displayed
            newsContainer.innerHTML = ''; // Clear previous news content

            data.forEach(newsItem => {
                // Create a news element for each item
                const newsElement = document.createElement("div");
                newsElement.classList.add("news-item");

                newsElement.innerHTML = `
                    <h3>${newsItem.title}</h3>
                    <p><strong>Date:</strong> ${newsItem.date}</p>
                    <p>${newsItem.description}</p>
                    <a href="${newsItem.link}" target="_blank">Read more</a>
                `;

                // Append the news item to the container
                newsContainer.appendChild(newsElement);
            });
        })
        .catch(error => {
            console.error("Error fetching news:", error);
        });
}

// Call the fetchNews function when the page loads
window.onload = fetchNews;
