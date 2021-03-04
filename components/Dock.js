import {useContext,useState} from 'react';
import PageRenderContext from '../contexts/PageRenderContext';
import ThemeContext from '../contexts/ThemeContext';
import {themeColors} from '../themes/themes'
import Icon from './icons/Icon';

const Dock = () => {
    
    const colors = themeColors[useContext(ThemeContext).theme]
    const { settings, setSettings,
        projects , setProjects,
        profile , setProfile,
        spotify, setSpotify
        } = useContext(PageRenderContext);


    const openSettings = () => {

        // const { openPages, setOpenPages } = useContext(PageRenderContext);
        if(settings) {
            setSettings(false)
        } else {
             setSettings(true)
        }
        // setOpenPages(OpenPages.Settings.true)
    }

    const openProjects = () => {
        if(projects) {
            setProjects(false)
        } else {
            setProjects(true)
        }
    }

    const openProfile = () => {
        if(profile) {
            setProfile(false)
        } else {
            setProfile(true)
        }   
    }

    const openSpotify = () => {
        if(spotify) {
            setSpotify(false)
        } else {
            setSpotify(true)
        } 
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
                    <Icon name='Mon Profil' onClick={openProfile} src='icons/app-store-2019-09-25.png' width='90px' height='90px'></Icon>
                    <Icon name='Mes projets' onClick={openProjects} src='icons/app-store-2019-09-25.png' width='90px' height='90px'></Icon>
                    <Icon name='Spotify'onClick={openSpotify} src='icons/168px-Spotify_logo_without_text.png' width='90px' height='90px'></Icon>
                    <Icon name='Settings'onClick={openSettings} src='svg/apple-settings.svg' width='90px' height='90px'></Icon>
                </div>
            </div>
        </>
    )
}

export default Dock