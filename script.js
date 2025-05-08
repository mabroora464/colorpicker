const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
const body = document.body; // Reference to the body element

function updateColors(color) {
    // Update the hex code display
    colorCode.textContent = color.toUpperCase();
    
    // Change the background color of the body
    body.style.backgroundColor = color;
}

// Event listener for color input change
colorPicker.addEventListener("input", (e) => {
    updateColors(e.target.value);
});

// Initialize with default color
updateColors(colorPicker.value);
