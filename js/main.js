// getting references
let form = document.querySelector("form");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

// event target object
let button = document.getElementById("submit-button");


// event handler
function validateForm() {
  console.clear();

  let collectFormData = {};
  let errors = [];
  let regex = /[\w-]+@([\w-]+\.)+[\w-]+/;

// validate full name
  if (fullname.value !== "") {
    collectFormData.fullname = fullname.value;
  } else {
    errors.push("Full name is missing");
  }


// validate Email

// check if email is empty

if (email.value !== "") {

  // check is email format is valid
  if (regex.test(email.value)) {
  collectFormData.email = email.value;
} else {
  errors.push("Email is invalid!");
}
} else {
  errors.push("Please enter your email!");
}

// Validate Message

if (message.value !== "") {
  collectFormData.message = message.value;
} else {
  errors.push("Message is missing!");
}

// create feedback
if (errors.length === 0) {
  console.log(collectFormData);
  form.reset();
} else {
  console.log(errors);
}

}


// validate form will listen for this click
button.addEventListener("click", validateForm);
