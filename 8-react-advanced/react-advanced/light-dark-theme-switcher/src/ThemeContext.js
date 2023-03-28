import { createContext, useState, useContext } from "react";

const ThemeContext = createContext({
    theme: "",
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            if (currentTheme === "light") {
                return "dark"
            } else {
                return "light"
            }
        })
    }

    const themeContext = {
        theme,
        toggleTheme
    }

    return < ThemeContext.Provider value={ themeContext} >
            { children }
        </ThemeContext.Provider >
    
};

export const useTheme = () => useContext(ThemeContext);
