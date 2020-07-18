class Spotify {

    static async getResults(query) {
        const { token } = JSON.parse(localStorage.getItem('access'));
        const data = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show,episode&limit=10`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const results = await data.json();
        return results;
    }
}

export default Spotify;
