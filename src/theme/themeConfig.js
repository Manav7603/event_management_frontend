import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const themeConfig = (mode) => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

export default themeConfig;
