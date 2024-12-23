function togglePanel() {
    const sidePanel = document.getElementById("sidePanel");
    const currentLeft = sidePanel.style.left;

    if (currentLeft === "0px") {
        sidePanel.style.left = "-250px";  // Close panel
    } else {
        sidePanel.style.left = "0px";  // Open panel
    }
}

function toggleExamDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function toggleRPSCDropdown() {
    const rpscDropdown = document.querySelector(".rpsc-dropdown");
    rpscDropdown.style.display = rpscDropdown.style.display === "block" ? "none" : "block";
}
