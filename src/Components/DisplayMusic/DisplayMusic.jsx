import "./DisplayMusic.css"
const DisplayMusic = (props) => {
    return (
        <div>
        <table>
            <thead>
            <tr className="listItem">
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song, index) => {
                return (
                    <tr className="text" key={index}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <button type="like">Like</button>
                        <button type="dislike">Dislike</button>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
      );
}
 
export default DisplayMusic;