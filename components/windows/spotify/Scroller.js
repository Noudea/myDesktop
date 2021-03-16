import { useEffect, useState , useContext } from 'react'

import AlbumIcon from '../../icons/AlbumIcon'
import gsap from 'gsap'
import Draggable from 'react-draggable' // The default
import PlayerContext from '../../../contexts/PlayerContext'

const Scroller = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [mousePosition,setMousePosition] = useState('')
    const [mouseInitialPose,setMouseInitialPose] = useState('')
    const [mouseDown,setMouseDown] = useState(false)
    const {playlist,setPlaylist} = useContext(PlayerContext)
    useEffect(() => {
        setIsLoaded(true)
        
    })

    const rap = () => {
        props.setCodePlaylist(false)
        props.setRapPlaylist(true)
        setPlaylist('playListRap')
    }

    const code = () => {
        props.setRapPlaylist(false)
        props.setCodePlaylist(true)
        setPlaylist('playListCode')
    }
    return (
        <>
            <style jsx>{`
                .scroller {
                    display: flex;
                    width: 100%;
                }
            `}</style>
            {isLoaded ? (
                <Draggable  bounds={{left: -200, right: 0}}  axis="x">
                <div className="scroller">
                    <AlbumIcon
                        textColor="white"
                        width="163px"
                        height="163px"
                        name="Rap Français"
                        src="images/spotify/ab67706f00000002173b51b9ef80bb29987e0eae.jfif"
                        onClick={rap}
                    ></AlbumIcon>
                    <AlbumIcon
                        textColor="white"
                        width="163px"
                        height="163px"
                        name="Coding Mode"
                        src="images/spotify/ab67706f000000022ea6de3e05782120cb57430a.jfif"
                        onClick={code}
                    ></AlbumIcon>
                    <AlbumIcon
                        textColor="white"
                        width="163px"
                        height="163px"
                        name="Rap Français"
                        src="images/spotify/ab67706f00000002173b51b9ef80bb29987e0eae.jfif"
                    ></AlbumIcon>
                </div>


                </Draggable>
            ) : (
                <></>
            )}
        </>
    )
}

export default Scroller
