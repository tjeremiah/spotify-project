import React, { useState } from "react";

//import SpotifyWebApi from "spotify-web-api-node";

const CreatePlayList = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const newPlayList = (data) => {
    //console.log("the env is", process.env.REACT_APP_USER_ID);
    let myId = "myid";
    let playlist = `https://api.spotify.com/v1/users/${myId}/playlists`;
    fetch(playlist, {
      method: "post",
      body: data,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":
          "Bearer BQA7ec0edGRTUGjCw0VndsKxanlx0DAzdPoz5nMu1Jt17pEZ_vpQM4OB6BQXyNs7n2gJVqJx8oxpTL2RH8UczKmzSAybXMJxy1ZnAODtW5i1FYDmxZNgRGN4JvC4GUphfiYcpux0ZA__P9FF_Tp50m7l3Q1inoCgk-grebWG07hzSv1sgn-hEl60209AmeJRLKzd7RglCUfTQcAxLO3DiDT0FPpr0LXGnx8RqO8bSj1jAUlY"
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (playlistdata) {
        console.log("the data from fetch", playlistdata);
      })
      .catch((err) => {
        //console.log("there's an issue with the header", err);
      });
  };

  const handleOnChange = (evt) => {
    evt.preventDefault();
    console.log("The event from the keyboard", evt.target.value);
    setName(evt.target.value);
  };

  // const addToPlaylist = (evt) => {
  //   evt.preventDefault();
  // };

  const handleCreatePlaylist = (evt) => {
    evt.preventDefault();
    //name comes from useState()
    let myData = {
      name,
      description,
      public: false,
    };
    newPlayList(myData);
  };

  return (
    <div>
      <form onSubmit={handleCreatePlaylist}>
        <label htmlFor="description">
          Playlist description
          <input
            type="text"
            name="description"
            id="description"
            onChange={(evt) => {
              setDescription(evt.target.value);
            }}
          />
        </label>

        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" onChange={handleOnChange} />
        </label>
        <button type="submit"> Add Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlayList;
