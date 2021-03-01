import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'
import {useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext'
import FullWindow from '../components/FullWindow';
import Welcome from '../components/windows/Welcome'
import Dock from '../components/Dock';
import TopBar from '../components/TopBar';

export default function Home() {

    console.log(useContext(ThemeContext))
  return (
  <div>
        <style jsx>{`
            main{
                width:100vw;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        `}</style>
      <Head>
        <title>My Desktop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0"></meta>
      </Head>
      <main>
        {/* <ThemeSwitcher></ThemeSwitcher> */}
        <TopBar></TopBar>
        <FullWindow height='500px' width='300px' title='Welcome'>
            <Welcome></Welcome>
        </FullWindow>
        <FullWindow height='500px' width='300px' title='Welcome'>
            div
        </FullWindow>
        <Dock></Dock>
      </main>
      <footer>
      </footer>
    </div>
  )
}
