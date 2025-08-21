// Netflix Clone JavaScript Application
class NetflixApp {
    constructor() {
        this.apiKey = '55ecd6c5211c736b4c2f3b7d3342198d';
        this.apiBaseUrl = 'https://api.themoviedb.org/3';
        this.imageBaseUrl = 'https://image.tmdb.org/t/p/';
        this.vixSrcBaseUrl = 'https://vixsrc.to';
        
        this.currentPage = 'home';
        this.currentContent = null;
        this.library = JSON.parse(localStorage.getItem('netflix-library') || '[]');
        this.genres = [];
        this.searchTimeout = null;
        this.searchActive = false;
        
        this.initializeApp();
    }

    async initializeApp() {
        this.setupEventListeners();
        await this.loadGenres();
        
        // Handle URL hash on page load and hash changes
        window.addEventListener('hashchange', () => this.handleUrlHash());
        await this.handleUrlHash();
    }

    async handleUrlHash() {
        const hash = window.location.hash.slice(1); // Remove the # symbol
        if (!hash) {
            await this.loadHomePage();
            this.showPage('home');
            return;
        }

        const parts = hash.split('/');
        const page = parts[0];
        
        if (parts.length === 3 && (parts[1] === 'movie' || parts[1] === 'tv')) {
            // Handle content details: #page/type/id
            const type = parts[1];
            const id = parts[2];
            
            // Load the basic content first
            await this.loadHomePage();
            this.showPage(page);
            
            // Then fetch and show the specific content
            const content = await this.apiRequest(`/${type}/${id}`);
            if (content) {
                this.showContentDetails(content, type);
            }
        } else {
            // Handle simple page navigation
            await this.loadHomePage();
            this.showPage(page);
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                this.navigateToPage(page);
            });
        });

        // Search functionality
        const searchToggle = document.getElementById('searchToggle');
        const searchInput = document.getElementById('searchInput');

        searchToggle.addEventListener('click', () => {
            this.searchActive = !this.searchActive;
            
            if (this.searchActive) {
                searchInput.classList.add('active');
                searchInput.focus();
            } else {
                searchInput.classList.remove('active');
                searchInput.value = '';
                // Return to previous page if currently on search
                if (this.currentPage === 'search') {
                    this.navigateToPage('home');
                }
            }
        });

        searchInput.addEventListener('input', (e) => {
            clearTimeout(this.searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length > 2) {
                this.searchTimeout = setTimeout(() => this.performSearch(query), 500);
            } else if (query.length === 0 && this.currentPage === 'search') {
                this.navigateToPage('home');
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query.length > 0) {
                    this.performSearch(query);
                }
            }
        });

        // Click outside to close search
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && this.searchActive) {
                this.searchActive = false;
                searchInput.classList.remove('active');
                if (this.currentPage === 'search') {
                    this.navigateToPage('home');
                }
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Scroll handler for navbar
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Filter handlers
        document.getElementById('movieGenreFilter').addEventListener('change', (e) => {
            this.loadMoviesPage(e.target.value);
        });

        document.getElementById('movieSortFilter').addEventListener('change', (e) => {
            this.loadMoviesPage(document.getElementById('movieGenreFilter').value, e.target.value);
        });

        document.getElementById('tvGenreFilter').addEventListener('change', (e) => {
            this.loadTVPage(e.target.value);
        });

        document.getElementById('tvSortFilter').addEventListener('change', (e) => {
            this.loadTVPage(document.getElementById('tvGenreFilter').value, e.target.value);
        });

        // Season selector
        document.getElementById('seasonSelect').addEventListener('change', (e) => {
            if (e.target.value) {
                this.loadEpisodes(this.currentContent.id, e.target.value);
            }
        });

        // Player back button
        document.getElementById('playerBackBtn').addEventListener('click', () => {
            this.goBackFromPlayer();
        });
    }

    async apiRequest(endpoint, params = {}) {
        try {
            const queryParams = new URLSearchParams({
                api_key: this.apiKey,
                language: 'it-IT',
                ...params
            });

            const response = await fetch(`${this.apiBaseUrl}${endpoint}?${queryParams}`);
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Request failed:', error);
            this.showToast('Errore nel caricamento dei dati');
            return null;
        }
    }

    async loadGenres() {
        try {
            const [movieGenres, tvGenres] = await Promise.all([
                this.apiRequest('/genre/movie/list'),
                this.apiRequest('/genre/tv/list')
            ]);

            if (movieGenres && tvGenres) {
                this.genres = {
                    movie: movieGenres.genres || [],
                    tv: tvGenres.genres || []
                };

                this.populateGenreFilters();
            }
        } catch (error) {
            console.error('Failed to load genres:', error);
        }
    }

    populateGenreFilters() {
        const movieGenreFilter = document.getElementById('movieGenreFilter');
        const tvGenreFilter = document.getElementById('tvGenreFilter');

        this.genres.movie.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.id;
            option.textContent = genre.name;
            movieGenreFilter.appendChild(option);
        });

        this.genres.tv.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.id;
            option.textContent = genre.name;
            tvGenreFilter.appendChild(option);
        });
    }

    navigateToPage(page) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const pageLink = document.querySelector(`[data-page="${page}"]`);
        if (pageLink) {
            pageLink.classList.add('active');
        }
        
        document.getElementById('navMenu').classList.remove('active');
        
        // Update URL hash for page navigation
        window.location.hash = page;

        switch (page) {
            case 'home':
                this.loadHomePage();
                break;
            case 'movies':
                this.loadMoviesPage();
                break;
            case 'tv':
                this.loadTVPage();
                break;
            case 'library':
                this.loadLibraryPage();
                break;
        }

        this.showPage(page);
        this.currentPage = page;
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });

        const targetPage = document.getElementById(pageId + 'Page');
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('fade-in');
        }
    }

    async loadHomePage() {
        try {
            this.showLoadingSpinner();

            const [popularMovies, popularTV, trendingAll] = await Promise.all([
                this.apiRequest('/movie/popular', { page: 1 }),
                this.apiRequest('/tv/popular', { page: 1 }),
                this.apiRequest('/trending/all/day')
            ]);

            if (trendingAll && trendingAll.results && trendingAll.results.length > 0) {
                this.setupHeroBanner(trendingAll.results[0]);
            }

            const contentSections = document.getElementById('contentSections');
            contentSections.innerHTML = '';

            if (popularMovies && popularMovies.results) {
                this.createContentRow('Film Popolari', popularMovies.results, 'movie');
            }

            if (popularTV && popularTV.results) {
                this.createContentRow('Serie TV Popolari', popularTV.results, 'tv');
            }

            // Load genre-specific content
            const actionMovies = await this.apiRequest('/discover/movie', { with_genres: 28, page: 1 });
            if (actionMovies && actionMovies.results) {
                this.createContentRow('Film d\'Azione', actionMovies.results, 'movie');
            }

            const comedyMovies = await this.apiRequest('/discover/movie', { with_genres: 35, page: 1 });
            if (comedyMovies && comedyMovies.results) {
                this.createContentRow('Commedie', comedyMovies.results, 'movie');
            }

            const dramaTV = await this.apiRequest('/discover/tv', { with_genres: 18, page: 1 });
            if (dramaTV && dramaTV.results) {
                this.createContentRow('Serie TV Drammatiche', dramaTV.results, 'tv');
            }

            this.hideLoadingSpinner();
        } catch (error) {
            console.error('Failed to load home page:', error);
            this.hideLoadingSpinner();
        }
    }

    setupHeroBanner(content) {
        const heroBanner = document.getElementById('heroBanner');
        const heroTitle = document.getElementById('heroTitle');
        const heroDescription = document.getElementById('heroDescription');
        const heroPlayBtn = document.getElementById('heroPlayBtn');
        const heroInfoBtn = document.getElementById('heroInfoBtn');

        const title = content.title || content.name;
        const backdropUrl = content.backdrop_path 
            ? `${this.imageBaseUrl}original${content.backdrop_path}`
            : '';

        if (backdropUrl) {
            this.loadImageWithFallback(backdropUrl, (url) => {
                heroBanner.style.backgroundImage = `url(${url})`;
            });
        }

        heroTitle.textContent = title;
        heroDescription.textContent = this.truncateText(content.overview || 'Nessuna descrizione disponibile.', 200);

        const contentType = content.title ? 'movie' : 'tv';

        heroPlayBtn.onclick = () => this.playContent(content, contentType);
        heroInfoBtn.onclick = () => this.showContentDetails(content, contentType);
    }

    createContentRow(title, items, type) {
        const contentSections = document.getElementById('contentSections');

        const rowDiv = document.createElement('div');
        rowDiv.className = 'content-row';

        const titleElement = document.createElement('h2');
        titleElement.className = 'row-title';
        titleElement.textContent = title;

        const rowContent = document.createElement('div');
        rowContent.className = 'row-content';

        items.forEach(item => {
            const card = this.createContentCard(item, type);
            rowContent.appendChild(card);
        });

        rowDiv.appendChild(titleElement);
        rowDiv.appendChild(rowContent);
        contentSections.appendChild(rowDiv);
    }

    createContentCard(item, type) {
        const card = document.createElement('div');
        card.className = 'content-card';

        const title = item.title || item.name;
        const posterPath = item.poster_path;

        if (posterPath) {
            const img = document.createElement('img');
            img.className = 'card-image loading';
            img.alt = title;
            
            const posterUrl = `${this.imageBaseUrl}w500${posterPath}`;
            
            this.loadImageWithFallback(posterUrl, (url) => {
                img.src = url;
                img.classList.remove('loading');
            }, () => {
                // Fallback for failed image load
                card.innerHTML = this.createFallbackCard(item, type);
            });

            card.appendChild(img);
        } else {
            // No poster available
            card.innerHTML = this.createFallbackCard(item, type);
        }

        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';

        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;

        const cardMeta = document.createElement('div');
        cardMeta.className = 'card-meta';

        const year = document.createElement('span');
        const releaseDate = item.release_date || item.first_air_date;
        year.textContent = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';

        const rating = document.createElement('span');
        rating.className = 'card-rating';
        rating.innerHTML = `<i class="fas fa-star"></i> ${item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}`;

        cardMeta.appendChild(year);
        cardMeta.appendChild(rating);

        overlay.appendChild(cardTitle);
        overlay.appendChild(cardMeta);

        if (!posterPath) {
            // For fallback cards, overlay should always be visible
            overlay.style.opacity = '1';
            overlay.style.background = 'rgba(0, 0, 0, 0.7)';
        }

        card.appendChild(overlay);

        card.addEventListener('click', () => this.showContentDetails(item, type));

        return card;
    }

    createFallbackCard(item, type) {
        const title = item.title || item.name;
        const releaseDate = item.release_date || item.first_air_date;
        const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
        const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';

        return `
            <div class="card-fallback">
                <i class="fas ${type === 'movie' ? 'fa-film' : 'fa-tv'}"></i>
                <div class="card-title">${title}</div>
                <div class="card-meta">
                    <span>${year}</span>
                    <span class="card-rating"><i class="fas fa-star"></i> ${rating}</span>
                </div>
            </div>
        `;
    }

    loadImageWithFallback(url, onSuccess, onError) {
        const img = new Image();
        img.onload = () => onSuccess(url);
        img.onerror = () => {
            if (onError) onError();
        };
        img.src = url;
    }

    async loadMoviesPage(genreId = '', sortBy = 'popularity.desc') {
        try {
            this.showLoadingSpinner();

            const params = {
                page: 1,
                sort_by: sortBy
            };

            if (genreId) {
                params.with_genres = genreId;
            }

            const response = await this.apiRequest('/discover/movie', params);

            if (response && response.results) {
                this.populateGrid('moviesGrid', response.results, 'movie');
            }

            this.hideLoadingSpinner();
        } catch (error) {
            console.error('Failed to load movies:', error);
            this.hideLoadingSpinner();
        }
    }

    async loadTVPage(genreId = '', sortBy = 'popularity.desc') {
        try {
            this.showLoadingSpinner();

            const params = {
                page: 1,
                sort_by: sortBy
            };

            if (genreId) {
                params.with_genres = genreId;
            }

            const response = await this.apiRequest('/discover/tv', params);

            if (response && response.results) {
                this.populateGrid('tvGrid', response.results, 'tv');
            }

            this.hideLoadingSpinner();
        } catch (error) {
            console.error('Failed to load TV shows:', error);
            this.hideLoadingSpinner();
        }
    }

    loadLibraryPage() {
        const libraryGrid = document.getElementById('libraryGrid');
        
        if (this.library.length === 0) {
            libraryGrid.innerHTML = `
                <div class="empty-library">
                    <i class="fas fa-bookmark"></i>
                    <h3>La tua libreria è vuota</h3>
                    <p>Aggiungi contenuti alla tua libreria per guardarli più tardi</p>
                </div>
            `;
            return;
        }

        libraryGrid.innerHTML = '';
        this.library.forEach(item => {
            const card = this.createContentCard(item.content, item.type);
            libraryGrid.appendChild(card);
        });
    }

    populateGrid(gridId, items, type) {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';

        items.forEach(item => {
            const card = this.createContentCard(item, type);
            grid.appendChild(card);
        });
    }

    async performSearch(query) {
        try {
            this.showLoadingSpinner();

            const response = await this.apiRequest('/search/multi', { query });

            if (response && response.results) {
                const filteredResults = response.results.filter(item => 
                    (item.media_type === 'movie' || item.media_type === 'tv') && 
                    (item.poster_path || item.title || item.name)
                );

                document.getElementById('searchQuery').textContent = `per "${query}"`;
                
                const searchGrid = document.getElementById('searchGrid');
                if (filteredResults.length === 0) {
                    searchGrid.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <h3>Nessun risultato trovato</h3>
                            <p>Prova a cercare con parole chiave diverse</p>
                        </div>
                    `;
                } else {
                    searchGrid.innerHTML = '';
                    filteredResults.forEach(item => {
                        const type = item.media_type;
                        const card = this.createContentCard(item, type);
                        searchGrid.appendChild(card);
                    });
                }

                this.showPage('search');
            }

            this.hideLoadingSpinner();
        } catch (error) {
            console.error('Search failed:', error);
            this.hideLoadingSpinner();
            this.showToast('Errore durante la ricerca');
        }
    }

    async showContentDetails(content, type) {
        try {
            this.showLoadingSpinner();

            // Update URL hash with content type and ID
            window.location.hash = `${this.currentPage}/${type}/${content.id}`;

            const detailsResponse = await this.apiRequest(`/${type}/${content.id}`, {
                append_to_response: 'credits,videos'
            });

            if (detailsResponse) {
                this.currentContent = { ...detailsResponse, type };
                this.populateDetailsPage(detailsResponse, type);

                if (type === 'tv') {
                    await this.loadSeasons(detailsResponse);
                }

                this.showPage('details');
            }

            this.hideLoadingSpinner();
        } catch (error) {
            console.error('Failed to load content details:', error);
            this.hideLoadingSpinner();
        }
    }

    populateDetailsPage(content, type) {
        const detailsPage = document.getElementById('detailsPage');
        const detailsHero = detailsPage.querySelector('.details-hero');
        
        const backdropUrl = content.backdrop_path 
            ? `${this.imageBaseUrl}original${content.backdrop_path}`
            : '';
        
        if (backdropUrl) {
            this.loadImageWithFallback(backdropUrl, (url) => {
                detailsHero.style.backgroundImage = `url(${url})`;
            });
        }

        document.getElementById('detailsTitle').textContent = content.title || content.name;
        
        const year = content.release_date || content.first_air_date;
        document.getElementById('detailsYear').textContent = year ? new Date(year).getFullYear() : 'N/A';
        
        document.getElementById('detailsRating').innerHTML = 
            `<i class="fas fa-star"></i> ${content.vote_average ? content.vote_average.toFixed(1) : 'N/A'}`;
        
        const duration = type === 'movie' 
            ? `${content.runtime || 0} min`
            : `${content.number_of_seasons || 0} stagioni`;
        document.getElementById('detailsDuration').textContent = duration;

        document.getElementById('detailsDescription').textContent = 
            content.overview || 'Nessuna descrizione disponibile.';

        // Genres
        const genresContainer = document.getElementById('detailsGenres');
        genresContainer.innerHTML = '';
        if (content.genres) {
            content.genres.forEach(genre => {
                const genreTag = document.createElement('span');
                genreTag.className = 'genre-tag';
                genreTag.textContent = genre.name;
                genresContainer.appendChild(genreTag);
            });
        }

        // Buttons
        const playBtn = document.getElementById('detailsPlayBtn');
        const libraryBtn = document.getElementById('detailsLibraryBtn');

        playBtn.onclick = () => this.playContent(content, type);

        const isInLibrary = this.library.some(item => item.content.id === content.id && item.type === type);
        libraryBtn.innerHTML = isInLibrary 
            ? '<i class="fas fa-check"></i> Nella Libreria'
            : '<i class="fas fa-plus"></i> La mia Libreria';
        
        libraryBtn.onclick = () => this.toggleLibrary(content, type);

        // Cast
        this.populateCast(content.credits);

        // Show/hide seasons section
        const seasonsSection = document.getElementById('seasonsSection');
        if (type === 'tv') {
            seasonsSection.classList.remove('hidden');
        } else {
            seasonsSection.classList.add('hidden');
        }
    }

    populateCast(credits) {
        const castList = document.getElementById('castList');
        castList.innerHTML = '';

        if (credits && credits.cast) {
            const mainCast = credits.cast.slice(0, 10);
            
            mainCast.forEach(person => {
                const castMember = document.createElement('div');
                castMember.className = 'cast-member';

                const photo = document.createElement('img');
                photo.className = 'cast-photo';
                photo.alt = person.name;

                if (person.profile_path) {
                    const profileUrl = `${this.imageBaseUrl}w185${person.profile_path}`;
                    this.loadImageWithFallback(profileUrl, (url) => {
                        photo.src = url;
                    }, () => {
                        photo.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="%23564D4D"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 7H10.5L9 4L3 7V9H21ZM21 10H3V15C3 16.1 3.9 17 5 17V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V17C20.1 17 21 16.1 21 15V10Z"/></svg>';
                    });
                } else {
                    photo.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="%23564D4D"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 7H10.5L9 4L3 7V9H21ZM21 10H3V15C3 16.1 3.9 17 5 17V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V17C20.1 17 21 16.1 21 15V10Z"/></svg>';
                }

                const name = document.createElement('div');
                name.className = 'cast-name';
                name.textContent = person.name;

                const character = document.createElement('div');
                character.className = 'cast-character';
                character.textContent = person.character || 'Personaggio sconosciuto';

                castMember.appendChild(photo);
                castMember.appendChild(name);
                castMember.appendChild(character);

                castList.appendChild(castMember);
            });
        }
    }

    async loadSeasons(tvShow) {
        const seasonSelect = document.getElementById('seasonSelect');
        seasonSelect.innerHTML = '<option value="">Seleziona stagione</option>';

        if (tvShow.seasons) {
            tvShow.seasons.forEach(season => {
                if (season.season_number > 0) {
                    const option = document.createElement('option');
                    option.value = season.season_number;
                    option.textContent = `Stagione ${season.season_number}`;
                    seasonSelect.appendChild(option);
                }
            });
        }
    }

    async loadEpisodes(tvId, seasonNumber) {
        try {
            const seasonData = await this.apiRequest(`/tv/${tvId}/season/${seasonNumber}`);

            if (seasonData && seasonData.episodes) {
                const episodesList = document.getElementById('episodesList');
                episodesList.innerHTML = '';

                seasonData.episodes.forEach(episode => {
                    const episodeCard = document.createElement('div');
                    episodeCard.className = 'episode-card';

                    const airDate = episode.air_date ? new Date(episode.air_date).toLocaleDateString('it-IT') : 'Data sconosciuta';

                    episodeCard.innerHTML = `
                        <div class="episode-title">${episode.name}</div>
                        <div class="episode-meta">
                            Episodio ${episode.episode_number} • ${airDate} • ${episode.runtime || 0} min
                        </div>
                        <div class="episode-description">
                            ${this.truncateText(episode.overview || 'Nessuna descrizione disponibile.', 150)}
                        </div>
                    `;

                    episodeCard.addEventListener('click', () => {
                        this.playTVEpisode(tvId, seasonNumber, episode.episode_number, episode.name);
                    });

                    episodesList.appendChild(episodeCard);
                });
            }
        } catch (error) {
            console.error('Failed to load episodes:', error);
        }
    }

    playContent(content, type, seasonNumber = null, episodeNumber = null) {
        const playerTitle = document.getElementById('playerTitle');
        const playerIframe = document.getElementById('playerIframe');

        let videoUrl = '';
        let title = content.title || content.name;

        if (type === 'movie') {
            videoUrl = `${this.vixSrcBaseUrl}/movie/${content.id}?lang=it&primaryColor=E50914&secondaryColor=FFFFFF&autoplay=false`;
        } else if (type === 'tv' && seasonNumber && episodeNumber) {
            videoUrl = `${this.vixSrcBaseUrl}/tv/${content.id}/${seasonNumber}/${episodeNumber}?lang=it&primaryColor=E50914&secondaryColor=FFFFFF&autoplay=false`;
            title += ` - S${seasonNumber}E${episodeNumber}`;
        } else if (type === 'tv') {
            videoUrl = `${this.vixSrcBaseUrl}/tv/${content.id}/1/1?lang=it&primaryColor=E50914&secondaryColor=FFFFFF&autoplay=false`;
            title += ' - S1E1';
        }

        playerTitle.textContent = title;
        playerIframe.src = videoUrl;

        this.showPage('player');
    }

    playTVEpisode(tvId, seasonNumber, episodeNumber, episodeTitle) {
        const content = this.currentContent;
        const playerTitle = document.getElementById('playerTitle');
        const playerIframe = document.getElementById('playerIframe');

        const videoUrl = `${this.vixSrcBaseUrl}/tv/${tvId}/${seasonNumber}/${episodeNumber}?lang=it&primaryColor=E50914&secondaryColor=FFFFFF&autoplay=false`;
        const title = `${content.name} - ${episodeTitle}`;

        playerTitle.textContent = title;
        playerIframe.src = videoUrl;

        this.showPage('player');
    }

    goBackFromPlayer() {
        document.getElementById('playerIframe').src = '';
        this.showPage('details');
    }

    toggleLibrary(content, type) {
        const existingIndex = this.library.findIndex(item => 
            item.content.id === content.id && item.type === type
        );

        if (existingIndex > -1) {
            this.library.splice(existingIndex, 1);
            this.showToast('Rimosso dalla libreria');
        } else {
            this.library.push({ content, type });
            this.showToast('Aggiunto alla libreria');
        }

        localStorage.setItem('netflix-library', JSON.stringify(this.library));

        // Update button
        const libraryBtn = document.getElementById('detailsLibraryBtn');
        const isInLibrary = existingIndex === -1;
        libraryBtn.innerHTML = isInLibrary 
            ? '<i class="fas fa-check"></i> Nella Libreria'
            : '<i class="fas fa-plus"></i> La mia Libreria';

        // Reload library page if currently viewing it
        if (this.currentPage === 'library') {
            this.loadLibraryPage();
        }
    }

    showLoadingSpinner() {
        document.getElementById('loadingSpinner').classList.remove('hidden');
    }

    hideLoadingSpinner() {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        toastMessage.textContent = message;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength).trim() + '...';
    }

    getGenreName(genreId, type) {
        const genreList = this.genres[type] || [];
        const genre = genreList.find(g => g.id === genreId);
        return genre ? genre.name : 'Sconosciuto';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NetflixApp();
});