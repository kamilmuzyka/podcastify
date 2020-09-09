import React, { useState, useContext, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../constants';
import Spotify from '../../../models/Spotify';
import WorkspaceLoading from '../WorkspaceLoading/WorkspaceLoading';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';

function SearchResults(props) {
    const [isLoading, updateIsLoading] = useState(true);
    const [query, updateQuery] = useState('');
    const [shows, updateShows] = useState([]);
    const [episodes, updateEpisodes] = useState([]);

    function prepareShows(shows) {
        if(shows.length === 0) {
            updateShows([]);
            return;
        }

        const updatedShows = shows.map(show => {
            return <Tile
                key={show.id}
                id={show.id}
                title={show.name}
                description={show.description}
                image={show.images[1].url}
                type={SEARCH_TYPES.show} />
        });

        updateShows(updatedShows);
    }

    function prepareEpisodes(episodes) {
        if (episodes.length === 0) {
            updateEpisodes([]);
            return;
        }

        const updatedEpisodes = episodes.map(episode => {
            return <Tile
                key={episode.id}
                id={episode.id}
                title={episode.name}
                description={episode.description}
                image={episode.images[1].url}
                type={SEARCH_TYPES.episode} />
        });

        updateEpisodes(updatedEpisodes);
    }

    useEffect(() => {
        const newQuery = new URLSearchParams(props.history.location.search).get('query');

        if(newQuery === query) return;

        updateQuery(newQuery);
    });

    useEffect(() => {
        if(query) {
            (async () => {
                try {
                    const { shows, episodes } = await Spotify.getSearchResults(query);
                    if(shows) prepareShows(shows.items);
                    if(episodes) prepareEpisodes(episodes.items);
                    updateIsLoading(false);
                } catch(err) {
                    console.error(err);
                }
            })();
        }
    }, [query]);

    if(shows.length > 0 && episodes.length > 0) {
        return (
            <Fragment>
                <Tiles title="Shows">
                    {shows}
                </Tiles>
                <Tiles title="Episodes">
                    {episodes}
                </Tiles>
                <WorkspaceLoading loading={isLoading.toString()}/>
            </Fragment>
        );
    }

    if(shows.length > 0 && episodes.length === 0) {
        return (
            <Fragment>
                <Tiles title="Shows">
                    {shows}
                </Tiles>
                <WorkspaceLoading loading={isLoading.toString()}/>
            </Fragment>
        );
    }

    if(shows.length === 0 && episodes.length > 0) {
        return (
            <Fragment>
                <Tiles title="Episodes">
                    {episodes}
                </Tiles>
                <WorkspaceLoading loading={isLoading.toString()}/>
            </Fragment>
        );
    }

    if(shows.length === 0 && episodes.length === 0) {
        return (
            <Fragment>
                <p>Nothing found</p>
                <WorkspaceLoading loading={isLoading.toString()}/>
            </Fragment>
        );
    }
}

export default withRouter(SearchResults);