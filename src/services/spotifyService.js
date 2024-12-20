const CLIENT_ID = import.meta.env.VITE_clientId;
const CLIENT_SECRET = import.meta.env.VITE_clientSecret;

// authorization fetch token
export const fetchToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
    });
    const data = await response.json();
    return data.access_token; // return token
  } catch (error) {
    console.error("error fetching token...", error);
  }
};

// fetch genre categories
export const fetchGenres = async (token) => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await response.json();
    return data.categories.items; // return genres list
  } catch (error) {
    console.error("error fetching genres...", error);
    throw error;
  }
};

// fetch a random artist and their top songs from a specific category
export const fetchPlaylistsFromCategory = async (categoryId, token) => {
  try {
    // fetch artists in category/genre
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=genre=${categoryId}&type=artist`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await response.json();
    const artists = data.artists.items;
    const randomIndex = Math.floor(Math.random() * artists.length);
    const artist = artists[randomIndex];

    // fetch top songs
    const responseTracks = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const tracks = await responseTracks.json();

    // return artist and tracks
    return { artist, tracks };
  } catch (error) {
    console.error("error fetching artists...", error);
    throw error;
  }
};
