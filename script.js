// Get references to HTML elements with IDs 'boxes' and 'btn'
const gridContainer = document.getElementById('boxes');
const toggleButton = document.getElementById('btn');

// Add an event listener to the toggleButton
// When the button is clicked, toggle the 'big' class on the gridContainer element
toggleButton.addEventListener('click', () => gridContainer.classList.toggle('big'));

// Function to create a grid of boxes and add them to the gridContainer
function createBoxes() {
  // Loop to create a 4x4 grid of boxes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Create a new div element for each box
      const box = document.createElement('div');
      // Add the 'box' class to the new div
      box.classList.add('box');
      // Set the background image to the GIF and adjust the position based on grid
      box.style.backgroundImage = "url('https://giphy.com/embed/NfzERYyiWcXU4.gif')";
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // Append the box to the gridContainer
      gridContainer.appendChild(box);
    }
  }
}

// Call the createBoxes function to generate and display the boxes when the script runs
createBoxes();