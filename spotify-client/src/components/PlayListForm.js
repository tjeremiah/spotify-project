import React, { useState } from "react";


const PlayListForm = () => {
   const [description, setDescription] = useState("");
   const [name, setName] = useState("");


  const handleCreatePlaylist = (evt) => {
     evt.preventDefault();
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
        <label htmlFor='description'>
          Playlist description
          <input
            type='text'
            name='description'
            id='description'
            onChange={(evt) => {
              setDescription(evt.target.value);
            }}
          />
        </label>
       
        <label htmlFor="name">
          Name
          <input 
              type="text" 
              name="name" id="name" 
              onChange={(evt) => {
                setName(evt.target.value)
             }} 
          />
        </label>
        <br />
        <button type="submit"> Add Playlist</button>
      </form>
    </div>
  );
}

export default PlayListForm;
