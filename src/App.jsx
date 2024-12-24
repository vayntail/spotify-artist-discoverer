import { useState, useEffect } from "react";

import Tags from "./components/Tags";
import "./App.css";
import ArtistDisplay from "./components/ArtistDisplay";

import * as API from "./services/spotifyService";

function App() {
  const [token, setToken] = useState();
  const [genres, setGenres] = useState([]);
  const [artist, setArtist] = useState();

  // setting from children
  const [selectedGenre, setSelectedGenre] = useState();

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

  // fetch a random artist and their top songs for specific genre
  const fetchRandomArtist = async () => {
    if (genres.length > 0 && token) {
      const categoryId = genres[1].name; // for now, select the first genre
      console.log(`category ID: ${categoryId}`);

      try {
        const randomArtist = await API.fetchPlaylistsFromCategory(
          categoryId,
          token
        );

        console.log(randomArtist);
        setArtist(randomArtist);
      } catch (error) {
        console.error("error fetching random artist...", error);
      }
    }
  };

  return (
    <>
      <Tags tags={genres} onGenreSelected={setSelectedGenre} />
      <ArtistDisplay
        category={selectedGenre}
        artist={artist}
        onSearchButtonClicked={fetchRandomArtist}
      />
    </>
  );
}

export default App;
