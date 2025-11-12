// Embedded JavaScript for Interactivity and Responsiveness
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================
    // 1. Scroll Animation (IntersectionObserver)
    // ==========================================================
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '0px 0px -50px 0px' // Start animation a bit before it reaches the bottom
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // ==========================================================
    // 2. Clickable Cards (4 Pilar Sukses)
    // ==========================================================
    const pillarCards = document.querySelectorAll('.pillar-card');
    const pillarContents = document.querySelectorAll('.pillar-content');

    pillarCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.dataset.pillar;

            // 1. Update Card Styling (Visual Feedback)
            pillarCards.forEach(c => {
                c.classList.remove('card-active');
                c.classList.add('card-inactive');
                c.classList.add('hover:card-active'); // Re-add hover
            });
            card.classList.add('card-active');
            card.classList.remove('card-inactive');
            card.classList.remove('hover:card-active');

            // 2. Update Content (Show/Hide)
            pillarContents.forEach(content => {
                content.classList.add('hidden');
            });

            const targetContent = document.getElementById(`content-${targetId}`);
            if (targetContent) {
                // Apply a brief fade effect on the new content
                const container = document.getElementById('pillar-content-container');
                container.style.opacity = 0;
                setTimeout(() => {
                    targetContent.classList.remove('hidden');
                    container.style.opacity = 1;
                    container.style.transition = 'opacity 0.5s ease-in-out';
                }, 100);
            }
        });
    });

    // ==========================================================
    // 3. Carousel/Slider (Inspiring Voices)
    // ==========================================================
    window.scrollCarousel = function(direction) {
        const carousel = document.getElementById('carousel');
        // Get the width of one item + its right margin (6 * 4 = 24px)
        const scrollAmount = carousel.children[0].offsetWidth + 24;

        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };

    // ==========================================================
    // 4. Mobile Menu Toggle
    // ==========================================================
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
