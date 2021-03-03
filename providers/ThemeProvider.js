import { useState , useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { themeColors , themeBackgrounds } from '../themes/themes'
import Image from 'next/image'
import { ProgressCircle } from 'react-desktop/macOs'


const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    const [background, setBackground] = useState("nightDesert");
    const [isLoaded,setIsLoaded] = useState(false)
    const value = { 
        theme,
        setTheme,
        background,
        setBackground
    };
    useEffect(() => {
        const localStorage = window.localStorage
        
        if(!localStorage.getItem('theme')) {
            localStorage.setItem('theme',theme)
        } else {
            setTheme(localStorage.getItem('theme'))
        }
        if(!localStorage.getItem('background')) {
            localStorage.setItem('background',background)
        } else {
            setBackground(localStorage.getItem('background'))
        }
        setIsLoaded(true)
    }, [])
        return(
            <>
                <style jsx>{`
                    .bgWrap {
                        position: absolute;
                        display:block;
                        height: 100vh;
                        width: 100vw;
                        overflow: hidden;
                        z-index: -1;
                        }
                `}</style>

                <ThemeContext.Provider value = {value}>
                    <>
                        {isLoaded 
                            ?
                                <div className='bgWrap'>
                                    <Image
                                        alt="backgroundImage"
                                        src= {themeBackgrounds[background]}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                    />
                                </div>
                            :
                            <ProgressCircle size={25}/>
                        }
                    </>
                    {children}
                </ThemeContext.Provider>
            </>
        )
}

export default ThemeProvider