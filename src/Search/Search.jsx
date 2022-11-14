import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from '../Components/DisplayMusic/DisplayMusic';
import SearchBar from './SearchBar';


const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [music, setMusic] = useState([]);
    const [searchList, setSearchList] = useState([]);
    
    useEffect(() => {
        
    }, [])

    async function handleSubmit(event){
        event.preventDefault()

        let newSearch;
        console.log(searchInput)

        try{
            let response = await axios.get("http://127.0.0.1:8000/music/")
            setMusic(response.data)
            let filteredSearch = searchList.filter(list =>list.name.includes(searchInput));
            setSearchList(filteredSearch)
            console.log("Artist:", filteredSearch)
        } catch(error){
            console.log(error.response.data)
        }
    }
    return ( 
        <div>
            {music.map((artist, index) =>{
                return(
                    <div key={index}>
                        <h3>{artist.name}</h3>
                    </div>
                )
            })}
          <form onSubmit={handleSubmit}>             
            <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
            <button type='submit' className="searchButton">
            <i className="fa-fa search">search</i>
            </button>
          </form>
          <div>
          </div>
        </div>
);
    }

 
export default Search;