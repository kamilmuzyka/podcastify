class Spotify {

    static retrieveToken() {
        if(localStorage.getItem('access')) {
            const { token } = JSON.parse(localStorage.getItem('access'));
            return token ? token : false;
        }
        return false;
    }

    static async getSearchResults(query) {
        const token = this.retrieveToken();

        if(!token) {
            return;
        }

        const data = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show,episode&limit=10`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const results = await data.json();
        return results;
    }

    static async getUserProfile() {
        const token = this.retrieveToken();

        if(!token) {
            return;
        }

        const data = await fetch(`https://api.spotify.com/v1/me`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const results = await data.json();
        return results;
    }
}

export default Spotify;
