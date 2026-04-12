/**
 * Lazy Loader - Handles lazy loading for iframes and images
 */

export class LazyLoader {
    constructor(options = {}) {
        this.options = {
            rootMargin: options.rootMargin || '50px',
            threshold: options.threshold || 0.01,
            ...options
        };
        this.observers = new Map();
        this.init();
    }

    init() {
        this.observeIframes();
        this.observeImages();
    }

    observeIframes() {
        const iframes = document.querySelectorAll('iframe[data-src]');
        
        if (iframes.length === 0) return;

        const iframeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    this.loadIframe(iframe);
                    observer.unobserve(iframe);
                }
            });
        }, {
            rootMargin: this.options.rootMargin,
            threshold: this.options.threshold
        });

        iframes.forEach(iframe => iframeObserver.observe(iframe));
    }

    loadIframe(iframe) {
        const src = iframe.getAttribute('data-src');
        if (src) {
            iframe.src = src;
            iframe.removeAttribute('data-src');
            
            // Add loading class for styling
            iframe.classList.add('loading');
            
            iframe.addEventListener('load', () => {
                iframe.classList.remove('loading');
                iframe.classList.add('loaded');
            }, { once: true });
        }
    }

    observeImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if (images.length === 0) return;

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: this.options.rootMargin,
            threshold: this.options.threshold
        });

        images.forEach(img => imageObserver.observe(img));
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        const srcset = img.getAttribute('data-srcset');
        
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
        
        if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
        }
        
        img.classList.add('loading');
        
        img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
        }, { once: true });
        
        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.classList.add('error');
        }, { once: true });
    }

    // Method to manually observe an element
    observe(element, callback) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: this.options.rootMargin,
            threshold: this.options.threshold
        });

        observer.observe(element);
        return observer;
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LazyLoader();
    });
} else {
    new LazyLoader();
}
