
import Scroller from './Scroller'

const Spotify = () => {
    return(
        <>
        <style jsx>{`
            .spotifyContainer {
                width:100%;
                background-color:black;
            }
            p,h3 {
                color:white;
            }
        `}</style>
        <div className="spotifyContainer">
            <h3>Playlists</h3>
                <Scroller></Scroller>
            <h3>Artistes</h3>
        </div>
        </>
    )

}

export default Spotify