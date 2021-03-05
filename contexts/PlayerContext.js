import React from 'react';

const PlayerContext = React.createContext({
  song: "",
  songSrc : '',
  setSong: () => {},
  setSongSrc: () => {},
  songKey : '',
  setSongKey : () => {},
  playlist : '',
  setPlaylist : () => {},
});

export default PlayerContext;

