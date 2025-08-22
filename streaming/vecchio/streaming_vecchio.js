// Gestione selezione navbar (ex-sidebar)
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const mainContent = document.querySelector('.main-content');

function updateUrlSection(section) {
    const url = new URL(window.location);
    url.searchParams.set('section', section);
    url.searchParams.delete('type');
    url.searchParams.delete('tmdb');
    url.searchParams.delete('season');
    url.searchParams.delete('episode');
    window.history.pushState({}, '', url);
}

function updateUrlContent(type, tmdbId, season, episode) {
    const url = new URL(window.location);
    url.searchParams.set('type', type);
    url.searchParams.set('tmdb', tmdbId);
    if (season) url.searchParams.set('season', season);
    else url.searchParams.delete('season');
    if (episode) url.searchParams.set('episode', episode);
    else url.searchParams.delete('episode');
    window.history.pushState({}, '', url);
}

function updateUrlSearchQuery(query) {
    const url = new URL(window.location);
    url.searchParams.set('section', 'cerca');
    if (query) url.searchParams.set('query', query);
    else url.searchParams.delete('query');
    window.history.replaceState({}, '', url);
}

function setActiveNav(section) {
    sidebarLinks.forEach(link => {
        // Non attivare "Torna alla home" o link senza data-section
        if (link.dataset.section === section) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Se è un link esterno (es: Torna alla home), lascia il comportamento di default
        if (this.dataset.section === undefined) return;
        e.preventDefault();
        setActiveNav(this.dataset.section);
        const section = this.dataset.section;
        if (section === 'film') {
            updateUrlSection('film');
            loadMovies();
        } else if (section === 'serie-tv') {
            updateUrlSection('serie-tv');
            loadShows();
        } else if (section === 'mia-lista') {
            updateUrlSection('mia-lista');
            showMyList();
        } else if (section === 'cerca') {
            updateUrlSection('cerca');
            showSearch();
        }
    });
});

// All'avvio, mostra la sezione o il contenuto in base all'URL
window.addEventListener('DOMContentLoaded', () => {
    renderFromUrl();
});

function renderFromUrl() {
    const urlParams = new URL(window.location).searchParams;
    const type = urlParams.get('type');
    const tmdb = urlParams.get('tmdb');
    const season = urlParams.get('season');
    const episode = urlParams.get('episode');
    if (type && tmdb) {
        showPlayerWithInfo(type, tmdb, season, episode);
        let section = 'film';
        if (type === 'tv') section = 'serie-tv';
        setActiveNav(section);
        return;
    }
    const section = urlParams.get('section');
    let found = false;
    if (section === 'film') {
        setActiveNav('film');
        loadMovies();
        found = true;
    } else if (section === 'serie-tv') {
        setActiveNav('serie-tv');
        loadShows();
        found = true;
    } else if (section === 'mia-lista') {
        setActiveNav('mia-lista');
        showMyList();
        found = true;
    } else if (section === 'cerca') {
        setActiveNav('cerca');
        showSearch();
        found = true;
    }
    if (!found) {
        setActiveNav('film');
        loadMovies();
    }
}

window.addEventListener('popstate', renderFromUrl);

// Gestione selezione sidebar

function filterItalianContent(items, type) {
    // type: 'movie' o 'tv'
    return Promise.all(items.map(item => {
        const url = type === 'movie'
            ? `https://api.themoviedb.org/3/movie/${item.id}/translations?api_key=55ecd6c5211c736b4c2f3b7d3342198d`
            : `https://api.themoviedb.org/3/tv/${item.id}/translations?api_key=55ecd6c5211c736b4c2f3b7d3342198d`;
        return fetch(url)
            .then(res => res.json())
            .then(details => {
                // Cerca la presenza della traduzione italiana e che sia effettivamente localizzata (not empty)
                if (details.translations && Array.isArray(details.translations)) {
                    const it = details.translations.find(tr => tr.iso_639_1 === 'it');
                    // Considera valido solo se esiste una overview o un titolo localizzato
                    if (it && ((it.data && it.data.title && it.data.title.trim() !== '') || (it.data && it.data.overview && it.data.overview.trim() !== ''))) {
                        return item;
                    }
                }
                return null;
            })
            .catch(() => null);
    })).then(results => results.filter(Boolean));
}

// Carica film all'avvio
loadMovies();



// Modifica loadMovies
function loadMovies() {
    mainContent.innerHTML = '<h1>Film Popolari</h1>' + renderCatalogGridWithArrows('Caricamento...');
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/movie/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessun film trovato.';
            setupCatalogGridArrows();
            return;
        }
        filterItalianContent(allResults, 'movie').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessun film disponibile in italiano.';
                setupCatalogGridArrows();
                return;
            }
            const cards = filtered.map(movie => `
              <div class="catalog-card clickable-card" data-tmdbid="${movie.id}">
                  <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
                  <div class="catalog-title">${movie.title}</div>
              </div>
          `).join('');
            mainContent.querySelector('.catalog-grid').innerHTML = cards;
            setupCatalogGridArrows();
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    updateUrlContent('movie', tmdbId);
                    showPlayerWithInfo('movie', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
        setupCatalogGridArrows();
    });
}

