document.addEventListener("DOMContentLoaded", function () {

    // Handling Registration Form Submission
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get user input values
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user to array
            users.push({ name, email, contact, address });

            // Store updated users array in localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset the form
            form.reset();

            alert("User Registered Successfully!");
        });
    }

    // Display Users in View Page
    const userTableBody = document.getElementById("userTableBody");
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});
