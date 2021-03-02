import React from 'react';
import {themeColors,themeBackgrounds} from '../themes/themes'

const PageRenderContext = React.createContext({
    welcome: true,
    setWelcome: () => {},
    settings: false,
    setSettings: () => {},
    wallPapers : false,
    setWallPapers : () => {}
});

export default PageRenderContext;

