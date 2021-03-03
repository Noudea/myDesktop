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
import Projects from '../components/windows/Projects'
import Settings from '../components/windows/Settings'
import Themes from '../components/windows/Themes'

export default function Home() {
    console.log(useContext(ThemeContext))
    console.log(useContext(PageRenderContext))

    const settings = useContext(PageRenderContext).settings
    const welcome = useContext(PageRenderContext).welcome
    const projects = useContext(PageRenderContext).projects
    const cocoabunbuns = useContext(PageRenderContext).cocoabunbuns
    const wallPapers = useContext(PageRenderContext).wallPapers
    const themes = useContext(PageRenderContext).themes

    console.log(process.env.hostUrl + 'projets/cocoabunbuns/index.html')
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
                {projects ? (
                    <FullWindow
                        width="812px"
                        height="375px"
                        pageName="Projects"
                    >
                        <Projects></Projects>
                    </FullWindow>
                ) : (
                    <></>
                )}
                {cocoabunbuns ? (
                    <>
                        <FullWindow
                            width="375px"
                            height="812px"
                            pageName="Cocoabunbuns"
                        >
                            <iframe
                                src="/projets/cocoabunbuns/index.html"
                                name="myiFrame"
                                scrolling="yes"
                                frameBorder="0"
                                marginHeight="0px"
                                marginWidth="0px"
                                height="100%"
                                width="100%"
                                allowFullScreen
                            ></iframe>
                        </FullWindow>
                    </>
                ) : (
                    <></>
                )}

                {settings ? (
                    <>
                        <FullWindow
                            pageName="Settings"
                            height="150"
                            width="300px"
                        >
                            <Settings></Settings>
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
                {themes ? (
                    <>
                        <FullWindow
                            height="400px"
                            width="850px"
                            pageName="Themes"
                        >
                            <Themes></Themes>
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

                <Dock></Dock>
            </main>
            <footer></footer>
        </div>
    )
}
