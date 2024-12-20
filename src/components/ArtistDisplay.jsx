import { useState, useEffect } from "react";

function ArtistDisplay({ category, artist }) {
  const [displaying, setDisplaying] = useState(false);

  const handleSearchButtonClick = () => {
    console.log(`search button clicked. current category is: ${category.name}`);
    setDisplaying(true);
  };

  return (
    <div className="ArtistDisplay">
      {displaying && (
        <div>
          <img src="" />
          <h1>{artist.artist.name}</h1>
          {artist.tracks.tracks.map((track) => {
            return <p>{track.name}</p>;
          })}
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
