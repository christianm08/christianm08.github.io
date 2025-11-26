// Dati delle carte
const cardsData = {
    "streaming-new": {
        title: "STREAMING",
        subtitle: "accedi al nuovo sito di streaming",
        link: "#streaming"
    },
    "live-new": {
        title: "LIVE",
        subtitle: "accedi ai nuovi canali live",
        link: "#live"
    },

};

// Funzione per navigare senza .html nell'URL
function goPage(page) {
    let url = window.location.origin + '/';
    if (page === 'index') {
        window.location.href = url;
        return;
    }
    fetch(url + page, { method: 'HEAD' }).then(resp => {
        if (resp.ok) {
            window.location.href = url + page;
        } else {
            window.location.href = url + page + '.html';
        }
    }).catch(() => {
        window.location.href = url + page + '.html';
    });
}


// Inizializzazione dell'applicazione
document.addEventListener('DOMContentLoaded', function () {
    initializeCards();
    addEventListeners();
    addForceHoverEffects();
});

// Inizializza le carte
function initializeCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const cardId = card.getAttribute('data-id');
        const cardData = cardsData[cardId];

        if (cardData) {
            // Aggiungi attributi per accessibilità
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${cardData.title} - ${cardData.subtitle}`);

            // Forza animazione di entrata
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}

// Forza gli effetti hover tramite JavaScript
function addForceHoverEffects() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Forza effetti hover tramite JavaScript
            this.style.transform = 'scale(1.08)';
            this.style.zIndex = '10';
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

            // Effetto sul background
            const background = this.querySelector('.card-background');
            if (background) {
                background.style.transform = 'scale(1.1)';
                background.style.filter = 'brightness(1.2) contrast(1.1)';
            }

            // Effetto sul contenuto
            const content = this.querySelector('.card-content');
            if (content) {
                content.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)';
            }

            // Effetti sui testi
            const title = this.querySelector('.card-title');
            const subtitle = this.querySelector('.card-subtitle');

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
        });

        card.addEventListener('mouseleave', function () {
            // Reset effetti hover
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';

            // Reset background
            const background = this.querySelector('.card-background');
            if (background) {
                background.style.transform = 'scale(1)';
                background.style.filter = '';
            }

            // Reset contenuto
            const content = this.querySelector('.card-content');
            if (content) {
                content.style.background = '';
            }

            // Reset testi
            const title = this.querySelector('.card-title');
            const subtitle = this.querySelector('.card-subtitle');

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
        });
    });
}

// Aggiungi event listeners
function addEventListeners() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Click handler
        card.addEventListener('click', handleCardClick);

        // Keyboard support
        card.addEventListener('keydown', handleKeyDown);

        // Touch events per mobile
        card.addEventListener('touchstart', handleTouchStart, { passive: true });
        card.addEventListener('touchend', handleTouchEnd, { passive: true });
    });
}

// Gestisce il click sulla carta
function handleCardClick(event) {
    const cardId = event.currentTarget.getAttribute('data-id');
    const cardData = cardsData[cardId];

    if (cardData && cardData.link) {
        // Effetto di click visivo
        animateCardClick(event.currentTarget);

        // Log per debug
        console.log(`Navigating to: ${cardData.title} - ${cardData.link}`);

        // Naviga al link dopo un breve delay per l'animazione
        setTimeout(() => {
            if (cardData.link.startsWith('#')) {
                // Gestisci link interni
                console.log(`Internal navigation to: ${cardData.link}`);
                // window.location.hash = cardData.link;
            } else {
                // Gestisci link esterni
                window.open(cardData.link, '_blank');
            }
        }, 150);
    }
}

// Gestisce le interazioni da tastiera
function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCardClick(event);
    }
}

// Touch start per mobile
function handleTouchStart(event) {
    const card = event.currentTarget;
    card.style.transform = 'scale(0.98)';
    card.style.transition = 'transform 0.1s ease';
}

// Touch end per mobile
function handleTouchEnd(event) {
    const card = event.currentTarget;
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 100);
}

// Animazione di click
function animateCardClick(card) {
    card.style.transform = 'scale(0.95)';
    card.style.transition = 'transform 0.1s ease';

    setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }, 150);
}

// Funzione per aggiungere immagini di background (per uso futuro)
function setCardBackground(cardId, imageUrl) {
    const card = document.querySelector(`[data-id="${cardId}"]`);
    if (card) {
        const background = card.querySelector('.card-background');
        if (background) {
            background.style.backgroundImage = `url(${imageUrl})`;
        }
    }
}

// Esporta funzioni per uso esterno
window.cardsInterface = {
    setCardBackground,
    cardsData
};

// Debug function per verificare che tutto funzioni
console.log('Cards application loaded successfully');
console.log('Available cards:', Object.keys(cardsData));