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
})

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (navbar && toggleBtn) {
        navbar.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        menuOverlay.classList.toggle('visible');

        const isExpanded = toggleBtn.classList.contains('active');
        toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    }
}


document.querySelectorAll('#nav-items a').forEach(link => {
    link.addEventListener('click', function() {
    const menu = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-btn');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggleButton.classList.remove('active');
    }
    
    toggleButton.setAttribute('aria-expanded', false);

    });

});

window.addEventListener("pageshow", function () {
    const menu = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-btn');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggleButton.classList.remove('active');
    }

    toggleButton.setAttribute('aria-expanded', false);
});

    // Store the original title
    const originalTitle = document.title;

    // Set up an event listener for visibility change
    document.addEventListener("visibilitychange", function() {
      // Check if the page is hidden
      if (document.hidden) {
        // Change the title when the page is hidden
        document.title = "Hurry, codes are not writing itself!";
      } else {
        // Revert to the original title when the page is visible again
        document.title = originalTitle;
      }
    });