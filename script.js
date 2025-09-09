// Part 2: JavaScript Functions - Scope, Parameters & Return Values
// Demonstrating global vs. local scope
let globalVariable = "I am a global variable.";

function showScope() {
  let localVariable = "I am a local variable.";
  console.log("From inside showScope():");
  console.log("Local variable:", localVariable); // This works
  console.log("Global variable:", globalVariable); // This also works
}

function anotherFunction() {
  console.log("From inside anotherFunction():");
  console.log("Local variable:", localVariable); // This would cause a ReferenceError
  console.log("Global variable:", globalVariable); // This works
}

// Function with parameters and a return value
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Event listener for the calculation button
document.getElementById("calculate-button").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = addNumbers(num1, num2); // Call the function with parameters
    document.getElementById("result-text").textContent = `The sum is: ${sum}`;
  } else {
    document.getElementById("result-text").textContent =
      "Please enter valid numbers.";
  }
});

// Event listener for the scope button
document.getElementById("scope-button").addEventListener("click", () => {
  showScope();
  anotherFunction();
});

// Part 3: Combining CSS Animations with JavaScript
const modalContainer = document.getElementById("modal-container");
const showModalButton = document.getElementById("show-modal-button");
const closeModalButton = document.getElementById("close-modal-button");

// Function to trigger the modal's animation
function toggleModal(action) {
  if (action === "show") {
    modalContainer.style.display = "flex";
    modalContainer.classList.add("slide-in");
  } else if (action === "hide") {
    modalContainer.classList.remove("slide-in");
    modalContainer.classList.add("slide-out");
    // Wait for the animation to finish before hiding the element
    setTimeout(() => {
      modalContainer.style.display = "none";
      modalContainer.classList.remove("slide-out");
    }, 500); // Duration matches the CSS animation duration
  }
}

// Event listeners to trigger the modal animation
showModalButton.addEventListener("click", () => {
  toggleModal("show");
});

closeModalButton.addEventListener("click", () => {
  toggleModal("hide");
});
