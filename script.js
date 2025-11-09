// Smooth scrolling for navigation links with enhanced effects
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Add ripple effect to the clicked link
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
        
        // Enhanced scroll with additional effects
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Add special effect when reaching target section
        setTimeout(() => {
            targetSection.classList.add('highlight-section');
            setTimeout(() => {
                targetSection.classList.remove('highlight-section');
            }, 2000);
        }, 800);
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
            
            // Add staggered animation for cards
            if (entry.target.id === 'students' || entry.target.id === 'teachers' || entry.target.id === 'leaders') {
                const cards = entry.target.querySelectorAll('.card, .teacher-card, .leader-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('stagger-item', 'visible');
                    }, index * 100);
                });
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

// Function to open modal for students
function openStudentModal(img, name, info) {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalName.textContent = name;
    modalInfo.textContent = info;
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        imageModal.classList.add('loaded');
    }, 50);
}

// Add click event to student cards
document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const name = card.querySelector('h3').textContent;
    const info = card.getAttribute('data-info') || 'Proud member of the 8A family!';
    
    card.addEventListener('click', function() {
        openStudentModal(img, name, info);
    });
});

// Add click event to teacher cards
document.querySelectorAll('.teacher-card').forEach(card => {
    const img = card.querySelector('img');
    const name = card.getAttribute('data-teacher') || card.querySelector('h3').textContent;
    const info = card.getAttribute('data-info') || 'Amazing teacher at 8A!';
    
    card.addEventListener('click', function() {
        openStudentModal(img, name, info);
    });
});

// Close modal
closeModal.addEventListener('click', function() {
    imageModal.classList.remove('active', 'loaded');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        imageModal.classList.remove('active', 'loaded');
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
    // Remove existing sparkles
    const existingSparkles = container.querySelectorAll('.sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Add new sparkles
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.width = `${Math.random() * 10 + 5}px`;
        sparkle.style.height = sparkle.style.width;
        container.appendChild(sparkle);
    }
}

// تأثيرات محسنة للجدول
function enhanceScheduleTable() {
    // تأثيرات لخلايا الأيام
    document.querySelectorAll('.day-cell').forEach(day => {
        day.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(30, 136, 229, 0.2), rgba(100, 181, 246, 0.3))';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 12px rgba(30, 136, 229, 0.3)';
        });
        
        day.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.style.background = '';
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 300);
        });
    });
    
    // تأثيرات للمواد الدراسية مع ألوان مختلفة
    document.querySelectorAll('.subject').forEach(subject => {
        // تأثيرات hover للمواد
        subject.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 6px 18px rgba(30, 136, 229, 0.3)';
            this.style.fontWeight = '600';
        });
        
        subject.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.fontWeight = '';
        });
        
        // تأثير النقر على المادة
        subject.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // إظهار معلومات إضافية عن المادة
            showSubjectInfo(this.textContent, this.className);
        });
    });
    
    // تأثيرات للرأس
    document.querySelectorAll('.schedule-table th').forEach(header => {
        header.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, var(--primary-light), var(--primary))';
            this.style.letterSpacing = '1px';
        });
        
        header.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
            this.style.letterSpacing = '';
        });
    });
}

