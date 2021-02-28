import {useContext,useState} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import {themeColors} from '../themes/themes'

const Dock = () => {
    
    const colors = themeColors[useContext(ThemeContext).theme]

    return(
        <>
            <style jsx>{`
                .dockContainer {
                    position: absolute;
                    bottom: 0;
                    width: 500px;
                    height: 60px;
                    background-color: ${colors.dock};
                    -webkit-backdrop-filter: blur(8px);
                    backdrop-filter: blur(8px);
                    border-radius: 10px 10px 0 0;
                }
                `}</style>

            <div className="dockContainer">

            </div>
        </>
    )
}

export default Dock