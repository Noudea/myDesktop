import React from 'react';

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
    setThemes : () => {},
    profiles : false,
    setProfile : () => {},
    spotify : false,
    setSpotify : () => {}
});

export default PageRenderContext;

