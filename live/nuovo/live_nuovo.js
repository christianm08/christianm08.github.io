// StreamHub App - Versione semplificata e funzionante
let currentServer = 'dlhd.click';
let currentFilter = 'all';

const channels = [
    {"name": "Rai 1", "stream": "stream-850.php", "category": "tv", "icon": "images/rai1.png"},
    {"name": "Rai 2", "stream": "stream-851.php", "category": "tv", "icon": "images/rai2.png"},
    {"name": "Rai Sport", "stream": "stream-882.php", "category": "sport", "icon": "images/rai-sport.png"},
    {"name": "Rai Premium", "stream": "stream-883.php", "category": "cinema", "icon": "images/rai-premium.png"},
    {"name": "Canale 5", "stream": "stream-853.php", "category": "tv", "icon": "images/canale5.png"},
    {"name": "Italia 1", "stream": "stream-854.php", "category": "tv", "icon": "images/italia1.png"},
    {"name": "20 Mediaset", "stream": "stream-857.php", "category": "tv", "icon": "images/20.png"},
    {"name": "La7", "stream": "stream-855.php", "category": "tv", "icon": "images/la7.png"},
    {"name": "EuroSport 1", "stream": "stream-878.php", "category": "sport", "icon": "images/eurosport1.png"},
    {"name": "EuroSport 2", "stream": "stream-879.php", "category": "sport", "icon": "images/eurosport2.png"},
    {"name": "Sky Cinema Action", "stream": "stream-861.php", "category": "cinema", "icon": "images/sky-cinema-action.png"},
    {"name": "Sky Cinema Collection", "stream": "stream-859.php", "category": "cinema", "icon": "images/sky-cinema-collection.png"},
    {"name": "Sky Cinema Comedy", "stream": "stream-862.php", "category": "cinema", "icon": "images/sky-cinema-comedy.png"},
    {"name": "Sky Cinema Family", "stream": "stream-865.php", "category": "cinema", "icon": "images/sky-cinema-family.png"},
    {"name": "Sky Cinema Uno", "stream": "stream-860.php", "category": "cinema", "icon": "images/sky-cinema-uno.png"},
    {"name": "Sky Cinema Uno +24", "stream": "stream-863.php", "category": "cinema", "icon": "images/sky-cinema-uno-24.png"},
    {"name": "Sky Cinema Due +24", "stream": "stream-866.php", "category": "cinema", "icon": "images/sky-cinema-due-24.png"},
    {"name": "Sky Cinema Drama", "stream": "stream-867.php", "category": "cinema", "icon": "images/sky-cinema-drama.png"},
    {"name": "Sky Cinema Romance", "stream": "stream-864.php", "category": "cinema", "icon": "images/sky-cinema-romance.png"},
    {"name": "Sky Cinema Suspense", "stream": "stream-868.php", "category": "cinema", "icon": "images/sky-cinema-suspense.png"},
    {"name": "Sky Serie", "stream": "stream-880.php", "category": "cinema", "icon": "images/sky-serie.png"},
    {"name": "Sky Sport Calcio", "stream": "stream-870.php", "category": "calcio", "icon": "images/sky-sport-calcio.png"},
    {"name": "Sky Sport 251", "stream": "stream-871.php", "category": "calcio", "icon": "images/sky-sport.png"},
    {"name": "Sky Sport 252", "stream": "stream-872.php", "category": "calcio", "icon": "images/sky-sport.png"},
    {"name": "Sky Sport 253", "stream": "stream-873.php", "category": "calcio", "icon": "images/sky-sport.png"},
    {"name": "Sky Sport 254", "stream": "stream-874.php", "category": "calcio", "icon": "images/sky-sport.png"},
    {"name": "Sky Sport 24", "stream": "stream-869.php", "category": "sport", "icon": "images/sky-sport-24.png"},
    {"name": "Sky Sport Arena", "stream": "stream-462.php", "category": "sport", "icon": "images/sky-sport-arena.png"},
    {"name": "Sky Sport Football", "stream": "stream-460.php", "category": "sport", "icon": "images/sky-sport-football.png"},
    {"name": "Sky Sport F1", "stream": "stream-577.php", "category": "sport", "icon": "images/sky-sport-f1.png"},
    {"name": "Sky Sport MotoGP", "stream": "stream-575.php", "category": "sport", "icon": "images/sky-sport-motogp.png"},
    {"name": "Sky Sport Tennis", "stream": "stream-576.php", "category": "sport", "icon": "images/sky-sport-tennis.png"},
    {"name": "Sky Sport UNO", "stream": "stream-461.php", "category": "sport", "icon": "images/sky-sport-uno.png"},
    {"name": "Sky Sport Golf", "stream": "stream-574.php", "category": "sport", "icon": "images/sky-sport-golf.png"},
    {"name": "Sky UNO", "stream": "stream-881.php", "category": "tv", "icon": "images/sky-uno.png"},
    {"name": "Zona DAZN", "stream": "stream-877.php", "category": "sport", "icon": "images/zona-dazn.png"}
];

