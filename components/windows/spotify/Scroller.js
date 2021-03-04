import { useEffect, useState } from 'react'

import AlbumIcon from '../../icons/AlbumIcon'
import gsap from 'gsap'
import Draggable from 'react-draggable' // The default

const Scroller = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [mousePosition,setMousePosition] = useState('')
    const [mouseInitialPose,setMouseInitialPose] = useState('')
    const [mouseDown,setMouseDown] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    })

    if(mouseDown) {
        console.log(mouseInitialPose - mousePosition)
        const delta = mouseInitialPose - mousePosition
        // gsap.to('.scroller', { translateX : -delta})

    }

    //     Draggable.create("scroller", {
    //     type:"y",
    //     bounds: document.getElementById("container"),
    //     throwProps:true,
    //     onClick:function() {
    //         console.log("clicked");
    //     },
    //     onDragEnd:function() {
    //         console.log("drag ended");
    //     }
    // });


    const getMousePos = (event) => {
        setMousePosition(event.clientX)
    }
    const mouseD = (event) => {
        setMouseDown(true)
        setMouseInitialPose(event.clientX)
        // gsap.to('.scroller', { duration: -1, x: event.clientX-mousePosition })
    }

    const onMouseU = () => {
        setMouseDown(false)
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
                <div onMouseDown={mouseD} onMouseUp={onMouseU} onMouseMove={getMousePos}className="scroller">
                    <AlbumIcon
                        textColor="white"
                        width="163px"
                        height="163px"
                        name="Rap Français"
                        src="images/spotify/ab67706f00000002173b51b9ef80bb29987e0eae.jfif"
                    ></AlbumIcon>
                    <AlbumIcon
                        textColor="white"
                        width="163px"
                        height="163px"
                        name="Rap Français"
                        src="images/spotify/ab67706f00000002173b51b9ef80bb29987e0eae.jfif"
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
