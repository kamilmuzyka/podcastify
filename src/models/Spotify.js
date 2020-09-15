class Spotify {
    static retrieveAccessToken() {
        const access = localStorage.getItem('access');

        if(!access) {
            throw new Error('No access token found');
        }

        const { token } = JSON.parse(access);
        return token;
    }

    static async getSearchResults(query) {
        const token = this.retrieveAccessToken();

        if (!token) {
            throw new Error('No token provided');
        }

        try {
            const data = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show,episode&limit=50`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await data.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getShowDetails(id) {
        const token = this.retrieveAccessToken();

        if (!token) {
            throw new Error('No token provided');
        }

        try {
            const data = await fetch(`https://api.spotify.com/v1/shows/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await data.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getEpisodeDetails(id) {
        const token = this.retrieveAccessToken();

        if (!token) {
            throw new Error('No token provided');
        }

        try {
            const data = await fetch(`https://api.spotify.com/v1/episodes/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await data.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getUserProfile() {
        const token = this.retrieveAccessToken();

        if (!token) {
            throw new Error('No token provided');
        }

        try {
            const data = await fetch(`https://api.spotify.com/v1/me`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await data.json();
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default Spotify;