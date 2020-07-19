const { token } = JSON.parse(localStorage.getItem('access'));

class Spotify {

    static async getSearchResults(query) {
        const data = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show,episode&limit=10`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const results = await data.json();
        return results;
    }

    static async getUserProfile() {
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
