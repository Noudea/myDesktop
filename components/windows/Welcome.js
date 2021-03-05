import { useContext } from 'react'
import ThemeContext from "../../contexts/ThemeContext";
import { themeColors } from "../../themes/themes";


const Welcome = () => {

    const colors = themeColors[useContext(ThemeContext).theme]
    return(
        <>
        <style jsx>{`
            .welcomeContainer {
                display:flex;
                flex-direction :column;
            }
            span {
                background-color: ${colors.accentMild}
            }
        `}</style>
            <div className='welcomeContainer'>
                <h2>Bienvenue sur mon Portfolio</h2>
                <p>Vous pourrez trouver tout <span>mes projets</span> ici, pour y accéder vous pouvez cliquer sur le <span>dossier de projet</span>.</p>
                <p>Dans <span>Spotify</span> vous pourrez trouver mes musiques préférées, <span>le rap</span>, <span>la synthwave</span> et quelques musiques pour m'aider a me concentrer dans que je code.</p>
                <p>Vous pouvez changer <span>le thème</span> et le<span> fond d'écran</span> dans <span>settings</span>. Alors n'hésitez pas à y faire un tour.</p>
                <p><span>Bonne exploration</span></p>
            </div>
        </>
    )
}

export default Welcome;