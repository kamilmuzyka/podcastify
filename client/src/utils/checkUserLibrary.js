const checkUserLibrary = (library, episode) => {
    if (library.episodes) {
        const ids = library.episodes.map(episode => episode.id);
        return ids.includes(episode);
    }
}

export default checkUserLibrary;