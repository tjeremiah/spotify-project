import React, { useState } from "react";
import CreatePlayList from "./CreatePlayList";


export function Track({ item }) {


  const postToSpotify = (data) => {
    let tracks = `https://api.spotify.com/v1/playlists/${process.env.REACT_APP_PLAYLIST_ID}/tracks`;
    fetch(tracks, {
      method: "post",
      body: data,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (value) {
        console.log("the response from fetch", value);
      });
  };


  const addToPlaylist = (evt) => {
    evt.preventDefault();
  };


  return (
    
     <div className="item_container">
       
       <div className="track_name">
        <p>{item.name}</p>
        <p>{item.uri}</p>
      </div>
      
      <div className="track_id"></div>
      
      <div className="item_external_urls">
        <button onClick={addToPlaylist} className="button-link">
          Add to Playlist
        </button>
        <br />
      </div>
      
      <br />
    </div>
  );
}

export default Track;
