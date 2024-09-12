function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function showMobileWarning() {
    if (isMobile()) {
        document.getElementById('mobile-warning-popup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('mobile-warning-popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    showMobileWarning();
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active');
};


///form script//
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("my-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Clear the form
                document.getElementById("form-response").innerHTML = "Thank you! Your message has been sent.";
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        document.getElementById("form-response").innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        document.getElementById("form-response").innerHTML = "Oops! There was a problem submitting your form.";
                    }
                });
            }
        }).catch(error => {
            document.getElementById("form-response").innerHTML = "Oops! There was a problem submitting your form.";
        });
    });
});