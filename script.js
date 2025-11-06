// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Scroll effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add sparkle effects when section becomes visible
            if (entry.target.id === 'students' || entry.target.id === 'teachers') {
                addSparkleEffects(entry.target);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');
    
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image modal functionality
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', function() {
        const card = this.closest('.card');
        const studentName = card.querySelector('h3').textContent;
        const studentInfo = card.dataset.info || 'Proud member of the 8A family!';
        
        modalImage.src = this.src;
        modalImage.alt = this.alt;
        modalName.textContent = studentName;
        modalInfo.textContent = studentInfo;
        
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', function() {
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Content loading animation
setTimeout(() => {
    document.querySelectorAll('section').forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
}, 500);

// Floating elements animation
document.querySelectorAll('.floating-element').forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Add sparkle effects to elements
function addSparkleEffects(container) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(sparkle);
    }
}

// Add interactive effects to day cells
document.querySelectorAll('.day-cell').forEach(day => {
    day.addEventListener('mouseenter', function() {
        this.style.color = getRandomColor();
    });
    
    day.addEventListener('mouseleave', function() {
        setTimeout(() => {
            this.style.color = '';
        }, 1000);
    });
});

// Helper function for random colors
function getRandomColor() {
    const colors = ['#1e88e5', '#e91e63', '#ff9800', '#4caf50', '#9c27b0', '#00bcd4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add periodic animations to stats cards
setInterval(() => {
    document.querySelectorAll('.stat-card').forEach(card => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
    });
}, 5000);