// دالة لعرض معلومات المادة - محسنة
function showSubjectInfo(subjectName, className) {
    const subjectInfo = {
        'Math': '📐 Mathematics - Developing logical thinking and problem-solving skills',
        'English': '🔤 English Language - Improving communication and writing skills',
        'Arabic': '📖 Arabic Language - Mastering our beautiful native language',
        'Science': '🔬 Science - Exploring the wonders of nature and technology',
        'Art': '🎨 Arts - Unleashing creativity and artistic expression',
        'Religion': '🕌 Religion - Building spiritual and moral foundation',
        'Business': '💼 Entrepreneurship - Learning business and leadership skills',
        'French': '🇫🇷 French Language - Discovering the language of love and culture',
        'German': '🇩🇪 German Language - Learning the language of innovation',
        'ICT': '💻 ICT - Digital skills for the future world',
        'Social Studies': '🌍 Social Studies - Understanding society and history',
        'Activity 1': '⚽ Activity - Sports and physical education for health',
        'Activity 2': '⚽ Activity - Sports and physical education for health'
    };
    
    // استخراج اسم المادة الأساسي من الكلاسات والنص
    let mainSubject = subjectName;
    if (className.includes('math') || subjectName.toLowerCase().includes('math')) mainSubject = 'Math';
    else if (className.includes('english') || subjectName.toLowerCase().includes('english')) mainSubject = 'English';
    else if (className.includes('arabic') || subjectName.toLowerCase().includes('arabic')) mainSubject = 'Arabic';
    else if (className.includes('science') || subjectName.toLowerCase().includes('science')) mainSubject = 'Science';
    else if (className.includes('art') || subjectName.toLowerCase().includes('art')) mainSubject = 'Art';
    else if (className.includes('religion') || subjectName.toLowerCase().includes('religion')) mainSubject = 'Religion';
    else if (className.includes('entrepreneurship') || subjectName.toLowerCase().includes('business')) mainSubject = 'Business';
    else if (className.includes('french') || subjectName.toLowerCase().includes('french')) mainSubject = 'French';
    else if (className.includes('german') || subjectName.toLowerCase().includes('german')) mainSubject = 'German';
    else if (className.includes('ict') || subjectName.toLowerCase().includes('ict')) mainSubject = 'ICT';
    else if (className.includes('social-studies') || subjectName.toLowerCase().includes('social')) mainSubject = 'Social Studies';
    else if (className.includes('activity') || subjectName.toLowerCase().includes('activity')) mainSubject = subjectName;
    
    const info = subjectInfo[mainSubject] || subjectInfo[subjectName] || `📚 Learning ${subjectName}`;
    
    // إنشاء نافذة معلومات صغيرة
    const infoElement = document.createElement('div');
    infoElement.className = 'subject-tooltip';
    infoElement.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.1rem;">${subjectName}</div>
        <div style="font-size: 0.9rem; opacity: 0.9;">${info}</div>
    `;
    infoElement.style.cssText = `
        position: fixed;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        font-size: 0.9rem;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        animation: fadeInOut 2.5s ease-in-out;
        max-width: 280px;
        text-align: center;
        line-height: 1.4;
        border: 2px solid rgba(255,255,255,0.2);
    `;
    
    document.body.appendChild(infoElement);
    
    // وضع النافذة في مكان مناسب
    const rect = event.target.getBoundingClientRect();
    const tooltipHeight = infoElement.offsetHeight;
    const tooltipWidth = infoElement.offsetWidth;
    
    infoElement.style.top = (rect.top - tooltipHeight - 10) + 'px';
    infoElement.style.left = (rect.left + rect.width/2 - tooltipWidth/2) + 'px';
    
    // ضمان أن النافذة لا تخرج عن الشاشة
    const viewportWidth = window.innerWidth;
    if (parseInt(infoElement.style.left) < 10) {
        infoElement.style.left = '10px';
    }
    if (parseInt(infoElement.style.left) + tooltipWidth > viewportWidth - 10) {
        infoElement.style.left = (viewportWidth - tooltipWidth - 10) + 'px';
    }
    
    // إزالة النافذة بعد 2.5 ثانية
    setTimeout(() => {
        if (infoElement.parentNode) {
            infoElement.parentNode.removeChild(infoElement);
        }
    }, 2500);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.classList.add('compact');
    } else {
        header.classList.remove('compact');
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .highlight-section {
        animation: highlight 2s ease;
    }
    
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.7); }
        50% { box-shadow: 0 0 0 20px rgba(30, 136, 229, 0); }
        100% { box-shadow: 0 0 0 0 rgba(30, 136, 229, 0); }
    }
    
    .image-modal.loaded .modal-content {
        animation: modalPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    @keyframes modalPop {
        0% { transform: scale(0.7) rotate(-5deg); }
        50% { transform: scale(1.05) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(10px) scale(0.9); }
        20% { opacity: 1; transform: translateY(0) scale(1); }
        80% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-10px) scale(0.9); }
    }
    
    .subject-tooltip {
        pointer-events: none;
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--primary);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(30, 136, 229, 0.4);
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        background: var(--primary-dark);
        transform: translateY(-3px);
    }
`;
document.head.appendChild(style);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(function(element, index) {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.card, .teacher-card');
    cards.forEach(function(card, index) {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add initial sparkle effects
    setTimeout(() => {
        addSparkleEffects(document.getElementById('students'));
        addSparkleEffects(document.getElementById('teachers'));
    }, 1000);
    
    // Initialize schedule table effects
    enhanceScheduleTable();
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.log('Image failed to load:', this.src);
        // يمكنك إضافة صورة بديلة هنا إذا أردت
    });
    
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});