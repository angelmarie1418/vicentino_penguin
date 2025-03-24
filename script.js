function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '20px';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.querySelector(".hero-image");

    function showHeroImage() {
        if (heroImage) {
            heroImage.classList.add("show");
        }
    }

    // Delay to make the animation smoother
    
    setTimeout(showHeroImage, 500);
});

function showLoading(button) {
    button.classList.add("loading");
    button.innerHTML = '<i class="fas fa-spinner"></i> Loading...';

    setTimeout(() => {
        button.classList.remove("loading");
        button.innerHTML = '<i class="fas fa-arrow-right"></i> Get Started';
        window.location.href = "#services";
    }, 2000); // Simulating loading for 2 seconds
}

function toggleDetails(button) {
    const details = button.previousElementSibling; // Get the hidden text
    details.classList.toggle("hidden");

    // Change button text based on state
    button.innerText = details.classList.contains("hidden") ? "View More" : "View Less";
}