function addMoviePlayListeners() {
    mainContent.querySelectorAll('.play-btn[data-tmdbid]:not(.add-list-btn):not(.remove-list-btn)').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            showPlayer(`https://vixsrc.to/movie/${tmdbId}?primaryColor=B20710&secondaryColor=170000&lang=it&autoplay=true`);
        });
    });
    mainContent.querySelectorAll('.add-list-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            const poster = this.dataset.poster;
            const title = this.dataset.title;
            addToMyList({ id: Number(tmdbId), poster_path: poster, title }, 'movie');
            loadMovies();
        });
    });
    mainContent.querySelectorAll('.remove-list-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            removeFromMyList(Number(tmdbId), 'movie');
            loadMovies();
        });
    });
}

function loadShows() {
    mainContent.innerHTML = '<h1>Serie TV Popolari</h1>' + renderCatalogGridWithArrows('Caricamento...');
    // Recupera più pagine di serie popolari (ad esempio le prime 3 pagine)
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/tv/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        // Unisci tutti i risultati in un unico array
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie trovata.';
            setupCatalogGridArrows();
            return;
        }
        filterItalianContent(allResults, 'tv').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie disponibile in italiano.';
                setupCatalogGridArrows();
                return;
            }
            const cards = filtered.map(show => `
                <div class="catalog-card clickable-card" data-tmdbid="${show.id}">
                    <img src="https://image.tmdb.org/t/p/w300${show.poster_path}" alt="${show.name}" />
                    <div class="catalog-title">${show.name}</div>
                </div>
            `).join('');
            mainContent.querySelector('.catalog-grid').innerHTML = cards;
            setupCatalogGridArrows();
            // Aggiungi listener per aprire il player cliccando sulla card della serie TV
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    updateUrlContent('tv', tmdbId);
                    showPlayerWithInfo('tv', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
        setupCatalogGridArrows();
    });
}

function addShowPlayListeners() {
    mainContent.querySelectorAll('.play-btn[data-tmdbid]:not(.add-list-btn):not(.remove-list-btn)').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            let season = prompt('Numero stagione?');
            let episode = prompt('Numero episodio?');
            if (!season || !episode) return;
            showPlayer(`https://vixsrc.to/tv/${tmdbId}/${season}/${episode}?primaryColor=B20710&secondaryColor=170000&lang=it&autoplay=true`);
        });
    });
    mainContent.querySelectorAll('.add-list-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            const poster = this.dataset.poster;
            const title = this.dataset.title;
            addToMyList({ id: Number(tmdbId), poster_path: poster, name: title }, 'tv');
            loadShows();
        });
    });
    mainContent.querySelectorAll('.remove-list-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            removeFromMyList(Number(tmdbId), 'tv');
            loadShows();
        });
    });
}

function showPlayer(embedUrl, backToSearch) {
    // Crea overlay popup
    let popup = document.createElement('div');
    popup.className = 'player-popup-overlay';
    popup.innerHTML = `
        <div class="player-popup-content">
            <button class="player-popup-close" title="Chiudi">&times;</button>
            <iframe src="${embedUrl}" allowfullscreen frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write;" class="player-iframe"></iframe>
        </div>
    `;
    document.body.appendChild(popup);
    // Chiudi popup su click X o overlay
    popup.querySelector('.player-popup-close').onclick = () => popup.remove();
    popup.onclick = e => { if (e.target === popup) popup.remove(); };
}

