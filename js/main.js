// Store scroll position when clicking on service cards
document.addEventListener('DOMContentLoaded', function() {
    // Handle scroll position restoration from service pages
    if (window.location.hash.startsWith('#scroll=')) {
        const scrollPos = window.location.hash.replace('#scroll=', '');
        window.scrollTo(0, parseInt(scrollPos, 10));
        // Clean up the URL
        history.replaceState(null, null, window.location.pathname);
    }
    
    // Store scroll position before navigating to service pages
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            sessionStorage.setItem('indexScrollPosition', window.scrollY);
        });
    });
});

// Navigation slider and active section tracking
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const navSlider = document.querySelector('.nav-slider');
    const container = document.querySelector('.bottom-nav-content');
    const sections = document.querySelectorAll('main > section');
    
    function updateSliderPosition(item) {
        if (!item || !container) return;
        
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const left = itemRect.left - containerRect.left;
        const width = itemRect.width;
        
        navSlider.style.left = left + 'px';
        navSlider.style.width = width + 'px';
        
        navItems.forEach(navItem => {
            navItem.style.color = '#000';
        });
        
        if (item) {
            item.style.color = '#ffffff';
        }
    }
    
    function updateActiveSection() {
        let currentSection = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
        
        if (!currentSection) {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    currentSection = section.id;
                }
            });
        }
        
        if (currentSection) {
            navItems.forEach(item => {
                if (item.href.includes(currentSection)) {
                    updateSliderPosition(item);
                }
            });
        }
    }
    
    if (navItems.length > 0) {
        updateSliderPosition(navItems[0]);
    }
    
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            updateSliderPosition(this);
        });
    });
    
    container.addEventListener('mouseleave', function() {
        updateActiveSection();
    });
    
    window.addEventListener('resize', function() {
        updateActiveSection();
    });
});

// Email protection
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        const user = link.getAttribute('data-user');
        const domain = link.getAttribute('data-domain');
        if (user && domain) {
            link.href = 'mailto:' + user + '@' + domain;
            link.addEventListener('click', function(e) {
                // Email link is now functional
            });
        }
    });
});
