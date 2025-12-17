import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children , initialState = "light"}) => {

    const [theme, setTheme] = useState(initialState);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;