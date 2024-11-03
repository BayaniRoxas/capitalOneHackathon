// Intersection Observer to trigger fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);  // Optional: Stop observing once animated
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => observer.observe(element));
