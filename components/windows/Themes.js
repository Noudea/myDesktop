import PageIcon from "../icons/PageIcon"
import { useContext } from 'react'
import ThemeContext from "../../contexts/ThemeContext";

const Themes = () => {

    const { background, setBackground } = useContext(ThemeContext);
    const {theme,setTheme} = useContext(ThemeContext);

    const setRoseGold = () => {
        setTheme("roseGold")
        localStorage.setItem('theme','roseGold')
    }

    const setDark = () => {
        setTheme("dark")
        localStorage.setItem('theme','dark')
    }

    const setLight = () => {
        setTheme("light")
        localStorage.setItem('theme','light')
    }
    
    const setGlowingBlue = () => {
        setTheme('glowingBlue')
        localStorage.setItem('theme','glowingBlue')
    }
    
    return(
        <div className = "wallpapersContainer">
            <style jsx>{`
                .wallpapersContainer {
                    display:flex;
                    flex-wrap:wrap;
                    width: 100%;
                }
                .colorPicker {
                    width:50px; 
                    height:50px;
                    cursor:pointer;
                    margin:3px;
                }
                .colorPicker:hover {
                    border:3px solid black;
                    border-radius:5px;
                }
                #roseGold {
                    background-color:#E0BFB8;
                }
                #dark{
                    background-color:#000000;
                }
                #light {
                    background-color:#ececec;
                }
                #glowingBlue {
                    background-color:#5C73F2;
                }
                `}</style>
            {/* daydesert */}
            
            <div className='colorPicker' id='light' onClick={setLight}></div>
            <div  className='colorPicker' id='roseGold' onClick={setRoseGold}></div>
            <div  className='colorPicker' id='dark' onClick={setDark}></div>
            <div  className='colorPicker' id='glowingBlue' onClick={setGlowingBlue}></div>
            {/* <PageIcon 
                onClick={setRoseGold}
                width="255px" 
                height="150px" 
                src='/images/themes/rose-gold-color-solid-background-1920x1080.png'
                name="Rose gold"
                >
            </PageIcon>
            <PageIcon
                onClick={setDark}
                width="255px" 
                height="150px" 
                src='/images/themes/black-color-solid-background-1920x1080.png'
                name="Dark"
                >
            </PageIcon>
            <PageIcon
                onClick={setTanjiro}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/1014466.jpg'
                name="Tanjiro"
                >
            </PageIcon> */}
        </div>
    )
}

export default Themes