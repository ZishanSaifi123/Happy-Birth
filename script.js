// script.js

// Smooth scrolling to video section
function scrollToVideo() {
    document.querySelector('.video').scrollIntoView({ behavior: 'smooth' });
}

// Animating balloons in the footer
document.addEventListener('DOMContentLoaded', function () {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.left = `${index * 20}%`;
        balloon.style.animationDelay = `${index * 0.5}s`;
    });
});
