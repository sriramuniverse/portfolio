// Simple alert for joining the club
document.getElementById('joinBtn').addEventListener('click', function() {
    alert('Thank you for your interest! We will contact you soon to join the Green Club.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

