const _settings = {
    clientID: 'c9587c71088b4ad78b3f54fda5ba1544',
    redirectURI: 'http://localhost:3000/shows'
}

class Spotify {
    static authorize() {
        const params = new URLSearchParams({
            client_id: _settings.clientID,
            redirect_uri: _settings.redirectURI,
            response_type: 'token'
        }).toString();
        window.location.href = 'https://accounts.spotify.com/authorize?' + params;
    }
}

export default Spotify;
