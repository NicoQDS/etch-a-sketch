let dimGrid = 16
const gridContainer = document.querySelector("#grid-container");
const btnSetGrid = document.getElementById('btn-set-grid');
btnSetGrid.addEventListener("click", () => populContGrid(getNumberFromUser()));

function populContGrid(n) {
  gridContainer.innerHTML = ''; // It clears any divs that were previously appended by an earlier call to populContGrid.
  for (let r = 0; r < n; r++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let c = 0; c < n; c++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      setupHoverEffect(cell, getRandomColor())
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}

function setupHoverEffect(div, hoverColor) {
  // When the mouse enters, apply the hover color
  div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = hoverColor;
  });
}

// Prompts the user to enter a number between 2 and 100. Keeps asking until a valid number is provided.
function getNumberFromUser() {
  while (true) {
    // Ask the user for input and store it as a string
    const input = prompt("Please enter a number between 2 and 100:");

    // If the user clicked Cancel, prompt() returns null — stop the loop
    if (input === null) {
      console.log("User cancelled the input.");
      return null;
    }

    // Convert the string input to a floating-point number
    const number = parseFloat(input);

    // Check that it's actually a number (not letters/symbols)
    // and that it falls within the valid range [2, 100]
    if (!isNaN(number) && number >= 2 && number <= 100) {
      return number; // Valid input — exit the loop and return the value
    }

    // If we reach here, the input was invalid — notify the user and loop again
    alert("Invalid input. Please enter a number between 2 and 100.");
  }
}

populContGrid(dimGrid)

//Extra credits

function getRandomColor() {
  // Math.random() gives 0–1, multiplied by 0xFFFFFF (16777215) covers all hex colors
  // Math.floor() removes decimals, toString(16) converts to hex
  // padStart ensures the result is always 6 characters (e.g. "00a1f3")
  return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
}