function showPlayerWithInfo(type, tmdbId, season, episode) {
    updateUrlContent(type, tmdbId, season, episode);
    mainContent.innerHTML = '<div class="player-embed-wrap">Caricamento informazioni...</div>';
    let url, embedUrl;
    if (type === 'movie') {
        url = `https://api.themoviedb.org/3/movie/${tmdbId}?language=it-IT&api_key=55ecd6c5211c736b4c2f3b7d3342198d`;
        embedUrl = `https://vixsrc.to/movie/${tmdbId}?primaryColor=B20710&secondaryColor=170000&lang=it&autoplay=true`;
    } else {
        url = `https://api.themoviedb.org/3/tv/${tmdbId}?language=it-IT&api_key=55ecd6c5211c736b4c2f3b7d3342198d`;
        embedUrl = season && episode ?
            `https://vixsrc.to/tv/${tmdbId}/${season}/${episode}?primaryColor=B20710&secondaryColor=170000&lang=it&autoplay=true` : '';
    }
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (type === 'movie') {
                // --- INIZIO AGGIUNTA TRAILER YOUTUBE ---
                // Recupera il trailer da TMDb
                fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=55ecd6c5211c736b4c2f3b7d3342198d&language=it-IT`)
                    .then(res => res.json())
                    .then(videosData => {
                        let trailerEmbed = '';
                        if (videosData && Array.isArray(videosData.results)) {
                            // Cerca trailer YouTube prioritario in italiano, poi fallback a qualsiasi lingua
                            let trailer = videosData.results.find(v => v.type === 'Trailer' && v.site === 'YouTube' && v.iso_639_1 === 'it') ||
                                videosData.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
                            if (trailer) {
                                trailerEmbed = `
                                    <div class="trailer-block">
                                        <h3>Trailer</h3>
                                        <div class="trailer-embed-16by9">
                                            <iframe src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
                                        </div>
                                    </div>
                                `;
                            }
                        }
                        const inList = isInMyList(data.id, 'movie');
                        let infoBlock = `
                            <div class="info-flex info-flex-split">
                                <div class="info-poster-col">
                                    <img class="info-poster-large" src="https://image.tmdb.org/t/p/w780${data.poster_path}" alt="${data.title}" />
                                </div>
                                <div class="info-details-col">
                                    <h2>${data.title}</h2>
                                    <p class="info-meta"><span>${data.release_date ? data.release_date.substring(0, 4) : '-'}</span> &bull; <span>${(data.genres || []).map(g => g.name).join(', ')}</span></p>
                                    <div class="info-rating">
                                        <span class="star">★</span> <span>${data.vote_average ? data.vote_average.toFixed(1) : '-'}/10</span>
                                        <span class="vote-count">(${data.vote_count || 0} voti)</span>
                                    </div>
                                    <p class="info-overview">${data.overview || 'Nessuna descrizione.'}</p>
                                    <button class="play-btn add-remove-list-btn" data-tmdbid="${data.id}" data-type="movie" data-poster="${data.poster_path || ''}" data-title="${data.title}">
                                        ${inList ? 'Rimuovi da lista' : 'Aggiungi a lista'}
                                    </button>
                                    <button class="play-btn play-btn-watch" style="margin-top:1.5em;" type="button">Guarda</button>
                                    ${trailerEmbed}
                                </div>
                            </div>
                        `;
                        let backLabel = 'catalogo';
                        const activeSection = document.querySelector('.sidebar-link.active')?.textContent;
                        if (activeSection === 'Cerca') backLabel = 'ricerca';
                        else if (activeSection === 'Film') backLabel = 'film';
                        else if (activeSection === 'Serie TV') backLabel = 'serie TV';
                        else if (activeSection === 'Mia Lista') backLabel = 'mia lista';
                        mainContent.innerHTML = `
                            <button class="back-btn" style="position:absolute;right:0;top:0;margin:5rem 5rem 0 0;z-index:2;">&larr; Torna a ${backLabel}</button>
                            <div class="content-info">${infoBlock}</div>
                        `;
                        // Listener per aggiungi/rimuovi da lista
                        mainContent.querySelector('.add-remove-list-btn').onclick = function () {
                            if (isInMyList(data.id, 'movie')) {
                                removeFromMyList(data.id, 'movie');
                            } else {
                                addToMyList({ id: data.id, poster_path: data.poster_path, title: data.title }, 'movie');
                            }
                            showPlayerWithInfo('movie', data.id);
                        };
                        // Listener per aprire il player popup
                        mainContent.querySelector('.play-btn-watch').onclick = () => showPlayer(embedUrl);
                        // Gestione back
                        const backBtn = mainContent.querySelector('.back-btn');
                        if (backBtn) {
                            backBtn.onclick = () => {
                                // Recupera la sezione precedente dall'URL
                                const params = new URL(window.location).searchParams;
                                const section = params.get('section');
                                if (section === 'film') {
                                    updateUrlSection('film');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                                    loadMovies();
                                } else if (section === 'serie-tv') {
                                    updateUrlSection('serie-tv');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Serie TV') l.classList.add('active'); });
                                    loadShows();
                                } else if (section === 'mia-lista') {
                                    updateUrlSection('mia-lista');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Mia Lista') l.classList.add('active'); });
                                    showMyList();
                                } else if (section === 'cerca') {
                                    updateUrlSection('cerca');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Cerca') l.classList.add('active'); });
                                    showSearch();
                                } else {
                                    // Default: Film
                                    updateUrlSection('film');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                                    loadMovies();
                                }
                            };
                        }
                    })
                    .catch(() => {
                        // Se errore, mostra la pagina senza trailer
                        const inList = isInMyList(data.id, 'movie');
                        let infoBlock = `
                            <div class="info-flex info-flex-split">
                                <div class="info-poster-col">
                                    <img class="info-poster-large" src="https://image.tmdb.org/t/p/w780${data.poster_path}" alt="${data.title}" />
                                </div>
                                <div class="info-details-col">
                                    <h2>${data.title}</h2>
                                    <p class="info-meta"><span>${data.release_date ? data.release_date.substring(0, 4) : '-'}</span> &bull; <span>${(data.genres || []).map(g => g.name).join(', ')}</span></p>
                                    <div class="info-rating">
                                        <span class="star">★</span> <span>${data.vote_average ? data.vote_average.toFixed(1) : '-'}/10</span>
                                        <span class="vote-count">(${data.vote_count || 0} voti)</span>
                                    </div>
                                    <p class="info-overview">${data.overview || 'Nessuna descrizione.'}</p>
                                    <button class="play-btn add-remove-list-btn" data-tmdbid="${data.id}" data-type="movie" data-poster="${data.poster_path || ''}" data-title="${data.title}">
                                        ${inList ? 'Rimuovi da lista' : 'Aggiungi a lista'}
                                    </button>
                                    <button class="play-btn play-btn-watch" style="margin-top:1.5em;" type="button">Guarda</button>
                                </div>
                            </div>
                        `;
                        let backLabel = 'catalogo';
                        const activeSection = document.querySelector('.sidebar-link.active')?.textContent;
                        if (activeSection === 'Cerca') backLabel = 'ricerca';
                        else if (activeSection === 'Film') backLabel = 'film';
                        else if (activeSection === 'Serie TV') backLabel = 'serie TV';
                        else if (activeSection === 'Mia Lista') backLabel = 'mia lista';
                        mainContent.innerHTML = `
                            <button class="back-btn" style="position:absolute;right:0;top:0;margin:5rem 5rem 0 0;z-index:2;">&larr; Torna a ${backLabel}</button>
                            <div class="content-info">${infoBlock}</div>
                        `;
                        // Listener per aggiungi/rimuovi da lista
                        mainContent.querySelector('.add-remove-list-btn').onclick = function () {
                            if (isInMyList(data.id, 'movie')) {
                                removeFromMyList(data.id, 'movie');
                            } else {
                                addToMyList({ id: data.id, poster_path: data.poster_path, title: data.title }, 'movie');
                            }
                            showPlayerWithInfo('movie', data.id);
                        };
                        // Listener per aprire il player popup
                        mainContent.querySelector('.play-btn-watch').onclick = () => showPlayer(embedUrl);
                        // Gestione back
                        const backBtn = mainContent.querySelector('.back-btn');
                        if (backBtn) {
                            backBtn.onclick = () => {
                                // Recupera la sezione precedente dall'URL
                                const params = new URL(window.location).searchParams;
                                const section = params.get('section');
                                if (section === 'film') {
                                    updateUrlSection('film');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                                    loadMovies();
                                } else if (section === 'serie-tv') {
                                    updateUrlSection('serie-tv');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Serie TV') l.classList.add('active'); });
                                    loadShows();
                                } else if (section === 'mia-lista') {
                                    updateUrlSection('mia-lista');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Mia Lista') l.classList.add('active'); });
                                    showMyList();
                                } else if (section === 'cerca') {
                                    updateUrlSection('cerca');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Cerca') l.classList.add('active'); });
                                    showSearch();
                                } else {
                                    // Default: Film
                                    updateUrlSection('film');
                                    sidebarLinks.forEach(l => l.classList.remove('active'));
                                    sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                                    loadMovies();
                                }
                            };
                        }
                    });
                // --- FINE AGGIUNTA TRAILER YOUTUBE ---
            } else {
                let seasons = (data.seasons || []).filter(s => s.season_number > 0);
                let selectedSeason = seasons.length ? seasons[0].season_number : 1;
                // Funzione per caricare gli episodi di una stagione
                function renderEpisodes(seasonNumber) {
                    const episodesWrap = mainContent.querySelector('.episode-cards-wrap');
                    episodesWrap.innerHTML = '<div class="loading-episodes">Caricamento episodi...</div>';
                    fetch(`https://api.themoviedb.org/3/tv/${tmdbId}/season/${seasonNumber}?language=it-IT&api_key=55ecd6c5211c736b4c2f3b7d3342198d`)
                        .then(res => res.json())
                        .then(seasonData => {
                            const episodes = seasonData.episodes || [];
                            if (!episodes.length) {
                                episodesWrap.innerHTML = '<div class="no-episodes">Nessun episodio trovato.</div>';
                                return;
                            }
                            episodesWrap.innerHTML = episodes.map(ep => {
                                let imgSrc = '';
                                if (ep.still_path) {
                                    imgSrc = `https://image.tmdb.org/t/p/w300${ep.still_path}`;
                                } else if (data.backdrop_path) {
                                    imgSrc = `https://image.tmdb.org/t/p/w780${data.backdrop_path}`;
                                } else if (data.poster_path) {
                                    imgSrc = `https://image.tmdb.org/t/p/w300${data.poster_path}`;
                                } else {
                                    imgSrc = 'https://via.placeholder.com/300x169?text=No+Image';
                                }
                                return `
                                    <div class="episode-card" data-epnum="${ep.episode_number}">
                                        <div class="ep-thumb-wrap" style="max-width: 320px; margin: 0 auto;">
                                            <img src="${imgSrc}" alt="Episodio ${ep.episode_number}" style="width:100%;height:auto;max-height:240px;object-fit:cover;border-radius:0.7em;" />
                                        </div>
                                        <div class="ep-info">
                                            <div class="ep-title">Ep. ${ep.episode_number} - ${ep.name || ''}</div>
                                            <div class="ep-date">${ep.air_date || ''}</div>
                                        </div>
                                    </div>
                                `;
                            }).join('');
                            mainContent.querySelectorAll('.episode-card').forEach(card => {
                                card.addEventListener('click', function () {
                                    const epNum = this.dataset.epnum;
                                    showPlayer(`https://vixsrc.to/tv/${tmdbId}/${seasonNumber}/${epNum}?primaryColor=B20710&secondaryColor=170000&lang=it&autoplay=true`);
                                });
                            });
                        })
                        .catch(() => {
                            episodesWrap.innerHTML = '<div class="no-episodes">Errore nel caricamento episodi.</div>';
                        });
                }
                // Card stagioni
                let seasonCards = seasons.map(s => `
                    <div class="season-card${s.season_number == selectedSeason ? ' selected' : ''}" data-season="${s.season_number}">
                        <div class="season-thumb-wrap">
                            <img src="${s.poster_path ? `https://image.tmdb.org/t/p/w300${s.poster_path}` : (data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image')}", alt="${s.name}" />
                        </div>
                        <div class="season-info">
                            <div class="season-title">${s.name}</div>
                            <div class="season-epcount">${s.episode_count || '?'} episodi</div>
                        </div>
                    </div>
                `).join('');
                let infoBlock = `
                    <div class="info-flex info-flex-split">
                        <div class="info-poster-col">
                            <img class="info-poster-large" src="https://image.tmdb.org/t/p/w780${data.poster_path}" alt="${data.name}" />
                        </div>
                        <div class="info-details-col">
                            <h2>${data.name}</h2>
                            <p class="info-meta"><span>${data.first_air_date ? data.first_air_date.substring(0, 4) : '-'}</span> &bull; <span>${(data.genres || []).map(g => g.name).join(', ')}</span></p>
                            <div class="info-rating">
                                <span class="star">★</span> <span>${data.vote_average ? data.vote_average.toFixed(1) : '-'}/10</span>
                                <span class="vote-count">(${data.vote_count || 0} voti)</span>
                            </div>
                            <p class="info-overview">${data.overview || 'Nessuna descrizione.'}</p>
                            <button class="play-btn add-remove-list-btn" data-tmdbid="${data.id}" data-type="tv" data-poster="${data.poster_path || ''}" data-title="${data.name}">
                                ${isInMyList(data.id, 'tv') ? 'Rimuovi da lista' : 'Aggiungi a lista'}
                            </button>
                            <div class="season-cards-wrap-wrap" style="position:relative;max-width:82vw;width:82%;overflow:hidden;padding:0 1.5em 0 1.5em;box-sizing:border-box;display:flex;align-items:center;">
                              <button class="season-cards-arrow left" type="button" aria-label="Scorri stagioni a sinistra"><i class="fa fa-chevron-left"></i></button>
                              <div class="season-cards-wrap" style="display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:1.2em;width:100%;scroll-behavior:smooth;box-sizing:border-box;">${seasonCards}</div>
                              <button class="season-cards-arrow right" type="button" aria-label="Scorri stagioni a destra"><i class="fa fa-chevron-right"></i></button>
                            </div>
                            <div class="episode-cards-wrap-wrap" style="position:relative;max-width:82vw;width:82%;overflow:hidden;padding:0 1.5em 0 1.5em;box-sizing:border-box;display:flex;align-items:center;">
                              <button class="episode-cards-arrow left" type="button" aria-label="Scorri episodi a sinistra"><i class="fa fa-chevron-left"></i></button>
                              <div class="episode-cards-wrap" style="display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:1.2em;width:100%;scroll-behavior:smooth;box-sizing:border-box;"></div>
                              <button class="episode-cards-arrow right" type="button" aria-label="Scorri episodi a destra"><i class="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                let backLabel = 'catalogo';
                const activeSection = document.querySelector('.sidebar-link.active')?.textContent;
                if (activeSection === 'Cerca') backLabel = 'ricerca';
                else if (activeSection === 'Film') backLabel = 'film';
                else if (activeSection === 'Serie TV') backLabel = 'serie TV';
                else if (activeSection === 'Mia Lista') backLabel = 'mia lista';
                mainContent.innerHTML = `
                    <button class="back-btn" style="position:absolute;right:0;top:0;margin:5rem 5rem 0 0;z-index:2;">&larr; Torna a ${backLabel}</button>
                    <div class="content-info">${infoBlock}</div>
                `;
                // Listener cambio stagione tramite card
                mainContent.querySelectorAll('.season-card').forEach(card => {
                    card.addEventListener('click', function () {
                        mainContent.querySelectorAll('.season-card').forEach(c => c.classList.remove('selected'));
                        this.classList.add('selected');
                        renderEpisodes(this.dataset.season);
                        setupEpisodeSeasonArrows(); // Aggiorna frecce episodi dopo cambio stagione
                    });
                });
                // Listener per aggiungi/rimuovi da lista nelle serie TV
                mainContent.querySelector('.add-remove-list-btn').onclick = function () {
                    if (isInMyList(data.id, 'tv')) {
                        removeFromMyList(data.id, 'tv');
                    } else {
                        addToMyList({ id: data.id, poster_path: data.poster_path, name: data.name }, 'tv');
                    }
                    showPlayerWithInfo('tv', data.id);
                };
                renderEpisodes(selectedSeason);
                setupEpisodeSeasonArrows(); // Inizializza frecce dopo render
            }
            // Listener back
            const backBtn = mainContent.querySelector('.back-btn');
            if (backBtn) {
                backBtn.onclick = () => {
                    // Recupera la sezione precedente dall'URL
                    const params = new URL(window.location).searchParams;
                    const section = params.get('section');
                    if (section === 'film') {
                        updateUrlSection('film');
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                        loadMovies();
                    } else if (section === 'serie-tv') {
                        updateUrlSection('serie-tv');
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        sidebarLinks.forEach(l => { if (l.textContent === 'Serie TV') l.classList.add('active'); });
                        loadShows();
                    } else if (section === 'mia-lista') {
                        updateUrlSection('mia-lista');
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        sidebarLinks.forEach(l => { if (l.textContent === 'Mia Lista') l.classList.add('active'); });
                        showMyList();
                    } else if (section === 'cerca') {
                        updateUrlSection('cerca');
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        sidebarLinks.forEach(l => { if (l.textContent === 'Cerca') l.classList.add('active'); });
                        showSearch();
                    } else {
                        // Default: Film
                        updateUrlSection('film');
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
                        loadMovies();
                    }
                };
            }
        })
        .catch(() => {
            mainContent.innerHTML = '<div class="player-embed-wrap">Errore nel caricamento delle informazioni.</div>';
        });
}

