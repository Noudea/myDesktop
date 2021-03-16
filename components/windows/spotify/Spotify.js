import Scroller from './Scroller'
import Title from './Title'
import { useState, useEffect, useContext } from 'react'
import { myMusic } from './playlist'
import PlayerContext from '../../../contexts/PlayerContext'
import ReactAudioPlayer from 'react-audio-player'

const Spotify = () => {
    const [music, setMusic] = useState('')
    const [audioPlayer, setAudioPlayer] = useState(false)
    const [rapPlaylist, setRapPlaylist] = useState(false)
    const [codePLaylist, setCodePlaylist] = useState(false)
    const [song, setSong] = useState('')
    const [songKey, setSongKey] = useState('')
    const [playlist, setPlaylist] = useState('')
    const [songSrc, setSongSrc] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [reactAudio, setReactAudio] = useState(false)
    const [progressBarWidth, setProgressBarWidth] = useState(false)
    const [rangeBarWidth, setRangeBarWidth] = useState(0)
    const [musicTotalDuration, setMusicTotalDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [cursorPos, setCursorPos] = useState(0)
    const [random, setRandom] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [randColor, setRandColor] = useState(
        'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
    )
    const [repColor, setRepColor] = useState(
        'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
    )
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
        setPlaying,
    }

    const playMusic = () => {
        setPlaying(true)
        reactAudio.audioEl.current.play()
    }

    const pauseMusic = () => {
        setPlaying(false)
        reactAudio.audioEl.current.pause()
    }

    useEffect(() => {
        setIsLoaded(true)
        setAudioPlayer(document.getElementById('audioPlayer'))
        const progressBar = document.getElementById('progressBarContainer')
        if (progressBar) {
            setProgressBarWidth(progressBar.offsetWidth)
            console.log(progressBarWidth)
        }
    })

    const soundReady = () => {
        console.log(reactAudio.audioEl)
        if (reactAudio) {
            setMusicTotalDuration(reactAudio.audioEl.current.duration)
            console.log(reactAudio.audioEl.current.duration)
            console.log(reactAudio.audioEl.current.currentTime)
        }
    }

    const playEvent = () => {
        console.log('playEvent')
        setCurrentTime(reactAudio.audioEl.current.currentTime)
        setPlaying(true)
    }

    const pauseEvent = () => {
        setPlaying(false)
    }
    const listenEvent = () => {
        console.log('listen evetn')
        setRangeBarWidth(
            (reactAudio.audioEl.current.currentTime /
                reactAudio.audioEl.current.duration) *
                100
        )
        setCursorPos(progressBarWidth * (rangeBarWidth / 100))
        console.log(rangeBarWidth)
    }
    const onEnd = () => {
        next()
    }

    const previous = () => {
        const currentPlaylist = playlist
        console.log(songKey)
        if (songKey > 0) {
            setSongKey(songKey - 1)
            setSongSrc(myMusic[currentPlaylist][songKey - 1].src)
            setSong(myMusic[currentPlaylist][songKey - 1].title)
        }
        if (songKey == 0) {
            setSongKey(myMusic[currentPlaylist].length - 1)
            setSongSrc(
                myMusic[currentPlaylist][myMusic[currentPlaylist].length - 1]
                    .src
            )
            setSong(
                myMusic[currentPlaylist][myMusic[currentPlaylist].length - 1]
                    .title
            )
        }
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    const next = () => {
        const currentPlaylist = playlist
        if (!random && !repeat) {
            if (songKey == myMusic[currentPlaylist].length - 1) {
                console.log('start to 0')
                setSongKey(0)
                setSongSrc(myMusic[currentPlaylist][0].src)
                setSong(myMusic[currentPlaylist][0].title)
            } else {
                setSongKey(songKey + 1)
                setSongSrc(myMusic[currentPlaylist][songKey + 1].src)
                setSong(myMusic[currentPlaylist][songKey + 1].title)
            }
        }
        if (random) {
            const randomInt = getRandomInt(0, myMusic[currentPlaylist].length)
            console.log('randomInt')
            setSongKey(randomInt)
            setSongSrc(myMusic[currentPlaylist][randomInt].src)
            setSong(myMusic[currentPlaylist][randomInt].title)
        }
        if (repeat) {
            console.log('reapeat')
            reactAudio.audioEl.current.currentTime = 0
        }
    }
    const toggleRandom = () => {
        if (random) {
            setRandom(false)
            setRandColor(
                'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
            )
        } else {
            setRandom(true)
            setRandColor(
                'invert(22%) sepia(18%) saturate(6176%) hue-rotate(152deg) brightness(96%) contrast(101%)'
            )
        }
        if (repeat) {
            setRepeat(false)
            setRepColor(
                'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
            )
        }
    }

    const toggleRepeat = () => {
        if (repeat) {
            setRepeat(false)
            setRepColor(
                'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
            )
        } else {
            setRepeat(true)
            setRepColor(
                'invert(22%) sepia(18%) saturate(6176%) hue-rotate(152deg) brightness(96%) contrast(101%)'
            )
        }
        if (random) {
            setRandom(false)
            setRandColor(
                'invert(88%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(103%) contrast(102%)'
            )
        }
    }

    const progressBarClick = (e) => {
        console.log('progressBar click')
        let bounds = e.target.getBoundingClientRect()
        console.log(e.target.getBoundingClientRect())
        let x = e.clientX - bounds.left
        setCursorPos(x)
        console.log(x)
        console.log((x / bounds.width) * 100)
        let xcentage = (x / bounds.width) * 100
        console.log(musicTotalDuration * (xcentage / 100))
        reactAudio.audioEl.current.currentTime =
            musicTotalDuration * (xcentage / 100)
        setRangeBarWidth(
            (reactAudio.audioEl.current.currentTime / musicTotalDuration) * 100
        )
    }

    return (
        <>
            <style jsx>{`
                .spotifyAudioContainer {
                    position: absolute;
                    bottom: 20px;
                    width: 90%;
                }
                .progressBarContainer {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    height: 4px;
                    width: 100%;
                    position: relative;
                    transform: none;
                    margin-bottom: 20px;
                }
                .rangeBar {
                    border-radius: 2px;
                    height: 100%;
                    background-color: rgb(255, 255, 255);
                    width: ${rangeBarWidth}%;
                }
                .cursor {
                    position: absolute;
                    top: -5px;
                    left: ${cursorPos}px;
                    width: 15px;
                    height: 15px;
                    background-color: white;
                    border-radius: 100%;
                }
                .controls {
                    display: flex;
                    justify-content: space-between;
                }
                .rand {
                    filter: ${randColor};
                }
                .rep {
                    filter: ${repColor};
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
                        <div className="spotifyAudioContainer">
                            <div
                                className="progressBarContainer"
                                id="progressBarContainer"
                                onClick={progressBarClick}
                            >
                                <div className="rangeBar">
                                    <div className="cursor"></div>
                                </div>
                            </div>
                            <div className="controls">
                                <img
                                    className="rand"
                                    onClick={toggleRandom}
                                    src="svg/random.svg"
                                ></img>
                                <img
                                    onClick={previous}
                                    src="svg/next-left.svg"
                                ></img>
                                {playing ? (
                                    <>
                                        <img
                                            onClick={pauseMusic}
                                            src="svg/pause.svg"
                                        ></img>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            onClick={playMusic}
                                            src="svg/play.svg"
                                        ></img>
                                    </>
                                )}
                                <img
                                    onClick={next}
                                    src="svg/next-right.svg"
                                ></img>
                                <img
                                    className="rep"
                                    onClick={toggleRepeat}
                                    src="svg/repeat.svg"
                                ></img>
                            </div>
                        </div>
                        <ReactAudioPlayer
                            listenInterval={500}
                            src={songSrc}
                            ref={(element) => {
                                setReactAudio(element)
                            }}
                            onPause={pauseEvent}
                            onListen={listenEvent}
                            onPlay={playEvent}
                            onCanPlayThrough={soundReady}
                            autoPlay
                            onEnded={onEnd}
                            style={{
                                width: '100%',
                                backgroundColor: 'white',
                                color: '#000000',
                            }}
                        />
                    </div>
                </PlayerContext.Provider>
            ) : (
                <></>
            )}
        </>
    )
}

export default Spotify
