import React from "react";

export function ArtistPopular({ artists }) {
  return (
    <div className="item_artists">
      {artists.map((artist) => (
        <span key={artist.id}>
          {" "}
          {`${artist.album} - ${artist.name}`}
          <br />
          <br />
          <a href={artist.external_urls.spotify}> Add to Playlist </a>
          <br />
          <br />
          {/* <img src={artist.image} alt={artist.name} /> */}
        </span>
      ))}
    </div>
  );
}
