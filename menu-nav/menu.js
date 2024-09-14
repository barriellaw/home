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
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.querySelector('.toggle-btn')
    if (navbar) {
        navbar.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-btn');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }

    toggleButton.setAttribute('aria-expanded', false);
})