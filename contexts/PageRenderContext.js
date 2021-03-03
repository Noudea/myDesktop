import React from 'react';
import {themeColors,themeBackgrounds} from '../themes/themes'

const PageRenderContext = React.createContext({
    welcome: true,
    setWelcome: () => {},
    settings: false,
    setSettings: () => {},
    wallPapers : false,
    setWallPapers : () => {},
    projects : false,
    setProjects : () => {},
    cocoabunbuns : false,
    setCocoabunbuns : () => {},
    themes : false,
    setThemes : () => {}
});

export default PageRenderContext;

