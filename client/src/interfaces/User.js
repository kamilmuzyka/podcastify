class User {
    async saveEpisode() {

    }

    async removeEpisode() {

    }

    async getEpisodes(id) {
        try {
            const response = await fetch(`/user/episodes/${id}`);
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new User();