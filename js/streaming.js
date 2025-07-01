// Gestione selezione sidebar
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const mainContent = document.querySelector('.main-content');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        if (this.textContent === 'Film') {
            loadMovies();
        } else if (this.textContent === 'Serie TV') {
            loadShows();
        } else if (this.textContent === 'Mia Lista') {
            showMyList();
        } else if (this.textContent === 'Cerca') {
            showSearch();
        }
    });
});

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



function loadMovies() {
    mainContent.innerHTML = '<h1>Film Popolari</h1><div class="catalog-grid">Caricamento...</div>';
    // Recupera più pagine di film popolari (ad esempio le prime 3 pagine)
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/movie/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        // Unisci tutti i risultati in un unico array
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessun film trovato.';
            return;
        }
        filterItalianContent(allResults, 'movie').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessun film disponibile in italiano.';
                return;
            }
            mainContent.querySelector('.catalog-grid').innerHTML = filtered.map(movie => `
                <div class="catalog-card clickable-card" data-tmdbid="${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
                    <div class="catalog-title">${movie.title}</div>
                </div>
            `).join('');
            // Aggiungi listener per aprire il player cliccando sulla card
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    showPlayerWithInfo('movie', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
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
    mainContent.innerHTML = '<h1>Serie TV Popolari</h1><div class="catalog-grid">Caricamento...</div>';
    // Recupera più pagine di serie popolari (ad esempio le prime 3 pagine)
    const pages = [1, 2, 3];
    Promise.all(pages.map(page =>
        fetch(`https://api.themoviedb.org/3/tv/popular?language=it-IT&page=${page}&api_key=55ecd6c5211c736b4c2f3b7d3342198d`).then(res => res.json())
    )).then(resultsArr => {
        // Unisci tutti i risultati in un unico array
        const allResults = resultsArr.flatMap(r => Array.isArray(r.results) ? r.results : []);
        if (!allResults.length) {
            mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie trovata.';
            return;
        }
        filterItalianContent(allResults, 'tv').then(filtered => {
            if (!filtered.length) {
                mainContent.querySelector('.catalog-grid').textContent = 'Nessuna serie disponibile in italiano.';
                return;
            }
            mainContent.querySelector('.catalog-grid').innerHTML = filtered.map(show => `
                <div class="catalog-card clickable-card" data-tmdbid="${show.id}">
                    <img src="https://image.tmdb.org/t/p/w300${show.poster_path}" alt="${show.name}" />
                    <div class="catalog-title">${show.name}</div>
                </div>
            `).join('');
            // Aggiungi listener per aprire il player cliccando sulla card della serie TV
            mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                card.addEventListener('click', function () {
                    const tmdbId = this.dataset.tmdbid;
                    showPlayerWithInfo('tv', tmdbId);
                });
            });
        });
    }).catch(() => {
        mainContent.querySelector('.catalog-grid').textContent = 'Errore nel caricamento.';
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
                const inList = isInMyList(data.id, 'movie');
                let infoBlock = `
                    <div class="info-flex info-flex-split">
                        <div class="info-poster-col">
                            <img class="info-poster-large" src="https://image.tmdb.org/t/p/w780${data.poster_path}" alt="${data.title}" />
                        </div>
                        <div class="info-details-col">
                            <h2>${data.title}</h2>
                            <p class="info-meta"><span>${data.release_date ? data.release_date.substring(0,4) : '-'}</span> &bull; <span>${(data.genres||[]).map(g=>g.name).join(', ')}</span></p>
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
                    <button class="back-btn" style="position:absolute;right:0;top:0;margin:2.5rem 2.5rem 0 0;z-index:2;">&larr; Torna a ${backLabel}</button>
                    <div class="content-info">${infoBlock}</div>
                `;
                // Listener per aggiungi/rimuovi da lista
                mainContent.querySelector('.add-remove-list-btn').onclick = function() {
                    if (isInMyList(data.id, 'movie')) {
                        removeFromMyList(data.id, 'movie');
                    } else {
                        addToMyList({ id: data.id, poster_path: data.poster_path, title: data.title }, 'movie');
                    }
                    showPlayerWithInfo('movie', data.id);
                };
                // Listener per aprire il player popup
                mainContent.querySelector('.play-btn-watch').onclick = () => showPlayer(embedUrl);
            } else {
                let seasons = (data.seasons||[]).filter(s=>s.season_number>0);
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
                                        <div class="ep-thumb-wrap">
                                            <img src="${imgSrc}" alt="Episodio ${ep.episode_number}" />
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
                            <img src="${s.poster_path ? `https://image.tmdb.org/t/p/w300${s.poster_path}` : (data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image')}" alt="${s.name}" />
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
                            <p class="info-meta"><span>${data.first_air_date ? data.first_air_date.substring(0,4) : '-'}</span> &bull; <span>${(data.genres||[]).map(g=>g.name).join(', ')}</span></p>
                            <div class="info-rating">
                                <span class="star">★</span> <span>${data.vote_average ? data.vote_average.toFixed(1) : '-'}/10</span>
                                <span class="vote-count">(${data.vote_count || 0} voti)</span>
                            </div>
                            <p class="info-overview">${data.overview || 'Nessuna descrizione.'}</p>
                            <button class="play-btn add-remove-list-btn" data-tmdbid="${data.id}" data-type="tv" data-poster="${data.poster_path || ''}" data-title="${data.name}">
                                ${isInMyList(data.id, 'tv') ? 'Rimuovi da lista' : 'Aggiungi a lista'}
                            </button>
                            <div class="season-cards-wrap">${seasonCards}</div>
                            <div class="episode-cards-wrap"></div>
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
                    <button class="back-btn" style="position:absolute;right:0;top:0;margin:2.5rem 2.5rem 0 0;z-index:2;">&larr; Torna a ${backLabel}</button>
                    <div class="content-info">${infoBlock}</div>
                `;
                // Listener cambio stagione tramite card
                mainContent.querySelectorAll('.season-card').forEach(card => {
                    card.addEventListener('click', function () {
                        mainContent.querySelectorAll('.season-card').forEach(c => c.classList.remove('selected'));
                        this.classList.add('selected');
                        renderEpisodes(this.dataset.season);
                    });
                });
                // Listener per aggiungi/rimuovi da lista nelle serie TV
                mainContent.querySelector('.add-remove-list-btn').onclick = function() {
                    if (isInMyList(data.id, 'tv')) {
                        removeFromMyList(data.id, 'tv');
                    } else {
                        addToMyList({ id: data.id, poster_path: data.poster_path, name: data.name }, 'tv');
                    }
                    showPlayerWithInfo('tv', data.id);
                };
                renderEpisodes(selectedSeason);
            }
            // Listener back
            const backBtn = mainContent.querySelector('.back-btn');
            backBtn.onclick = () => {
                const active = document.querySelector('.sidebar-link.active');
                if (active && active.textContent === 'Film') loadMovies();
                else if (active && active.textContent === 'Serie TV') loadShows();
                else if (active && active.textContent === 'Mia Lista') showMyList();
                else if (active && active.textContent === 'Cerca') showSearch();
            };
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

// Modifica showSearch per includere i bottoni lista
function showSearch() {
    mainContent.innerHTML = `
        <h1>Cerca Film o Serie TV</h1>
        <form id="searchForm" class="search-form">
            <input type="text" id="searchInput" placeholder="Titolo..." autocomplete="off" required style="font-size:1.1rem;padding:0.5em 1em;border-radius:2em;border:none;width:70%;max-width:350px;outline:none;" />
        </form>
        <div class="search-results-wrap">
            <div class="search-movies-section">
                <h2 style="margin-top:1.5em;">Film</h2>
                <div class="catalog-grid" id="searchMoviesResults"></div>
            </div>
            <div class="search-shows-section">
                <h2 style="margin-top:2.5em;">Serie TV</h2>
                <div class="catalog-grid" id="searchShowsResults"></div>
            </div>
        </div>
    `;
    const form = document.getElementById('searchForm');
    const moviesDiv = document.getElementById('searchMoviesResults');
    const showsDiv = document.getElementById('searchShowsResults');
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        if (!query) {
            moviesDiv.innerHTML = '';
            showsDiv.innerHTML = '';
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
                    moviesDiv.innerHTML = movies.results.map(movie => `
                        <div class="catalog-card clickable-card" data-tmdbid="${movie.id}" data-type="movie">
                            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
                            <div class="catalog-title">${movie.title}</div>
                        </div>
                    `).join('');
                } else {
                    moviesDiv.innerHTML = 'Nessun film trovato.';
                }
                // Serie TV
                if (shows && Array.isArray(shows.results) && shows.results.length) {
                    showsDiv.innerHTML = shows.results.map(show => `
                        <div class="catalog-card clickable-card" data-tmdbid="${show.id}" data-type="tv">
                            <img src="https://image.tmdb.org/t/p/w300${show.poster_path}" alt="${show.name}" />
                            <div class="catalog-title">${show.name}</div>
                        </div>
                    `).join('');
                } else {
                    showsDiv.innerHTML = 'Nessuna serie trovata.';
                }
                // Listener per aprire il player cliccando sulla card
                mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
                    card.addEventListener('click', function () {
                        const tmdbId = this.dataset.tmdbid;
                        const type = this.dataset.type;
                        showPlayerWithInfo(type, tmdbId);
                    });
                });
            }).catch(() => {
                moviesDiv.innerHTML = 'Errore nella ricerca.';
                showsDiv.innerHTML = 'Errore nella ricerca.';
            });
        }, 350);
    });
    form.onsubmit = function(e) { e.preventDefault(); };
}

// Implementa la visualizzazione della lista
function showMyList() {
    const list = getMyList();
    const movies = list.filter(item => item.type === 'movie');
    const shows = list.filter(item => item.type === 'tv');
    mainContent.innerHTML = '<h1>Mia Lista</h1>' +
        `<div class="mylist-section">
            <h2 style="margin-top:1.5em;">Film</h2>` +
            (movies.length ? `<div class="catalog-grid">${movies.map(item => `
                <div class="catalog-card clickable-card" data-tmdbid="${item.id}" data-type="${item.type}">
                    <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title || item.name}" />
                    <div class="catalog-title">${item.title || item.name}</div>
                </div>
            `).join('')}</div>` : '<div class="catalog-grid">Nessun film in lista.</div>') +
        `</div>
        <div class="mylist-section">
            <h2 style="margin-top:2.5em;">Serie TV</h2>` +
            (shows.length ? `<div class="catalog-grid">${shows.map(item => `
                <div class="catalog-card clickable-card" data-tmdbid="${item.id}" data-type="${item.type}">
                    <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title || item.name}" />
                    <div class="catalog-title">${item.title || item.name}</div>
                </div>
            `).join('')}</div>` : '<div class="catalog-grid">Nessuna serie in lista.</div>') +
        `</div>`;
    mainContent.querySelectorAll('.catalog-card.clickable-card').forEach(card => {
        card.addEventListener('click', function () {
            const tmdbId = this.dataset.tmdbid;
            const type = this.dataset.type;
            showPlayerWithInfo(type, tmdbId);
        });
    });
}

// Funzione per navigare senza .html nell'URL
function goPage(page) {
    let url = window.location.origin + '/';
    fetch(url + page, {method: 'HEAD'}).then(resp => {
        if (resp.ok) {
            window.location.href = url + page;
        } else {
            window.location.href = url + page + '.html';
        }
    }).catch(() => {
        window.location.href = url + page + '.html';
    });
}

