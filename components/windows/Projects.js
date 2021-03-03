import PageIcon from "../icons/PageIcon"
import { useContext } from 'react'
import PageRenderContext from "../../contexts/PageRenderContext";

const Projects = () => {

    const { cocoabunbuns, setCocoabunbuns } = useContext(PageRenderContext);

    const openCocoabunbuns = () => {
        if(cocoabunbuns) {
            setCocoabunbuns(false)
        } else {
            setCocoabunbuns(true)
        }
    }
    
    return(
        <div className = "wallpapersContainer">
            <style jsx>{`
                .wallpapersContainer {
                    display:flex;
                    justify-content: space-evenly;
                    flex-wrap:wrap;
                    width: 100%;
                }
                `}</style>
            <PageIcon 
                onClick={openCocoabunbuns}
                width="255px"
                height="150px" 
                src='/images/projets/cocoabunbuns.png'
                name="Cocoabunbuns"
                >
            </PageIcon>
        </div>
    )
}

export default Projects