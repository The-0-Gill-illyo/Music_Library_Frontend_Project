import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './app.css';
import DislikeButton from './Components/Dislike Button/DislikeButton';
import LikeButton from './Components/LikeButton/LikeButton';
import NewSong from './Search/NewSong';


function App() {

  const [songs, setSongs] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  
  useEffect(() => {
    getAllSongs();
  }, [])

  function filterSongs(event){
    event.preventDefault()
    let filteredSongs = songs.filter((song) =>{
    if(song.title.includes(searchInput)){
      return true;
    }
    })
    setSongs(filteredSongs)
  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
    console.log(response.data)
  }
  return (
    <div className='container-fluid'>
        <div className='col-md-'>
            <div className='row'>
                <div className='border-box'>
                  <div className="wrap">
                    

                    <form onSubmit={filterSongs} className='search'>
                        <input type="text" className='searchterm' placeholder='Music Library Search' onChange={(event) =>setSearchInput(event.target.value)}></input>
                        <button type='submit' className='searchButton'>
                        <i className='fa-fa search'>Search</i>
                        </button>
                    </form>


                  </div>
                    <div className='border-box'>
                        <DisplayMusic parentSongs={songs} />
                        <DislikeButton thrumbsDown={DislikeButton} /> 
                        <LikeButton thrumbsUp={LikeButton} /> 
                        <NewSong getAllSongs={getAllSongs}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;