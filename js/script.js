// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuIcon && navLinks) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-icon')) {
                navLinks.classList.remove('active');
            }
        });
    }
});

// Dish Card Expansion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.dish-card');
    const overlay = document.querySelector('.overlay');

    if (cards.length > 0 && overlay) {
        cards.forEach(card => {
            card.addEventListener('click', function() {
                if (!this.classList.contains('expanded')) {
                    this.classList.add('expanded');
                    overlay.classList.add('active');
                }
            });

            const closeButton = card.querySelector('.close-button');
            if (closeButton) {
                closeButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    card.classList.remove('expanded');
                    overlay.classList.remove('active');
                });
            }
        });

        overlay.addEventListener('click', function() {
            const expandedCard = document.querySelector('.dish-card.expanded');
            if (expandedCard) {
                expandedCard.classList.remove('expanded');
                overlay.classList.remove('active');
            }
        });
    }
}); 