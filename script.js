document.getElementById("add-more-btn").addEventListener("click", function () {
  // Create a new div with the same styling as other form-group-right divs
  var newField = document.createElement("div");
  newField.classList.add("form-group-right");

  // Create a new input field inside the new div
  var newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.classList.add("form-control", "text-center");
  newInput.setAttribute("placeholder", "Additional Field");

  // Append the input to the new div
  newField.appendChild(newInput);

  // Append the new div to the right-section
  document
    .getElementById("right-section")
    .insertBefore(newField, document.getElementById("add-more-btn"));
});

// Function to add a new input field dynamically when "Add more" is clicked

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto"; // Reset height to auto
  textarea.style.height = textarea.scrollHeight + "px"; // Set height based on scrollHeight
}

// Attach the function to all textareas that need auto-resizing
document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.setAttribute("style", "height:auto;overflow-y:hidden;"); // Initial style
  textarea.addEventListener("input", function () {
    autoResizeTextarea(this); // Call the function on input event
  });
});


function formatDate() {
    const dateInput = document.getElementById('dateInput').value;
    const datediv = document.getElementById('dateInput');
    const formattedDateDisplay = document.getElementById('formattedDate');

    if (dateInput) {
      const date = new Date(dateInput);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      
      // Format the date as "DD, Month, YYYY"
      formattedDateDisplay.innerText = `${day}, ${month}, ${year}`;
      datediv.style.display = 'none';
    }
  }


  document.getElementById("add-more-inputs").addEventListener("click", function () {
    // Create a new div with the same structure for the input field
    var newField = document.createElement("div");
    newField.classList.add("form-group", "col-10", "ms-auto", "d-flex", "justify-content-center", "align-items-center");

    // Create a new bullet point span
    var newBullet = document.createElement("span");
    newBullet.classList.add("mx-1");
    newBullet.innerHTML = "&#8226;"; // Bullet point character

    // Create a new input field
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.classList.add("form-control");
    newInput.setAttribute("placeholder", "Additional Input field");

    // Append the bullet and input field to the new div
    newField.appendChild(newBullet);
    newField.appendChild(newInput);

    // Append the new field to the input container
    document.getElementById("input-container").appendChild(newField);
  });