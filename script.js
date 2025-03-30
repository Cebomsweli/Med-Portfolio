// Smooth Navigation & Section Switching
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links & sections
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link & corresponding section
            link.classList.add('active');
            const target = link.getAttribute('href');
            document.querySelector(target).classList.add('active');
            
            // Smooth scroll (optional)
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
     // Tracking people who visits the site
     function trackDownload() {
        // Visual feedback
        const btn = document.getElementById('download-btn');
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 300);
        
        // Google Analytics tracking
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': 'Download CV',
            'value': 1
        });
        
        // Actual download functionality
        const link = document.createElement('a');
        link.href = 'path/to/your-cv.pdf'; // Update this path
        link.download = 'Andiswa_Mfuyi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // Highlight current section in nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});