import React, {useState, useEffect} from "react";

function SearchBar() {
    
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/music/")
        .then(res => res.json())
        .then(
            (results) => {
                setLoading(true);
                setMusicList(results);
            },

           (error) => {
            setLoading(true);
            setError(error);
           } 
        )
    }, [])

    if(error) {
        return <div>Error, Fialed to Load Music Library: {error.message}</div>;
    }
    else if(!Loading) {
        return <div>Music Loading!...</div>;
    }
    else {
        <ul>
            {musicList.map(musicList => (
                <li key={musicList.id}>
                    {SearchBar.title}
                    {SearchBar.artist}
                    {SearchBar.album}
                    {SearchBar.release_date}
                    {SearchBar.genre}
                </li>
            ))}
        </ul>
    }
}

export default SearchBar();