// Transizione fade-in per i contenuti dinamici
function showContent(html) {
    const main = document.getElementById('mainContent');
    if (!main) return;
    main.style.opacity = 0;
    setTimeout(() => {
        main.innerHTML = html;
        main.style.transition = 'opacity 0.5s cubic-bezier(0.22,1,0.36,1)';
        main.style.opacity = 1;
    }, 200);
}

// Utility per gestire la lista in localStorage
function getMyList() {
    return JSON.parse(localStorage.getItem('myList') || '[]');
}
function setMyList(list) {
    localStorage.setItem('myList', JSON.stringify(list));
}
function isInMyList(id, type) {
    return getMyList().some(item => item.id === id && item.type === type);
}
function addToMyList(item, type) {
    const list = getMyList();
    if (!isInMyList(item.id, type)) {
        list.push({ id: item.id, type, poster_path: item.poster_path, title: item.title || item.name });
        setMyList(list);
    }
}
function removeFromMyList(id, type) {
    let list = getMyList();
    list = list.filter(item => !(item.id === id && item.type === type));
    setMyList(list);
}

// Modifica le funzioni di rendering per aggiungere/rimuovere dalla lista
function renderAddRemoveBtn(item, type) {
    if (isInMyList(item.id, type)) {
        return `<button class="play-btn remove-list-btn" data-tmdbid="${item.id}" data-type="${type}">Rimuovi da lista</button>`;
    } else {
        return `<button class="play-btn add-list-btn" data-tmdbid="${item.id}" data-type="${type}" data-poster="${item.poster_path || ''}" data-title="${item.title || item.name}">Aggiungi a lista</button>`;
    }
}

