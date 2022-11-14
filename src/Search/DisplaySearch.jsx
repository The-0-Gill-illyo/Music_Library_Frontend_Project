    import Search from "./Search"


    export default function DisplaySearch(props){
        
        function handleClick(music){

            console.log(music)
            let musicId = music.id.musicId
            console.log(musicId)
        }

        return(
            <div>
                <form onSubmit={handleClick}>
                    <h1>Artist: {props.Search.filteredSearch}</h1>
                </form>
                <Search/>
            </div>
        )
    }