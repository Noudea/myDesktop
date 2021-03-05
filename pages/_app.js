import ThemeProvider from '../providers/ThemeProvider'
import '../styles/normalize.css'
import '../styles/globals.css'
import {useState,useEffect} from 'react'
import { ProgressCircle } from 'react-desktop/macOs';
import { useContext } from 'react'
import PageRenderContext from '../contexts/PageRenderContext';

function MyApp({ Component, pageProps }) {

    const [isloading,setIsLoading] = useState(false)
    const [welcome, setWelcome] = useState(true);
    const [settings, setSettings] = useState(false);
    const [wallPapers, setWallPapers] = useState(false);
    const [projects, setProjects] = useState(false);
    const [cocoabunbuns, setCocoabunbuns] = useState(false);
    const [themes, setThemes] = useState(false);
    const [profile,setProfile] = useState(false);
    const [spotify,setSpotify] = useState(false);

    const value = { 
        welcome,
        setWelcome,
        settings,
        setSettings,
        wallPapers,
        setWallPapers,
        projects,
        setProjects,
        cocoabunbuns,
        setCocoabunbuns,
        themes,
        setThemes,
        profile,
        setProfile,
        spotify,
        setSpotify
    };


    useEffect(() => {
        setIsLoading(true)
    }, [])


  return(
      <>
        {isloading
        ?
            <>
                <ThemeProvider>
                    <PageRenderContext.Provider value = {value}>
                        <Component {...pageProps} />  
                    </PageRenderContext.Provider>
                </ThemeProvider>
            </>
        : <><ProgressCircle size={25}/></>
        }
      </>
    )
}

export default MyApp