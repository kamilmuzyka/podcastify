const _settings = {
    clientID: 'c9587c71088b4ad78b3f54fda5ba1544',
    redirectURI: 'http://localhost:3000'
}

class Spotify {
    static getToken() {
        const hash = window.location.hash;
        if (hash) {
            const replaced = hash.replace('#', '?');
            const params = new URLSearchParams(replaced);
            return params.get('access_token');
        }
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