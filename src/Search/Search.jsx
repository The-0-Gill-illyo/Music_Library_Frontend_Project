import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from '../Components/DisplayMusic/DisplayMusic';
import SearchBar from './SearchBar';


const Search = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [music, setMusic] = useState([]);
    
    useEffect(() => {
        fetchResults()
    }, [searchInput])

    function passedSearchTerm(searchTerm){
        setSearchInput(searchTerm)
    }

    const fetchResults = async() =>{
        let respose = axios.filter("http://127.0.0.1:8000/music/")
        setMusic(respose.data)
    //     let filteredSearch = music.;
    //     setMusic(filteredSearch)
         console.log("Music", music)
     }
     
    return ( 
        <div>
            <SearchBar music={passedSearchTerm}/>
            {music.map((song, index) =>{
                return(
                    <div key={index}>
                        <h3>{song.artist}</h3>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Search;