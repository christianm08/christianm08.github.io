/**
 * Main application entry point
 */
import { ThemeManager } from './utils/theme-manager.js';
import { Router } from './utils/router.js';
import { CardComponent } from './components/card.js';
import { LazyLoader } from './components/lazy-loader.js';

class App {
    constructor() {
        this.themeManager = null;
        this.router = null;
        this.lazyLoader = null;
        this.cards = [];
        
        this.init();
    }

    async init() {
        // Initialize theme manager
        this.themeManager = new ThemeManager();
        
        // Initialize lazy loader for performance
        this.lazyLoader = new LazyLoader({
            rootMargin: '100px',
            threshold: 0.01
        });
        
        // Setup router with routes
        this.setupRouter();
        
        // Initialize components when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
        
        console.log('Application initialized successfully');
    }

    onDOMReady() {
        // Initialize card components
        this.initializeCards();
        
        // Setup global navigation function for backward compatibility
        window.goPage = (page) => this.navigateTo(page);
        
        // Add skip link functionality for accessibility
        this.setupSkipLinks();
        
        // Setup error handling
        this.setupErrorHandling();
    }

    setupRouter() {
        const routes = {
            'index': () => this.loadIndex(),
            'streaming': '/streaming.html',
            'live': '/live.html',
            'caccia': '/caccia.html',
            'readme/README': '/readme/README.html',
            '404': () => this.showNotFound()
        };
        
        this.router = new Router(routes);
    }

    initializeCards() {
        const cards = document.querySelectorAll('.card');
        if (cards.length > 0) {
            this.cards = CardComponent.initializeAll();
            
            // Listen for card click events
            document.addEventListener('cardclick', (e) => {
                this.handleCardClick(e.detail.cardId);
            });
        }
    }

    handleCardClick(cardId) {
        const navigationMap = {
            'streaming-new': 'streaming',
            'live-new': 'live',
            'caccia-new': 'caccia'
        };
        
        const target = navigationMap[cardId];
        if (target) {
            this.navigateTo(target);
        }
    }

    navigateTo(page) {
        if (!page || page === 'index') {
            this.router.navigate('/');
            return;
        }
        
        this.router.navigate(`/${page}`);
    }

    async loadIndex() {
        // Index page is already loaded, just initialize components
        this.initializeCards();
    }

    showNotFound() {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <div class="error-page" style="text-align: center; padding: 60px 20px;">
                    <h1 style="font-size: clamp(3rem, 5vw, 6rem); margin-bottom: 20px;">404</h1>
                    <p style="font-size: 1.25rem; margin-bottom: 30px; color: var(--color-text-secondary);">
                        Pagina non trovata
                    </p>
                    <a href="/" class="btn btn-primary" data-route="index">
                        Torna alla home
                    </a>
                </div>
            `;
        }
    }

    setupSkipLinks() {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    setupErrorHandling() {
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
            // Could send to error tracking service here
        });

        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            // Could send to error tracking service here
        });
    }
}

// Initialize the application
const app = new App();

// Export for potential external use
export { app };
