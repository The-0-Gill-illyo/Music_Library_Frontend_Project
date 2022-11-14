import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{

    },[])

    function handleSubmit(event){
        event.preventDefault();
        props.searchBar(searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="text" placeholder='Music Library Search' 
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}></input>
                <button type="submit" className='text'>
                <i className='fa-fa search'>Search</i> 
                </button>
            </form>
        </div>
    )
}

export default SearchBar;