function getCategoryDisplayName(category) {
    const categoryNames = {
        'sport': 'Sport',
        'cinema': 'Cinema',
        'calcio': 'Calcio',
        'tv': 'TV'
    };
    return categoryNames[category] || category;
}

function renderChannels() {
    const grid = document.getElementById('channels-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    channels.forEach((channel, index) => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.setAttribute('data-category', channel.category);
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('data-channel-name', channel.name);
        card.setAttribute('data-stream', channel.stream);

        card.innerHTML = `
            <div class="channel-icon">
                <img src="${channel.icon}" alt="${channel.name} icon" loading="lazy">
            </div>
            <h3 class="channel-name">${channel.name}</h3>
            <div class="channel-category">${getCategoryDisplayName(channel.category)}</div>
        `;

        grid.appendChild(card);
    });

    // Add click events to all channel cards
    attachChannelEvents();
    
    // Animate cards in
    setTimeout(() => {
        const cards = document.querySelectorAll('.channel-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
        });
    }, 100);
}

function attachChannelEvents() {
    const cards = document.querySelectorAll('.channel-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const channelName = this.getAttribute('data-channel-name');
            const streamFile = this.getAttribute('data-stream');
            openPlayer(channelName, streamFile);
        });
    });
}

function openPlayer(channelName, streamFile) {
    console.log('Opening player for:', channelName);
    
    // Show loading
    showLoading();
    
    // Set channel title
    const titleElement = document.getElementById('channel-title');
    if (titleElement) {
        titleElement.textContent = channelName;
    }
    
    // Build URL
    const streamUrl = `https://${currentServer}/embed/${streamFile}`;
    console.log('Stream URL:', streamUrl);
    
    setTimeout(() => {
        // Set iframe src
        const playerFrame = document.getElementById('player-frame');
        if (playerFrame) {
            playerFrame.src = streamUrl;
        }
        
        // Hide loading and show modal
        hideLoading();
        showModal();
    }, 1000);
}

function closePlayer() {
    console.log('Closing player');
    const modal = document.getElementById('player-modal');
    const playerFrame = document.getElementById('player-frame');
    
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
            if (playerFrame) {
                playerFrame.src = '';
            }
        }, 300);
    }
}

function showModal() {
    const modal = document.getElementById('player-modal');
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('visible');
        }, 10);
    }
}

function showLoading() {
    const loading = document.getElementById('loading-overlay');
    if (loading) {
        loading.classList.remove('hidden');
        setTimeout(() => {
            loading.classList.add('visible');
        }, 10);
    }
}

function hideLoading() {
    const loading = document.getElementById('loading-overlay');
    if (loading) {
        loading.classList.remove('visible');
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 300);
    }
}

function handleFilterClick(category) {
    console.log('Filtering by:', category);
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Filter cards
    const cards = document.querySelectorAll('.channel-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = category === 'all' || cardCategory === category;
        
        if (shouldShow) {
            card.style.display = 'block';
            card.classList.remove('filtered-out');
        } else {
            card.style.display = 'none';
            card.classList.add('filtered-out');
        }
    });
}

function handleServerChange(serverValue) {
    currentServer = serverValue;
    console.log('Server changed to:', currentServer);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 StreamHub Loading...');
    
    // Render channels
    renderChannels();
    
    // Server selector event
    const serverSelect = document.getElementById('server-select');
    if (serverSelect) {
        serverSelect.addEventListener('change', function() {
            handleServerChange(this.value);
        });
    }
    
    // Filter button events
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            handleFilterClick(category);
        });
    });
    
    // Modal close events
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePlayer);
    }
    
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', closePlayer);
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlayer();
        }
    });
    
    console.log('✅ StreamHub initialized successfully!');
    console.log('📺 Available channels:', channels.length);
    console.log('🔧 Default server:', currentServer);
});