// Utility per creare la griglia con frecce
function renderCatalogGridWithArrows(inner, gridId = '', extraClass = '') {
    return `
    <div class="catalog-grid-wrap">
      <button class="catalog-scroll-arrow left" type="button" aria-label="Scorri a sinistra"><i class="fa fa-chevron-left"></i></button>
      <div class="catalog-grid${extraClass ? ' ' + extraClass : ''}"${gridId ? ` id="${gridId}"` : ''}>${inner}</div>
      <button class="catalog-scroll-arrow right" type="button" aria-label="Scorri a destra"><i class="fa fa-chevron-right"></i></button>
    </div>
  `;
}

// Scroll handler per tutte le griglie con frecce
function setupCatalogGridArrows() {
    document.querySelectorAll('.catalog-grid-wrap').forEach((wrap, idx) => {
        const grid = wrap.querySelector('.catalog-grid');
        const left = wrap.querySelector('.catalog-scroll-arrow.left');
        const right = wrap.querySelector('.catalog-scroll-arrow.right');
        if (!grid || !left || !right) return;
        left.onclick = () => grid.scrollBy({ left: -grid.offsetWidth * 0.8, behavior: 'smooth' });
        right.onclick = () => grid.scrollBy({ left: grid.offsetWidth * 0.8, behavior: 'smooth' });
        // Salva posizione scroll su localStorage
        const gridKey = window.location.search + '_grid_' + idx;
        grid.addEventListener('scroll', () => {
            localStorage.setItem(gridKey, grid.scrollLeft);
        });
        // Ripristina posizione scroll se presente
        setTimeout(() => {
            const saved = localStorage.getItem(gridKey);
            if (saved) grid.scrollLeft = parseInt(saved, 10);
        }, 0);
    });
}

