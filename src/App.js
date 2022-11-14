import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './app.css';
import DislikeButton from './Components/Dislike Button/DislikeButton';
import LikeButton from './Components/LikeButton/LikeButton';
import Search from './Search/Search';
import SearchBar from './Search/SearchBar';
import DisplaySearch from './Search/DisplaySearch';


function App() {

  const [songs, setSongs] = useState([]);

  
  useEffect(() => {
    getAllSongs();
  }, [])

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
                  </div>
                    <div className='border-box'>
                        <DisplayMusic parentSongs={songs} />
                        <DislikeButton thrumbsDown={DislikeButton} /> 
                        <LikeButton thrumbsUp={LikeButton} /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;