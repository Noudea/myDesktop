import { Window, TitleBar, Text } from 'react-desktop/macOs'
import {useState,useEffect} from 'react'
import Draggable from 'react-draggable'; // The default
import {usePrevious} from '../hooks/hooks'


const FullWindow = (props) => {
    console.log(props)
    const [isVisible,setIsVisible] = useState(true)
    const [width,setWidth] = useState(props.width)
    const [height,setHeight] = useState(props.height)
    const [position,setPosition] = useState('static')
    const [top,setTop] = useState('')
    const [right,setRight] = useState('')
    const [translate,setTranslate] = useState({x : '0px',y : '0px'})
    const [important,setImportant] = useState('')
    const [isResized,setIsResized] = useState(false)
    const [count, setCount] = useState(0);
    

    const onMaximizeClick = () => {
        console.log('maximize')
    }

    const onResizeClick = () => {
        if (!isResized) {
            setWidth('100vw')
            setHeight('100vh')
            setPosition('absolute')
            setRight('0px')
            setTop('0px')
            setImportant('!important')
            setTranslate({x : '0px',y : '0px'})
            setIsResized(true)
            console.log('resize')
        } else {
            setWidth(props.width)
            setHeight(props.height)
            setPosition('static')
            setIsResized(false)
            setImportant('')
        }
    }

    const onCloseClick = (e) => {
        setIsVisible(false)
    }

    const onMinimizeClick = () => {
        console.log('onMinimizeClick')
    }
    return(
        <>
        <style jsx>{`
            .windowContainer {
                position:${position};
                top:${top};
                right:${right};
                transform: translate(${translate.x}, ${translate.y}) ${important};
            }
        `}</style>
        {isVisible 
        ?
        <Draggable
            handle=".titleBar"
            bounds="parent"
        >
            <section className='windowContainer'>
                <Window
                    chrome
                    height= {height}
                    width = {width}
                    padding="10px"
                    style={{
                        overflow: "scroll",
                        scrollbarWidth:'none'
                    }}
                >
                    <TitleBar
                        title={props.title}
                        controls
                        onMaximizeClick = {onMaximizeClick}
                        onResizeClick = {onResizeClick}
                        onCloseClick = {onCloseClick}
                        onMinimizeClick = {onMinimizeClick}
                        className='titleBar'
                    />
                    {props.children}
                </Window>
            </section>
        </Draggable>
        : 
        <></>
        }
            </>
    )
}

export default FullWindow;