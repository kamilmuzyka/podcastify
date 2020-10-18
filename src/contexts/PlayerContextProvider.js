import React, { createContext, useState } from 'react';

const staticEpisode = {
    "audio_preview_url": "https://p.scdn.co/mp3-preview/727b36bf647bf7defda34c26e03190e63178cd71",
    "description": "         CTA: Take inventory of your state. What is UI state and what is Server state?Tanner Linsley is the creator of react-table, react-charts, and react-query. Tanner also has a startup called nozzle.io where they track rankings in Google and do cool things around technical SEO.A lot of Tanner's libraries were born out of necessity at nozzle. We often reach for abstractions that were built to solve problems that we don't have and that ends up creating awkward problems for us. We wind up with poor performance or a bigger bundle size than we need, so having a custom made solution can be a good thing.Your UI state is not the same as your server state and they should be separate things. By keeping these types of state separated from each other you can simplify your app. Server state is different enough in structure, persistence strategy, consumption, and lifecycle to be managed in smarter systems that are configurable to an apps needs of data freshness.Resourcesreact-queryTanner LinsleyTwitterKent C. DoddsWebsiteTwitterGithubYoutubeTesting JavaScript        ",
    "duration_ms": 2166439,
    "explicit": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/episode/599lPogb1psBl8seBGO2jc"
    },
    "href": "https://api.spotify.com/v1/episodes/599lPogb1psBl8seBGO2jc",
    "id": "599lPogb1psBl8seBGO2jc",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/5d30df3b77d2c6c66e9d2927eab3fa7b80b84b4e",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/8f0f4ee2f7ead02a531d84f1ac8c6f8cdd5e0707",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ec120346eaaa3d552c45c9394326982b6d498766",
        "width": 64
      }
    ],
    "is_externally_hosted": false,
    "is_playable": true,
    "language": "en",
    "languages": [
      "en"
    ],
    "name": "Tanner Linsley Separates UI State And Server State",
    "release_date": "2020-05-19",
    "release_date_precision": "day",
    "type": "episode",
    "uri": "spotify:episode:599lPogb1psBl8seBGO2jc"
}

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [queue, updateQueue] = useState([]);
    const [queueHead, updateQueueHead] = useState(0);
    const [currentEpisode, updateCurrentEpisode] = useState(staticEpisode);

    // Handle the queue
    // Update the currentEpisode

    return (
        <PlayerContext.Provider value={{
            currentEpisode
        }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;