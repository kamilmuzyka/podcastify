const _settings = {
    clientID: 'c9587c71088b4ad78b3f54fda5ba1544',
    redirectURI: 'http://localhost:3000/shows'
}

class Spotify {

    // The application checks the access data (token and its expiry time) once initialised
    // This process repeats every 60 minutes - the default validity time of a token
    // Access data is always stored in the localStorage
    // If it's not or if the token has expired, then the application checks the URL hash for a fresh one
    // If both localStorage and the URL hash are empty, then the user is redirected to the Spotify login page
    static init(redirect) {
        function checkLocalStorage() {
            const access = JSON.parse(localStorage.getItem('access'));
            if (access) {
                // Check if up-to-date
                const expires = access.expires;
                const now = (new Date()).getTime();
                return (now < expires) ? true : false;
            }
            return false;
        }

        function checkHash() {
            const hash = window.location.hash;
            return hash ? true : false;
        }

        const isLocalStorage = checkLocalStorage();
        if (isLocalStorage === true) {
            redirect('/shows');
            return;
        }

        const isHash = checkHash();
        console.log(isHash);
        if (isHash === true) {
            const hash = window.location.hash;
            const replaced = hash.replace('#', '?');
            const params = new URLSearchParams(replaced);
            const token = params.get('access_token');
            const expiresAddOn = params.get('expires_in') * 1000;
            const expiresBase = + (new Date()).getTime();
            const expires = expiresBase + expiresAddOn;
            localStorage.setItem('access', JSON.stringify({
                token,
                expires
            }));
            redirect('/shows');
            return;
        }
        redirect('/');
    }

    static authorize() {
        const params = new URLSearchParams({
            client_id: _settings.clientID,
            redirect_uri: _settings.redirectURI,
            response_type: 'token'
        }).toString();
        window.location.href = 'https://accounts.spotify.com/authorize?' + params;
    }

    static async getPodcasts(query) {
        return 'Search Results';
    }
}

export default Spotify;

 // Dummy token
// const now = (new Date()).getTime();
// localStorage.setItem('access', JSON.stringify({token: 'XAAFAF', expires: now + 3600*1000}))

// Login Action
