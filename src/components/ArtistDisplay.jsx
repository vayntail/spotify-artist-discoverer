import { useState, useEffect } from "react";

import "./ArtistDisplay.css";

function ArtistDisplay({ category, artist }) {
  const [displaying, setDisplaying] = useState(false);

  const handleSearchButtonClick = () => {
    console.log(`search button clicked. current category is: ${category.name}`);
    setDisplaying(true);

    console.log(artist.artist.images[0]);
  };

  return (
    <div className="ArtistDisplay">
      {displaying && (
        <div className="display">
          <img src={artist.artist.images[0].url} />
          <div>
            <h1>{artist.artist.name}</h1>
            {artist.tracks.tracks.map((track, index) => {
              return <p key={index}>{track.name}</p>;
            })}
          </div>
        </div>
      )}

      <div className="search">
        <h1>find an artist</h1>
        <button onClick={handleSearchButtonClick}>search!</button>
      </div>
    </div>
  );
}

export default ArtistDisplay;
