import { useState, useEffect } from "react";

import "./ArtistDisplay.css";

function ArtistDisplay({ category, artist, onSearchButtonClicked }) {
  const [displaying, setDisplaying] = useState(false);

  const handleSearchButtonClick = () => {
    console.log(`search button clicked. current category is: ${category.name}`);
    setDisplaying(true);
    onSearchButtonClicked();
  };

  return (
    <div className="ArtistDisplay">
      {displaying && artist ? (
        <div className="display">
          <img src={artist.artist.images[0].url} height="500" />
          <div>
            <h1>{artist.artist.name}</h1>
            {artist.tracks.tracks.map((track, index) => {
              return <p key={index}>{track.name}</p>;
            })}
          </div>
        </div>
      ) : (
        <h1>choose a genre and find an artist!</h1>
      )}

      <div className="search">
        <button onClick={handleSearchButtonClick}>
          <img src="/refresh.svg" />
        </button>
      </div>
    </div>
  );
}

export default ArtistDisplay;
