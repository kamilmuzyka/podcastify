class User {
    static async saveEpisode() {

    }

    static async removeEpisode() {

    }

    static async getEpisodes(id) {
        try {
            const response = await fetch(`/user/episodes/${id}`);
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default User;