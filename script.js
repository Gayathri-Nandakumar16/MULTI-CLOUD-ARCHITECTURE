// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Get user input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill out all fields.");
        } else {
            alert(`Thank you, ${name}! We will contact you at ${email}.`);
        }
    });
});