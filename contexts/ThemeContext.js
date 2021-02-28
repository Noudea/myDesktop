import React from 'react';
import {themeColors,themeBackgrounds} from '../themes/themes'

const ThemeContext = React.createContext({
  theme: "light",
  background : 'nightDesert',
  setTheme: () => {},
  setBackground: () => {}
});

export default ThemeContext;

