import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'
import {useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext'

export default function Home() {

    console.log(useContext(ThemeContext))
  return (
  <div>
        <style jsx>{`
        `}</style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeSwitcher></ThemeSwitcher>
      </main>
      <footer>
      </footer>
    </div>
  )
}
