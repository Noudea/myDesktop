import Scroller from './Scroller'
import Title from './Title'
import { useState, useEffect } from 'react'

const Spotify = () => {
    const [music, setMusic] = useState('')
    // music/rap/MaesBilletVert.mp3
    const [audioPlayer, setAudioPlayer] = useState('')
    const [rapPlaylist, setRapPlaylist] = useState(false)
    const [codePLaylist, setCodePlaylist] = useState(false)

    useEffect(() => {
        setAudioPlayer(document.getElementById('audioPlayer'))
    })

    const playMusic = (event) => {
        setMusic(event.target.dataset.src)
        setTimeout(() => {
            audioPlayer.play()
        }, 1000)
    }

    const playListRap = [
        {
            title: 'Billet Vert',
            artiste: 'Maes',
            src: 'music/rap/MaesBilletVert.mp3',
        },
        {
            title: 'Au DD',
            artiste: 'PNL',
            src: 'music/rap/PnlAuDD.mp3',
        },
    ]

    const playListCode = [
        {
            title: 'The Intro',
            artiste: 'The XX',
            src: 'music/code/TheXXIntro.mp3',
        },
        {
            title: 'Day One',
            artiste: 'Hans Zimmer',
            src: 'music/code/HansZimmerDayOne.mp3',
        },
    ]

    return (
        <>
            <style jsx>{`
                .spotifyContainer {
                    width: 100%;
                    background-color: black;
                }
                p,
                h3 {
                    color: white;
                }
                .audioContainer {
                    position: absolute;
                    width: 100%;
                    bottom: 0px;
                }
            `}</style>
            <div className="spotifyContainer">
                <h3>Playlists</h3>
                <Scroller
                    setCodePlaylist={setCodePlaylist}
                    setRapPlaylist={setRapPlaylist}
                ></Scroller>
                <h3>Liste</h3>
                {rapPlaylist ? (
                    <>
                        {playListRap.map((title, i) => (
                            <Title
                                title={title.title}
                                key={i}
                                data={title.src}
                                artiste={title.artiste}
                                onClick={playMusic}
                            />
                        ))}
                    </>
                ) : (
                    <></>
                )}

                {codePLaylist ? (
                    <>
                        {playListCode.map((title, i) => (
                            <Title
                                title={title.title}
                                key={i}
                                data={title.src}
                                artiste={title.artiste}
                                onClick={playMusic}
                            />
                        ))}
                    </>
                ) : (
                    <></>
                )}
                <div className="audioContainer">
                    <audio id="audioPlayer" controls src={music}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </>
    )
}

export default Spotify
