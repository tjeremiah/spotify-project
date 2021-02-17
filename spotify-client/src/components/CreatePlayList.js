import React, { useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const CreatePlayList = (myData) => {
   
   spotifyApi.createPlaylist("taurel107", myData)
   .then((response => response.json())
   .catch((error) => console.err(error))
    
   );

   return (
       <div>

       </div>
   )   
}   

export default CreatePlayList