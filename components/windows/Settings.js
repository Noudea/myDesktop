import { useContext } from 'react'
import PageRenderContext from '../../contexts/PageRenderContext'
import PageIcon from '../icons/PageIcon'

const Settings = () => {
    const { wallPapers, setWallPapers } = useContext(PageRenderContext)
    const { themes, setThemes } = useContext(PageRenderContext)

    const openWallpapers = () => {
        if (wallPapers) {
            setWallPapers(false)
        } else {
            setWallPapers(true)
        }
    }

    const openThemes = () => {
        if (themes) {
            setThemes(false)
        } else {
            setThemes(true)
        }
    }

    return (
        <>
            <style jsx>{`
                .settingsContainer {
                    display: flex;
                    flex-direction:row;
                    align-items: center;
                }

            `}</style>
            <div className="settingsContainer">
                <div className="settingsWrapper">
                    <PageIcon
                        onClick={openWallpapers}
                        name="Wallpapers"
                        src="/images/backgrounds/1528184443-1370344293774.jpg"
                        width="90px"
                        height="90px"
                        borderRadius="5px"
                    ></PageIcon>
                </div>
                    <PageIcon
                        onClick={openThemes}
                        name="Themes"
                        src="/icons/theme.png"
                        width="90px"
                        height="90px"
                        borderRadius="5px"
                    ></PageIcon>
            </div>
        </>
    )
}

export default Settings
