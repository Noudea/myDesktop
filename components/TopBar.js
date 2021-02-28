import {useContext,useState} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import {themeColors} from '../themes/themes'
import Clock from './Clock';


const TopBar = () => {
    const colors = themeColors[useContext(ThemeContext).theme]
    
    const newDate = new Date()
    console.log(newDate)
    return(
        <>
        <style jsx>{`
            .topBar {
                position: absolute;
                top: 0;
                height:30px;
                width:100%;
                background-color: ${colors.topBar};
                -webkit-backdrop-filter: blur(8px);
                backdrop-filter: blur(8px);
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 20px;
            }
            p {
                margin:0px;
            }
        `}</style>
            <div className='topBar'>
                <div>
                    <a href='https://github.com/noudea' target="_blank">Github</a>
                    <a href='https://www.instagram.com/oudeaweb/' target="_blank">Instagram</a>
                </div>
                <div>
                    <Clock></Clock> 
                </div>
            </div>
        </>
    )
}

export default TopBar