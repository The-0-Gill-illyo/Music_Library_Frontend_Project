import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './app.css';
import DislikeButton from './Components/Dislike Button/DislikeButton';
import LikeButton from './Components/LikeButton/LikeButton';
// import SearchBar from './Components/SearchBar/SearchBar';

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
                <input type="text" placeholder="Search..." className="search" />
                <ul className='list'>
                    <li className='listItem'>Title</li>
                    <li className='listItem'>Artist</li>
                    <li className='listItem'>Album</li>
                    <li className='listItem'>Release Date</li>
                    <li className='listItem'>Genre</li>
                </ul>
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