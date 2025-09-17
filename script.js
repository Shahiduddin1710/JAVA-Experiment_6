function showMessage() {
  const message = document.getElementById("message");
  message.innerText = "Thank you for choosing EduLearn Hub!";
  message.style.color = "#007acc";
  message.style.fontWeight = "bold";
  message.style.marginTop = "10px";
}

function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    message.innerText = "Successfully subscribed with " + email;
    message.style.color = "green";
    message.style.fontWeight = "bold";
  } else {
    message.innerText = "Please enter a valid email address.";
    message.style.color = "red";
    message.style.fontWeight = "bold";
  }
}

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("emailContact").value.trim();
      const messageBox = document.getElementById("messageBox").value.trim();
      const response = document.getElementById("contactResponse");

      if (name && email && messageBox) {
        response.innerText = "Thank you, " + name + ". We will contact you soon!";
        response.style.color = "green";
        response.style.fontWeight = "bold";
        form.reset();
      } else {
        response.innerText = "All fields are required.";
        response.style.color = "red";
        response.style.fontWeight = "bold";
      }
    });
  }
});
