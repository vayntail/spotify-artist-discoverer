import { useState, useEffect } from "react";
import Tags from "./components/Tags";
import "./App.css";
import ArtistDisplay from "./components/ArtistDisplay";

import * as API from "./services/spotifyService";

function App() {
  const [token, setToken] = useState();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const initializeSpotifyData = async () => {
      try {
        // fetch token
        const token = await API.fetchToken();
        setToken(token);

        // fetch genres after token
        const genresData = await API.fetchGenres(token);
        setGenres(genresData);
      } catch (error) {
        console.error("error initializing spotify data...", error);
      }
    };

    initializeSpotifyData();
  }, []);

  // fetch playlist for specific genre
  useEffect(() => {
    const fetchPlaylist = async () => {
      if (genres.length > 0 && token) {
        const categoryId = genres[1].id; // for now, select the first genre

        try {
          const playlists = await API.fetchPlaylistsFromCategory(
            categoryId,
            token
          );
          console.log(playlists);
        } catch (error) {
          console.error("error fetching playlists...", error);
        }
      }
    };

    fetchPlaylist();
  }, [genres, token]);

  return (
    <>
      <Tags tags={genres} />
      <ArtistDisplay />
    </>
  );
}

export default App;
