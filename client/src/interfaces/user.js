import { URLs } from '../constants/urls';

class User {
    async saveEpisode(userId, episodeId) {
        try {
            fetch(`${URLs.origin}/user/episodes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    episodeId
                })
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async removeEpisode(userId, episodeId) {
        try {
            fetch(`${URLs.origin}/user/episodes`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    episodeId
                })
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async getEpisodes(id) {
        try {
            const response = await fetch(`${URLs.origin}/user/episodes/${id}`, {
                headers: {
                    'Accept': 'application/json'
                },
            });
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new User();