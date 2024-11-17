document.querySelector("#signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!firstname || !lastname || !username || !email || !password) {
        alert("All fields are required!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
     try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ firstname, lastname, username, email,password }),
        });

        const result = await response.json();
        alert(result.message);
     } catch (error) {
        console.error("Error:", error);
        alert("something went wrong. Please try again")
     }
})