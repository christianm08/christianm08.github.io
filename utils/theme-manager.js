/**
 * Theme Manager - Handles light/dark mode switching
 */
import { storage } from '../utils/helpers.js';

const THEME_KEY = 'christreaming-theme';

export class ThemeManager {
    constructor() {
        this.currentTheme = this.getPreferredTheme();
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupListeners();
    }

    getPreferredTheme() {
        const storedTheme = storage.get(THEME_KEY);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        this.currentTheme = theme;
        storage.set(THEME_KEY, theme);
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        return newTheme;
    }

    setupListeners() {
        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!storage.get(THEME_KEY)) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}
