// Funzione per navigare senza .html nell'URL
function goPage(page) {
    let url = window.location.origin + '/';
    if (page === 'index') {
        window.location.href = url;
        return;
    }
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
