const colorText = document.getElementById("color-text"); // Text input
const colorPicker = document.getElementById("color-input"); // Color picker
const generateButton = document.getElementById("generate-button");
const previewColor = document.getElementById("preview-color");
const backgroundPreviewColor = document.getElementById(
  "background-preview-color"
);

// Function to update preview color
function updatePreviewColor(color) {
  console.log("Selected Color:", color); // Debugging output

  if (color) {
    previewColor.style.backgroundColor = color; // Update preview box color
    backgroundPreviewColor.style.backgroundColor = color; // Update background color
    colorText.value = color; // Sync text input with color picker
    colorPicker.value = color; // Sync color picker with text input (if valid hex)
  } else {
    alert("Please enter a valid color name or hex code.");
  }
}

// Handle text input changes
colorText.addEventListener("input", () => {
  updatePreviewColor(colorText.value.trim());
});

// Handle color picker changes
colorPicker.addEventListener("input", () => {
  updatePreviewColor(colorPicker.value);
});

// Handle button click
generateButton.addEventListener("click", () => {
  updatePreviewColor(colorText.value.trim());
});
