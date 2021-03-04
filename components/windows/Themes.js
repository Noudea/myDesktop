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

    const setTanjiro = () => {
        setBackground("tanjiro")
        localStorage.setItem('background','tanjiro')
    }

    const setMuzan = () => {
        setBackground("muzan")
        localStorage.setItem('background','muzan')
    }
    
    const setTomiokaWater = () => {
        setBackground("tomiokaWater")
        localStorage.setItem('background','tomiokaWater')
    }

    const setTomioka = () => {
        setBackground("tomioka")
        localStorage.setItem('background','tomioka')
    }
    
    return(
        <div className = "wallpapersContainer">
            <style jsx>{`
                .wallpapersContainer {
                    display:flex;
                    justify-content: space-evenly;
                    flex-wrap:wrap;
                    width: 100%;
                }
                `}</style>
            {/* daydesert */}
            <PageIcon 
                onClick={setRoseGold}
                width="255px" 
                height="150px" 
                src='/images/themes/rose-gold-color-solid-background-1920x1080.png'
                name="Rose gold"
                >
            </PageIcon>
            {/* nightdesert */}
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
            </PageIcon>
        </div>
    )
}

export default Themes