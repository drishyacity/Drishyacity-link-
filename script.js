/**
 * DrishyaCity Landing Page - Interactive JavaScript
 * Handles animations, interactions, and dynamic effects
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

/**
 * Initialize all page functionality
 */
function initializePage() {
    // Add initial loading class
    document.body.classList.add('loading');
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize interactive effects
    initializeInteractiveEffects();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Remove loading class after initialization
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);
}

/**
 * Initialize page animations
 */
function initializeAnimations() {
    // Animate links with staggered delays
    animateLinksWithDelay();
    
    // Initialize floating shapes animation
    initializeFloatingShapes();
    
    // Initialize scroll-based animations
    initializeScrollAnimations();
    
    // Initialize typing animation
    initializeTypingAnimation();
}

/**
 * Animate links with staggered delays
 */
function animateLinksWithDelay() {
    const links = document.querySelectorAll('.link-button');
    
    links.forEach((link, index) => {
        const delay = parseFloat(link.dataset.delay) || (index * 0.15 + 3);
        
        // Set initial state
        link.style.opacity = '0';
        link.style.transform = 'translateY(50px) scale(0.8) rotateX(15deg)';
        
        // Animate with delay
        setTimeout(() => {
            link.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        }, delay * 1000);
    });
}

/**
 * Initialize floating shapes animation
 */
function initializeFloatingShapes() {
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
    });
}

/**
 * Initialize scroll-based animations
 */
function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('.bio-section, .footer');
    elementsToObserve.forEach(el => observer.observe(el));
}

/**
 * Initialize typing animation for feature text
 */
function initializeTypingAnimation() {
    const bioSection = document.querySelector('.bio-section');
    
    // Show bio section exactly when typing animation finishes
    setTimeout(() => {
        if (bioSection) {
            bioSection.classList.add('show');
            console.log('Bio section shown after typing completed');
        }
    }, 4000); // 2s delay + 2s typing = exactly when typing finishes
}

/**
 * Initialize interactive effects
 */
function initializeInteractiveEffects() {
    // Add click ripple effect
    initializeRippleEffect();
    
    // Add hover sound effects (optional)
    initializeHoverEffects();
    
    // Add keyboard navigation
    initializeKeyboardNavigation();
    
    // Add link tracking
    initializeLinkTracking();
}

/**
 * Initialize ripple effect on button clicks
 */
function initializeRippleEffect() {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initialize hover effects
 */
function initializeHoverEffects() {
    const links = document.querySelectorAll('.link-button');
    
    links.forEach(link => {
        // Add hover enter effect
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
            
            // Add glow effect
            const glow = this.querySelector('.link-glow');
            if (glow) {
                glow.style.left = '100%';
            }
        });
        
        // Add hover leave effect
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            
            // Reset glow effect
            const glow = this.querySelector('.link-glow');
            if (glow) {
                setTimeout(() => {
                    glow.style.left = '-100%';
                }, 200);
            }
        });
    });
}

/**
 * Initialize keyboard navigation
 */
function initializeKeyboardNavigation() {
    const links = document.querySelectorAll('.link-button');
    
    links.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextLink = links[index + 1];
                if (nextLink) nextLink.focus();
            }
            
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevLink = links[index - 1];
                if (prevLink) prevLink.focus();
            }
        });
    });
}

/**
 * Initialize link tracking for analytics
 */
function initializeLinkTracking() {
    const links = document.querySelectorAll('.link-button');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.querySelector('span').textContent;
            const linkUrl = this.href;
            
            // Track link click (you can integrate with analytics services)
            console.log('Link clicked:', {
                text: linkText,
                url: linkUrl,
                timestamp: new Date().toISOString()
            });
            
            // Optional: Send to analytics service
            // analytics.track('Link Clicked', { text: linkText, url: linkUrl });
        });
    });
}

/**
 * Initialize performance optimizations
 */
function initializePerformanceOptimizations() {
    // Optimize animations for better performance
    optimizeAnimations();
    
    // Lazy load non-critical resources
    lazyLoadResources();
    
    // Optimize for mobile devices
    optimizeForMobile();
}

/**
 * Optimize animations for better performance
 */
function optimizeAnimations() {
    // Use transform and opacity for better performance
    const animatedElements = document.querySelectorAll('.link-button, .floating-shape');
    
    animatedElements.forEach(element => {
        element.style.willChange = 'transform, opacity';
    });
    
    // Cleanup will-change after animations
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.style.willChange = 'auto';
        });
    }, 3000);
}

/**
 * Lazy load non-critical resources
 */
function lazyLoadResources() {
    // Lazy load images if any are added later
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Optimize for mobile devices
 */
function optimizeForMobile() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Reduce animation complexity on mobile
        const floatingShapes = document.querySelectorAll('.floating-shape');
        floatingShapes.forEach(shape => {
            shape.style.animation = 'none';
        });
        
        // Add mobile-specific classes
        document.body.classList.add('mobile-device');
    }
}

/**
 * Utility function to add custom event listener
 */
function addEventListenerOnce(element, event, callback) {
    element.addEventListener(event, callback, { once: true });
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize error handling
 */
function initializeErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        // Optional: Send error to analytics service
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled Promise Rejection:', e.reason);
        // Optional: Send error to analytics service
    });
}

// Initialize error handling
initializeErrorHandling();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePage,
        initializeAnimations,
        initializeInteractiveEffects,
        initializePerformanceOptimizations
    };
}
