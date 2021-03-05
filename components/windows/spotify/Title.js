import { useContext , useState , useEffect } from 'react'
import PlayerContext from "../../../contexts/PlayerContext"



const Title = (props) => {

    const {song,setSong} = useContext(PlayerContext)
    const {songSrc,setSongSrc} = useContext(PlayerContext)
    const {songKey,setSongKey} = useContext(PlayerContext)
    const [audioPlayer, setAudioPlayer] = useState('')
    const [color,setColor] = useState('white')
    //     const playMusic = (event) => {
    //     setMusic(event.target.dataset.src)
    //     setTimeout(() => {
    //         audioPlayer.play()
    //     }, 1000)
    // }
                    console.log(useContext(PlayerContext))
                    
    useEffect(() => {
        setAudioPlayer(document.getElementById('audioPlayer'))
        console.log('TITTILE',props.title,song)
        if(props.title == song) {
            setColor('#1ED760')
        } else {
            setColor('white')
        }
    },[song,color])

    const play = () => {
        setSong(props.title)
        setSongSrc(props.data)
        setSongKey(props.dataKey)
        setTimeout(() => {
            audioPlayer.play()
        }, 1000)
        console.log(songSrc)
    }

    return(
        <>
        <style jsx>{`
            
            .titleContainer {
                -webkit-box-align: center;
                background-color: transparent;
                display: flex;
                flex-direction: column;
                -webkit-box-flex: 0;
                flex-grow: 0;
                height: 72px;
                position: relative;
                width: 100%;
                padding: 8px 16px;
                text-align: left;
            }
            .titleContainer:hover {
                cursor: pointer;
                background-color: #fff;
            }
            .title{
                color:${color};
                margin:0px;
                font-size:25px;
            }
            .artiste {
                color:white;
                margin:0px;
            }
        `}</style>
            <div onClick = {play} className='titleContainer'>
                <p className='title' >{props.title}</p>
                <p className='artiste'>{props.artiste}</p>
            </div>
        </>
    )
}

export default Title