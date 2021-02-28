import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { background, setBackground } = useContext(ThemeContext);

  const changeTheme = () => {
    const localStorage = window.localStorage
    setTheme("dark")
    localStorage.setItem('theme','dark')
    
    setBackground("dayDesert")
    localStorage.setItem('background','dayDesert')
  }
  return (
    <button onClick={changeTheme}>
      Switch Language (Current: {theme})
      Switch Language (Current: {background})
    </button>
  );
};

export default ThemeSwitcher;