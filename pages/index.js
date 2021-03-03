import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import FullWindow from '../components/FullWindow'
import Welcome from '../components/windows/Welcome'
import Dock from '../components/Dock'
import TopBar from '../components/TopBar'
import PageRenderContext from '../contexts/PageRenderContext'
import Image from 'next/image'
import PageIcon from '../components/icons/PageIcon'
import Wallpapers from '../components/windows/Wallpapers'


export default function Home() {
    console.log(useContext(ThemeContext))
    console.log(useContext(PageRenderContext))

    const settings = useContext(PageRenderContext).settings
    const welcome = useContext(PageRenderContext).welcome
    const projects = useContext(PageRenderContext).projects

    const { wallPapers, setWallPapers } = useContext(PageRenderContext)

    const openWallpapers = () => {
        if (wallPapers) {
            setWallPapers(false)
        } else {
            setWallPapers(true)
        }
    }

    return (
        <div>
            <style jsx>{`
                main {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .settingsContainer {
                    display: flex;
                }
                .settingsWrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;
                }
                .settingsWrapper p {
                    margin: 0px;
                }
            `}</style>
            <Head>
                <title>My Desktop</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width,height=device-height, initial-scale=1.0"
                ></meta>

            </Head>
            <main>
                {/* <ThemeSwitcher></ThemeSwitcher> */}
                <TopBar></TopBar>
                {projects ? 
                    <FullWindow
                        height="812px"
                        width="375px"
                        pageName="Projects"         
                    >
                        <>
                            <iframe src="http://localhost:3000/projets/cocoabunbuns/index.html"  name="myiFrame" scrolling="yes" frameborder="0" marginHeight="0px" marginWidth="0px" height="100%" width="100%" allowFullScreen></iframe>
                        </>
                    </FullWindow>
                    : <></>
                }

                {settings ? (
                    <>
                        <FullWindow
                            pageName="Settings"
                            height="150"
                            width="300px"
                        >
                            <div className="settingsContainer">
                                <div className="settingsWrapper">
                                    <PageIcon
                                        onClick={openWallpapers}
                                        name="Wallpapers"
                                        src="/images/backgrounds/1528184443-1370344293774.jpg"
                                        width="90px"
                                        height="90px"
                                        borderRadius = "5px"
                                    ></PageIcon>
                                </div>
                            </div>
                        </FullWindow>
                    </>
                ) : (
                    <></>
                )}
                {welcome ? (
                    <>
                        <FullWindow
                            pageName="Welcome"
                            height="500px"
                            width="300px"
                        >
                            <Welcome></Welcome>
                        </FullWindow>
                    </>
                ) : (
                    <></>
                )}
                {wallPapers ? (
                    <>
                        <FullWindow
                            height="400px"
                            width="850px"
                            pageName="Wallpapers"
                        >
                            <Wallpapers></Wallpapers>
                        </FullWindow>
                    </>
                ) : (
                    <></>
                )}
                <Dock></Dock>
            </main>
            <footer></footer>
        </div>
    )
}