// Scroll handler per stagioni ed episodi
function setupEpisodeSeasonArrows() {
    // Stagioni
    document.querySelectorAll('.season-cards-wrap-wrap').forEach((wrap, idx) => {
        const grid = wrap.querySelector('.season-cards-wrap');
        const left = wrap.querySelector('.season-cards-arrow.left');
        const right = wrap.querySelector('.season-cards-arrow.right');
        if (!grid || !left || !right) return;
        left.onclick = () => grid.scrollBy({ left: -grid.offsetWidth * 0.8, behavior: 'smooth' });
        right.onclick = () => grid.scrollBy({ left: grid.offsetWidth * 0.8, behavior: 'smooth' });
        // Mostra/nascondi le frecce in base allo scroll
        function updateArrows() {
            left.style.visibility = grid.scrollLeft > 5 ? 'visible' : 'hidden';
            right.style.visibility = (grid.scrollLeft + grid.offsetWidth < grid.scrollWidth - 5) ? 'visible' : 'hidden';
        }
        grid.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        setTimeout(updateArrows, 100);
    });
    // Episodi
    document.querySelectorAll('.episode-cards-wrap-wrap').forEach((wrap, idx) => {
        const grid = wrap.querySelector('.episode-cards-wrap');
        const left = wrap.querySelector('.episode-cards-arrow.left');
        const right = wrap.querySelector('.episode-cards-arrow.right');
        if (!grid || !left || !right) return;
        left.onclick = () => grid.scrollBy({ left: -grid.offsetWidth * 0.8, behavior: 'smooth' });
        right.onclick = () => grid.scrollBy({ left: grid.offsetWidth * 0.8, behavior: 'smooth' });
        function updateArrows() {
            left.style.visibility = grid.scrollLeft > 5 ? 'visible' : 'hidden';
            right.style.visibility = (grid.scrollLeft + grid.offsetWidth < grid.scrollWidth - 5) ? 'visible' : 'hidden';
        }
        grid.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        setTimeout(updateArrows, 100);
    });
}

