/**
 * Card Component - Modern card with hover effects and accessibility
 */

export class CardComponent {
    constructor(element) {
        this.element = element;
        this.dataId = element.getAttribute('data-id');
        this.init();
    }

    init() {
        this.setupAccessibility();
        this.addEventListeners();
        this.animateEntrance();
    }

    setupAccessibility() {
        this.element.setAttribute('role', 'button');
        this.element.setAttribute('tabindex', '0');
        
        const title = this.element.querySelector('.card-title');
        if (title) {
            const subtitle = this.element.querySelector('.card-subtitle');
            const label = subtitle 
                ? `${title.textContent} - ${subtitle.textContent}`
                : title.textContent;
            this.element.setAttribute('aria-label', label);
        }
    }

    addEventListeners() {
        // Mouse events
        this.element.addEventListener('mouseenter', () => this.handleMouseEnter());
        this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
        this.element.addEventListener('click', (e) => this.handleClick(e));
        
        // Keyboard events
        this.element.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Touch events
        this.element.addEventListener('touchstart', () => this.handleTouchStart(), { passive: true });
        this.element.addEventListener('touchend', () => this.handleTouchEnd(), { passive: true });
    }

    handleMouseEnter() {
        this.element.style.transform = 'scale(1.08)';
        this.element.style.zIndex = '10';
        this.element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        const background = this.element.querySelector('.card-background');
        if (background) {
            background.style.transform = 'scale(1.1)';
            background.style.filter = 'brightness(1.2) contrast(1.1)';
        }

        const content = this.element.querySelector('.card-content');
        if (content) {
            content.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)';
        }

        const title = this.element.querySelector('.card-title');
        const subtitle = this.element.querySelector('.card-subtitle');

        if (title) {
            title.style.transform = 'translateY(-4px)';
            title.style.textShadow = '0 6px 16px rgba(0, 0, 0, 0.7)';
            title.style.color = 'rgba(255, 255, 255, 1)';
        }

        if (subtitle) {
            subtitle.style.transform = 'translateY(-2px)';
            subtitle.style.opacity = '1';
            subtitle.style.textShadow = '0 3px 10px rgba(0, 0, 0, 0.7)';
            subtitle.style.color = 'rgba(255, 255, 255, 0.95)';
        }
    }

    handleMouseLeave() {
        this.element.style.transform = 'scale(1)';
        this.element.style.zIndex = '1';

        const background = this.element.querySelector('.card-background');
        if (background) {
            background.style.transform = 'scale(1)';
            background.style.filter = '';
        }

        const content = this.element.querySelector('.card-content');
        if (content) {
            content.style.background = '';
        }

        const title = this.element.querySelector('.card-title');
        const subtitle = this.element.querySelector('.card-subtitle');

        if (title) {
            title.style.transform = 'translateY(0)';
            title.style.textShadow = '';
            title.style.color = '';
        }

        if (subtitle) {
            subtitle.style.transform = 'translateY(0)';
            subtitle.style.opacity = '';
            subtitle.style.textShadow = '';
            subtitle.style.color = '';
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.animateClick();
        
        // Dispatch custom event for parent components to handle
        this.element.dispatchEvent(new CustomEvent('cardclick', {
            bubbles: true,
            detail: { cardId: this.dataId }
        }));
    }

    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick(event);
        }
    }

    handleTouchStart() {
        this.element.style.transform = 'scale(0.98)';
        this.element.style.transition = 'transform 0.1s ease';
    }

    handleTouchEnd() {
        setTimeout(() => {
            this.element.style.transform = 'scale(1)';
        }, 100);
    }

    animateClick() {
        this.element.style.transform = 'scale(0.95)';
        this.element.style.transition = 'transform 0.1s ease';

        setTimeout(() => {
            this.element.style.transform = 'scale(1)';
            this.element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 150);
    }

    animateEntrance(delay = 0) {
        this.element.style.opacity = '0';
        this.element.style.transform = 'translateY(20px) scale(0.95)';
        this.element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            this.element.style.opacity = '1';
            this.element.style.transform = 'translateY(0) scale(1)';
        }, delay);
    }

    // Static method to initialize all cards on a page
    static initializeAll(selector = '.card') {
        const cards = document.querySelectorAll(selector);
        return Array.from(cards).map((card, index) => {
            const component = new CardComponent(card);
            component.animateEntrance(index * 100);
            return component;
        });
    }
}
