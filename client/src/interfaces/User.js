import { URLs } from '../constants/urls';

class User {
    async saveEpisode() {

    }

    async removeEpisode() {

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