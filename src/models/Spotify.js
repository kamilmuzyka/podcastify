class Spotify {
    static retrieveAccessToken() {
        const access = localStorage.getItem('access');
        if (!access) {
            throw new Error('No access token found');
        }
        const {
            token
        } = JSON.parse(access);
        return token;
    }

    static async getSearchResults(query) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show,episode&limit=50`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getShowDetails(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/shows/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getEpisodeDetails(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/episodes/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getUserProfile() {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/me`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getUserShows() {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/me/shows?limit=50`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async checkUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/me/shows/contains?ids=${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async saveUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            fetch(`https://api.spotify.com/v1/me/shows?ids=${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                method: 'PUT'
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    static async removeUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            fetch(`https://api.spotify.com/v1/me/shows?ids=${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                method: 'DELETE'
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default Spotify;