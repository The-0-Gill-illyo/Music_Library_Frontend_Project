import React from "react";
import axios from "axios";
import { useState } from "react";

export default function NewSong(props){
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");

    async function handleSubmit(event){
        event.preventDefault()

        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,


        };
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        props.getAllSongs()
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input type={"text"} placeholder="Title" onChange={(event) =>setTitle(event.target.value)}></input>
        <input type={"text"} placeholder="Artist" onChange={(event) =>setArtist(event.target.value)}></input>
        <input type={"text"} placeholder="Album" onChange={(event) =>setAlbum(event.target.value)}></input>
        <input type={"date"} placeholder="Release Date" onChange={(event) =>setReleaseDate(event.target.value)}></input>
        <input type={"text"} placeholder="Genre" onChange={(event) =>setGenre(event.target.value)}></input>
        <button type="submit">Add Song</button>
        </form>
        </div>
    )
}