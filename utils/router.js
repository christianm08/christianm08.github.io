/**
 * Router - Client-side routing for SPA navigation
 */

export class Router {
    constructor(routes = {}) {
        this.routes = routes;
        this.currentRoute = null;
        this.init();
    }

    init() {
        window.addEventListener('popstate', (event) => {
            this.handleRoute(event.state?.path || window.location.pathname);
        });

        // Handle initial route
        this.handleRoute(window.location.pathname);
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    navigate(path, push = true) {
        if (push) {
            history.pushState({ path }, '', path);
        } else {
            history.replaceState({ path }, '', path);
        }
        this.handleRoute(path);
    }

    async handleRoute(path) {
        // Remove leading slash for matching
        const normalizedPath = path.replace(/^\//, '') || 'index';
        
        const handler = this.routes[normalizedPath] || this.routes['404'];
        
        if (handler) {
            this.currentRoute = normalizedPath;
            
            // Update active navigation state
            this.updateNavigation(normalizedPath);
            
            // Execute route handler
            if (typeof handler === 'function') {
                await handler();
            } else if (typeof handler === 'string') {
                // Load page from URL
                await this.loadPage(handler);
            }
            
            window.dispatchEvent(new CustomEvent('routechange', { detail: { path: normalizedPath } }));
        }
    }

    updateNavigation(activePath) {
        document.querySelectorAll('[data-route]').forEach(link => {
            const route = link.getAttribute('data-route');
            link.classList.toggle('active', route === activePath);
        });
    }

    async loadPage(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Page not found');
            const html = await response.text();
            
            // Parse and inject content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('main') || doc.body;
            
            const main = document.querySelector('main');
            if (main) {
                main.innerHTML = mainContent.innerHTML;
            }
        } catch (error) {
            console.error('Error loading page:', error);
            this.showError();
        }
    }

    showError() {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <div class="error-page">
                    <h1>404</h1>
                    <p>Pagina non trovata</p>
                    <a href="/" class="btn btn-primary">Torna alla home</a>
                </div>
            `;
        }
    }
}