// Modifica loadMovies
function loadMovies() {
    mainContent.innerHTML = '<h1>Film Popolari</h1>' + renderCatalogGridWithArrows('Caricamento...');
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/movie/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessun film trovato.';
            setupCatalogGridArrows();
            return;
        }
        filterItalianContent(allResults, 'movie').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessun film disponibile in italiano.';
                setupCatalogGridArrows();
                return;
            }
            const cards = filtered.map(movie => `
              <div class="catalog-card clickable-card" data-tmdbid="${movie.id}">
                  <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
                  <div class="catalog-title">${movie.title}</div>
              </div>
          `).join('');
            mainContent.querySelector('.catalog-grid').innerHTML = cards;
            setupCatalogGridArrows();
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    updateUrlContent('movie', tmdbId);
                    showPlayerWithInfo('movie', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
        setupCatalogGridArrows();
    });
}

// Modifica loadShows
function loadShows() {
    mainContent.innerHTML = '<h1>Serie TV Popolari</h1>' + renderCatalogGridWithArrows('Caricamento...');
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/tv/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie trovata.';
            setupCatalogGridArrows();
            return;
        }
        filterItalianContent(allResults, 'tv').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie disponibile in italiano.';
                setupCatalogGridArrows();
                return;
            }
            const cards = filtered.map(show => `
              <div class="catalog-card clickable-card" data-tmdbid="${show.id}">
                  <img src="https://image.tmdb.org/t/p/w300${show.poster_path}" alt="${show.name}" />
                  <div class="catalog-title">${show.name}</div>
              </div>
          `).join('');
            mainContent.querySelector('.catalog-grid').innerHTML = cards;
            setupCatalogGridArrows();
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    updateUrlContent('tv', tmdbId);
                    showPlayerWithInfo('tv', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
        setupCatalogGridArrows();
    });
}

