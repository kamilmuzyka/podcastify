import { URLs } from '../constants/urls';

class User {
    async saveEpisode(userId, episodeId) {
        try {
            fetch(`${URLs.origin}/user/episodes`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
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
                    'content-type': 'application/json'
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
            const response = await fetch(`${URLs.origin}/user/episodes/${id}`);
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new User();