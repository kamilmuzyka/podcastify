const settings = {
    clientID: 'c9587c71088b4ad78b3f54fda5ba1544',
    redirectURI: 'http://localhost:3000/'
}

class Auth {
    static logIn() {
        const params = new URLSearchParams({
            client_id: settings.clientID,
            redirect_uri: settings.redirectURI,
            response_type: 'token'
        }).toString();
        window.location.href = 'https://accounts.spotify.com/authorize?' + params;
    }

    static logOut() {
        localStorage.removeItem('access');
        window.location.href = '/';
    }

    static check() {
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

export default Auth;