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

// Voiceflow Chatbot Integration
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '67ac383cf34345f8b1850923' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
})(document, 'script');
