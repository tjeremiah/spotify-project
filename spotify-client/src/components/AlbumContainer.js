import React from 'react'
import { useQuery , gql } from '@apollo/client'
import { Track }   from '../components/Track'
import CreatePlayList from './PlayListForm'


const ALL_ALBUMS = gql`
  query album_tracks {
   album_tracks {
      items {
       id
       uri
       name
       external_urls {
        spotify
      }
      artists {
        id  
        name
        album
        external_urls {
            spotify
        }
      }
    }
   }
  }
 `;

export default function AlbumContainer () {
    const { loading, error, data } = useQuery(ALL_ALBUMS)
    console.log("the items are")
    if (loading ) return <p>Loading Albums...</p>

    if (error) return <p>Something went wrong</p>
    return (
        <div className="container">
           <div className="playlist-name"> 
            <p>Create A New Playlist </p> 
              <CreatePlayList />
         </div> 
         <div className="album-tracks">   
          {data.album_tracks.items && data.album_tracks.items.map(item => <Track key={item.id} item={item}  /> )}
         </div>
      </div>
    )
}

