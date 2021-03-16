import Scroller from './Scroller'
import Title from './Title'
import { useState, useEffect, useContext } from 'react'
import PlayerContext from '../../../contexts/PlayerContext'

const Spotify = () => {
    const [music, setMusic] = useState('')
    // music/rap/MaesBilletVert.mp3
    const [audioPlayer, setAudioPlayer] = useState(false)
    const [rapPlaylist, setRapPlaylist] = useState(false)
    const [codePLaylist, setCodePlaylist] = useState(false)
    const [song, setSong] = useState('')
    const [songKey, setSongKey] = useState('')
    const [playlist, setPlaylist] = useState('')
    const [songSrc, setSongSrc] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [playing, setPlaying] = useState(false)
    console.log(playing)
    const value = {
        song,
        setSong,
        songSrc,
        setSongSrc,
        songKey,
        setSongKey,
        playlist,
        setPlaylist,
        playing,
        setPlaying
    }


    
    const playMusic = () => {

    }

    const pauseMusic = () => {

    }
    // const srcSong = useContext(PlayerContext).songSrc
    // console.log('SRCSONG',srcSong)
    
    useEffect(() => {
        setIsLoaded(true)
        setAudioPlayer(document.getElementById('audioPlayer'))
        if (audioPlayer) {
            audioPlayer.addEventListener('ended', () => {
                const currentPlaylist = playlist
                console.log(songKey)
                if(myMusic[currentPlaylist]) {
                    if (songKey == myMusic[currentPlaylist].length - 1) {
                        console.log('start to 0')
                        setSongSrc(myMusic[currentPlaylist][0].src)
                        setSong(myMusic[currentPlaylist][0].title)
                        setSongKey(0)
                    } else {
                        console.log(myMusic[currentPlaylist][songKey + 1])
                        setSongSrc(myMusic[currentPlaylist][songKey + 1].src)
                        setSong(myMusic[currentPlaylist][songKey + 1].title)
                        setSongKey(songKey+1)
                        setTimeout(() => {
                            audioPlayer.play()
                        }, 1000)
                    }
                }
            })
        }
    })

    const myMusic = {
        playListRap: [
            {
                title: 'Billet Vert',
                artiste: 'Maes',
                src: 'music/rap/MaesBilletVert.mp3',
            },
            {
                title: 'Distant',
                artiste: 'Maes',
                src: 'music/rap/MaesDistant.mp3',
            },
            {
                title: 'Avec Toi',
                artiste: 'OBOY',
                src: 'music/rap/OboyAvecToi.mp3',
            },
            {
                title: 'Au DD',
                artiste: 'PNL',
                src: 'music/rap/PnlAuDD.mp3',
            },
            {
                title : 'Bande Organisée',
                artiste : "13'Organisé",
                src : 'music/rap/BandeOrganisée.mp3'
            }
        ],
        playListCode: [
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
        ],
    }


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
            {isLoaded ? (
                <PlayerContext.Provider value={value}>
                    <div className="spotifyContainer">
                        <h3>Playlists</h3>
                        <Scroller
                            setCodePlaylist={setCodePlaylist}
                            setRapPlaylist={setRapPlaylist}
                        ></Scroller>
                        <h3>Liste</h3>
                        {rapPlaylist ? (
                            <>
                                {myMusic.playListRap.map((title, i) => (
                                    <Title
                                        title={title.title}
                                        key={i}
                                        dataKey={i}
                                        data={title.src}
                                        artiste={title.artiste}
                                        // onClick={playMusic}
                                    />
                                ))}
                            </>
                        ) : (
                            <></>
                        )}

                        {codePLaylist ? (
                            <>
                                {myMusic.playListCode.map((title, i) => (
                                    <Title
                                        title={title.title}
                                        key={i}
                                        dataKey={i}
                                        data={title.src}
                                        artiste={title.artiste}
                                        // onClick={playMusic}
                                    />
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                        <div className='audioPlayerContainer'>
                            {playing ? <><img onClick={pauseMusic} src="svg/pause.svg"></img></> : <><img  onClick={playMusic} src="svg/play.svg"></img></>}

                        </div>
                        <div className="audioContainer">
                            <audio id="audioPlayer" controls src={songSrc}>
                                Your browser does not support the
                                <code>audio</code> element.
                            </audio>
                        </div>
                    </div>
                </PlayerContext.Provider>
            ) : (
                <></>
            )}
        </>
    )
}

export default Spotify
