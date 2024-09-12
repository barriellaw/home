{
    "kind"; "calendar#calendar",
    "etag"; "\"Bu2rQUsLJIerTZB9NbQJCHfCrS8\"",
    "id"; "barriellawertheimer@gmail.com",
    "summary"; "barriellawertheimer@gmail.com",
    "timeZone"; "America/New_York",
    "conferenceProperties"; {
     "allowedConferenceSolutionTypes"; [
      "hangoutsMeet"
     ]
    }
   }
   
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
