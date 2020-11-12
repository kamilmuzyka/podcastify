import { URLs } from '../constants/urls';

class Spotify {
    retrieveAccessToken() {
        const access = localStorage.getItem('access');
        if (!access) {
            throw new Error('No access token found');
        }
        const {
            token
        } = JSON.parse(access);
        return token;
    }

    async getSearchResults(query) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/search?q=${query}&type=show,episode&limit=50`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getShowDetails(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/shows/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getEpisodeDetails(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/episodes/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getUserProfile() {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/me`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getUserShows() {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/me/shows?limit=50`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async getUserEpisodes(ids) {
        const token = this.retrieveAccessToken();
        const params = ids.join(',');
        try {
            const response = await fetch(`${URLs.spotify}/episodes?ids=${params}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async checkUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            const response = await fetch(`${URLs.spotify}/me/shows/contains?ids=${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    async saveUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            fetch(`${URLs.spotify}/me/shows?ids=${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                method: 'PUT'
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async removeUserShow(id) {
        const token = this.retrieveAccessToken();
        try {
            fetch(`${URLs.spotify}/me/shows?ids=${id}`, {
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

export default new Spotify();