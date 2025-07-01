// Funzione per aprire il canale nell'iframe
const grid = document.getElementById('channelGrid');
const videoContainer = document.getElementById('videoContainer');
const videoIframe = document.getElementById('videoIframe');
grid.addEventListener('click', function (e) {
    const btn = e.target.closest('a.button1');
    if (btn && btn.dataset.link) {
        e.preventDefault();
        // Prova ad aprire direttamente il link in una nuova scheda se l'iframe fallisce
        videoIframe.src = btn.dataset.link;
        videoContainer.style.display = 'block';
        videoIframe.onload = function () {
            // Se l'iframe carica, non fare nulla
        };
        videoIframe.onerror = function () {
            window.open(btn.dataset.link, '_blank');
        };
        // Timeout di fallback: se dopo 5s l'iframe non carica, apri in nuova scheda
        setTimeout(function () {
            if (!videoIframe.contentWindow || videoIframe.contentWindow.length === 0) {
                window.open(btn.dataset.link, '_blank');
            }
        }, 5000);
        videoIframe.scrollIntoView({ behavior: 'smooth' });
    }
});
// Funzione per chiudere l'iframe
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function () {
    videoContainer.style.display = 'none';
    videoIframe.src = '';
});
// Funzione per tornare alla home senza .html nell'URL
function goHome() {
    // Se sei su /live.html o altro, vai su / oppure /index (senza estensione)
    let url = window.location.origin + '/';
    // Se esiste una route /index, va lì, altrimenti solo /
    fetch(url + 'index', {method: 'HEAD'}).then(resp => {
        if (resp.ok) {
            window.location.href = url + 'index';
        } else {
            window.location.href = url;
        }
    }).catch(() => {
        window.location.href = url;
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