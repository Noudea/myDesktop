import {useContext,useState} from 'react';
import PageRenderContext from '../contexts/PageRenderContext';
import ThemeContext from '../contexts/ThemeContext';
import {themeColors} from '../themes/themes'
import Icon from './icons/Icon';

const Dock = () => {
    
    const colors = themeColors[useContext(ThemeContext).theme]
    const { settings, setSettings } = useContext(PageRenderContext);
    
    const openSettings = () => {

        // const { openPages, setOpenPages } = useContext(PageRenderContext);
        if(settings) {
            setSettings(false)
        } else {
             setSettings(true)
        }
        // setOpenPages(OpenPages.Settings.true)
    }

    return(
        <>
            <style jsx>{`
                .dockContainer {
                    position: absolute;
                    bottom: 0;
                    width: 500px;
                    height: 60px;
                    background-color: ${colors.dock};
                    border-radius: 10px 10px 0 0;
                }
                .IconContainer {
                    position:relative;
                    align-items: center;
                    bottom:60px;
                    display:flex;
                    justify-content:center;
                    height:120px;
                }
                `}</style>

            <div className="dockContainer">
                <div className='IconContainer'>
                    <Icon onClick={openSettings} src='svg/apple-settings.svg' width='90px' height='90px'></Icon>
                </div>
            </div>
        </>
    )
}

export default Dock