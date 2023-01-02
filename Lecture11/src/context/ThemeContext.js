import { createContext } from "react";

const ThemeContext = createContext({
    themeContext: "default",
    setThemeContext: () => { }
});


export default ThemeContext;