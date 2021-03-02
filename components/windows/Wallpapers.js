import PageIcon from "../icons/PageIcon"
import { useContext } from 'react'
import ThemeContext from "../../contexts/ThemeContext";

const Wallpapers = () => {

    const { background, setBackground } = useContext(ThemeContext);

    const setNightDesert = () => {
        console.log('changebackground to desert night')
        setBackground("nightDesert")
        localStorage.setItem('background','nightDesert')
    }

    const setDayDesert = () => {
        console.log('changebackground to desert day')
        setBackground("dayDesert")
        localStorage.setItem('background','dayDesert')
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
                onClick={setDayDesert}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/1528184443-1370344293774.jpg'
                name="Day Desert"
                >
            </PageIcon>
            {/* nightdesert */}
            <PageIcon
                onClick={setNightDesert}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/1528184483-1410138568815.jpg'
                name="Night Desert"
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
            <PageIcon
                onClick={setMuzan}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/thumb-1920-1015202.png'
                name="Muzan"
                >
            </PageIcon>
            <PageIcon
                onClick={setTomiokaWater}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/1030342.jpg'
                name="Tomioka"
                >
            </PageIcon>
            <PageIcon
                onClick={setTomioka}
                width="255px" 
                height="150px" 
                src='/images/backgrounds/1033456.png'
                name="Tomioka"
                >
            </PageIcon>
        </div>
    )
}

export default Wallpapers