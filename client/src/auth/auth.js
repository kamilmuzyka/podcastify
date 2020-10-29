import { CONFIG } from './config';

class Auth {
    logIn() {
        const params = new URLSearchParams({
            client_id: CONFIG.clientID,
            redirect_uri: CONFIG.redirectURI,
            scope: CONFIG.scope,
            response_type: 'token'
        }).toString();
        window.location.href = 'https://accounts.spotify.com/authorize?' + params;
    }

    logOut() {
        localStorage.removeItem('access');
        window.location.href = '/';
    }

    check() {
        function accessDataAvailable() {
            const access = JSON.parse(localStorage.getItem('access'));
            if (access) {
                const expires = access.expires;
                const now = Date.now();
                return now < expires;
            }
            return false;
        }

        function hashAvailable() {
            const hash = window.location.hash;
            return hash ? true : false;
        }

        if (accessDataAvailable()) {
            return true;
        }

        if (hashAvailable()) {
            const hash = window.location.hash;
            const replaced = hash.replace('#', '?');
            const params = new URLSearchParams(replaced);
            const token = params.get('access_token');
            const expiresAddOn = params.get('expires_in') * 1000;
            const expiresBase = Date.now();
            const expires = expiresBase + expiresAddOn;
            localStorage.setItem('access', JSON.stringify({
                token,
                expires
            }));
            return true;
        }

        return false;
    }
}

export default new Auth();