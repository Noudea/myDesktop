import {useState,useEffect, useContext} from 'react'
import PlayerContext from '../../../contexts/PlayerContext'


const SpotifyAudioPlayer = () => {

    const [reactAudio, setReactAudio] = useState(false)
    const [rangeBarWidth,setRangeBarWidth] = useState(0)
    const {song,setSong} = useContext(PlayerContext)
    const {songSrc,setSongSrc} = useContext(PlayerContext)
    const {songKey,setSongKey} = useContext(PlayerContext)
        const soundReady = () => {
        console.log(reactAudio.audioEl)
        if(reactAudio) {
            console.log(reactAudio.audioEl.current.duration)
            console.log(reactAudio.audioEl.current.currentTime)
        }
    }

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
                title: 'Bande Organisée',
                artiste: "13'Organisé",
                src: 'music/rap/BandeOrganisée.mp3',
            },
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



    const onEnd = () => {
        const currentPlaylist = playlist
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

    
    return (<>
    
                            <ReactAudioPlayer
                            src={songSrc}
                            controls
                            ref={(element) => {
                                setReactAudio(element)
                            }}
                            onCanPlayThrough = {soundReady}
                            autoPlay
                            onEnded={onEnd}
                            style={{
                                width: '100%',
                                backgroundColor: 'white',
                                color: '#000000',
                            }}
                        />
    
    
    </>)
}

export default SpotifyAudioPlayer