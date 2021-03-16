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
  playing : '',
  setPlaying : () => {},
});

export default PlayerContext;