// Modifica showSearch
function showSearch() {
    mainContent.innerHTML = `
        <h1>Cerca Film o Serie TV</h1>
        <form id="searchForm" class="search-form">
            <input type="text" id="searchInput" placeholder="Titolo..." autocomplete="off" required style="font-size:1.1rem;padding:0.5em 1em;border-radius:2em;border:none;width:70%;max-width:350px;outline:none;" />
        </form>
        <div class="search-results-wrap">
            <div class="search-movies-section">
                <h2 style="margin-top:1.5em;">Film</h2>
                ${renderCatalogGridWithArrows('', 'searchMoviesResults')}
            </div>
            <div class="search-shows-section">
                <h2 style="margin-top:2.5em;">Serie TV</h2>
                ${renderCatalogGridWithArrows('', 'searchShowsResults')}
            </div>
        </div>
    `;
    const form = document.getElementById('searchForm');
    const moviesDiv = document.getElementById('searchMoviesResults');
    const showsDiv = document.getElementById('searchShowsResults');
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    // Precompila la ricerca se presente nell'URL
    const urlParams = new URL(window.location).searchParams;
    const urlQuery = urlParams.get('query') || '';
    if (urlQuery) {
        searchInput.value = urlQuery;
        searchInput.dispatchEvent(new Event('input'));
    }
    searchInput.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        updateUrlSearchQuery(query);
        if (!query) {
            moviesDiv.innerHTML = '';
            showsDiv.innerHTML = '';
            setupCatalogGridArrows();
            return;
        }
        moviesDiv.innerHTML = 'Caricamento...';
        showsDiv.innerHTML = 'Caricamento...';
        searchTimeout = setTimeout(() => {
            Promise.all([
                fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=it-IT&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(r => r.json()),
                fetch(`https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&language=it-IT&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(r => r.json())
            ]).then(([movies, shows]) => {
                // Film
                if (movies && Array.isArray(movies.results) && movies.results.length) {
                    filterItalianContent(movies.results, 'movie').then(filteredMovies => {
                        if (filteredMovies.length) {
                            moviesDiv.innerHTML = filteredMovies.map(movie => `
                                <div class="catalog-card clickable-card" data-tmdbid="${movie.id}" data-type="movie">
                                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
                                    <div class="catalog-title">${movie.title}</div>
                                </div>
                            `).join('');
                        } else {
                            moviesDiv.innerHTML = 'Nessun film trovato in italiano.';
                        }
                        setupCatalogGridArrows();
                        mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                            card.addEventListener('click', function () {
                                const tmdbId = this.dataset.tmdbid;
                                const type = this.dataset.type;
                                updateUrlContent(type, tmdbId);
                                showPlayerWithInfo(type, tmdbId);
                            });
                        });
                    });
                } else {
                    moviesDiv.innerHTML = 'Nessun film trovato.';
                    setupCatalogGridArrows();
                }
                // Serie TV
                if (shows && Array.isArray(shows.results) && shows.results.length) {
                    filterItalianContent(shows.results, 'tv').then(filteredShows => {
                        if (filteredShows.length) {
                            showsDiv.innerHTML = filteredShows.map(show => `
                                <div class="catalog-card clickable-card" data-tmdbid="${show.id}" data-type="tv">
                                    <img src="https://image.tmdb.org/t/p/w300${show.poster_path}" alt="${show.name}" />
                                    <div class="catalog-title">${show.name}</div>
                                </div>
                            `).join('');
                        } else {
                            showsDiv.innerHTML = 'Nessuna serie trovata in italiano.';
                        }
                        setupCatalogGridArrows();
                        mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                            card.addEventListener('click', function () {
                                const tmdbId = this.dataset.tmdbid;
                                const type = this.dataset.type;
                                updateUrlContent(type, tmdbId);
                                showPlayerWithInfo(type, tmdbId);
                            });
                        });
                    });
                } else {
                    showsDiv.innerHTML = 'Nessuna serie trovata.';
                    setupCatalogGridArrows();
                }
            }).catch(() => {
                moviesDiv.innerHTML = 'Errore nella ricerca.';
                showsDiv.innerHTML = 'Errore nella ricerca.';
                setupCatalogGridArrows();
            });
        }, 350);
    });
    form.onsubmit = function (e) { e.preventDefault(); };
    setupCatalogGridArrows(); // Per le griglie vuote iniziali
}

// Implementa la visualizzazione della lista
function showMyList() {
    const list = getMyList();
    const movies = list.filter(item => item.type === 'movie');
    const shows = list.filter(item => item.type === 'tv');
    mainContent.innerHTML = `
        <h1>Mia Lista</h1>
        <div class="mylist-section">
            <h2 style="margin-top:1.5em;">Film</h2>
            ${renderCatalogGridWithArrows(movies.length ? movies.map(item => `
                <div class="catalog-card clickable-card" data-tmdbid="${item.id}" data-type="${item.type}">
                    <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title || item.name}" />
                    <div class="catalog-title">${item.title || item.name}</div>
                </div>
            `).join('') : 'Nessun film in lista.')}
        </div>
        <div class="mylist-section">
            <h2 style="margin-top:2.5em;">Serie TV</h2>
            ${renderCatalogGridWithArrows(shows.length ? shows.map(item => `
                <div class="catalog-card clickable-card" data-tmdbid="${item.id}" data-type="${item.type}">
                    <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title || item.name}" />
                    <div class="catalog-title">${item.title || item.name}</div>
                </div>
            `).join('') : 'Nessuna serie in lista.')}
        </div>
    `;
    setupCatalogGridArrows();
    // Listener per aprire il player cliccando sulla card
    mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
        card.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            const type = this.dataset.type;
            updateUrlContent(type, tmdbId);
            showPlayerWithInfo(type, tmdbId);
        });
    });
}

// Funzione per navigare senza .html nell'URL
function goPage(page) {
    let url = window.location.origin + '/';
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

// Gestione back/forward del browser
function renderFromUrl() {
    const urlParams = new URL(window.location).searchParams;
    const type = urlParams.get('type');
    const tmdb = urlParams.get('tmdb');
    const season = urlParams.get('season');
    const episode = urlParams.get('episode');
    if (type && tmdb) {
        showPlayerWithInfo(type, tmdb, season, episode);
        let section = 'Film';
        if (type === 'tv') section = 'Serie TV';
        sidebarLinks.forEach(l => l.classList.remove('active'));
        sidebarLinks.forEach(l => { if (l.textContent === section) l.classList.add('active'); });
        return;
    }
    const section = urlParams.get('section');
    let found = false;
    if (section === 'film') {
        sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
        loadMovies();
        found = true;
    } else if (section === 'serie-tv') {
        sidebarLinks.forEach(l => { if (l.textContent === 'Serie TV') l.classList.add('active'); });
        loadShows();
        found = true;
    } else if (section === 'mia-lista') {
        sidebarLinks.forEach(l => { if (l.textContent === 'Mia Lista') l.classList.add('active'); });
        showMyList();
        found = true;
    } else if (section === 'cerca') {
        sidebarLinks.forEach(l => { if (l.textContent === 'Cerca') l.classList.add('active'); });
        showSearch();
        found = true;
    }
    if (!found) {
        sidebarLinks.forEach(l => { if (l.textContent === 'Film') l.classList.add('active'); });
        loadMovies();
    }
}

window.addEventListener('DOMContentLoaded', renderFromUrl);
window.addEventListener('popstate', renderFromUrl);

