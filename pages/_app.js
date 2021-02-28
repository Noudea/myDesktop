import ThemeProvider from '../providers/ThemeProvider'
import '../styles/globals.css'
import {useState,useEffect} from 'react'
import { ProgressCircle } from 'react-desktop/macOs';

function MyApp({ Component, pageProps }) {

    const [isloading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
    }, [])


  return(
      <>
        {isloading
        ?
            <>
                <ThemeProvider>
                    <Component {...pageProps} />  
                </ThemeProvider>
            </>
        : <><ProgressCircle size={25}/></>
        }
      </>
    )
}

export default MyApp