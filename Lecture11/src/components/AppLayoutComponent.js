import { Outlet } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import UserContext from "../context/UserContext.js";
import ThemeContext from "../context/ThemeContext.js"

const AppLayout = () => {
    const [emailId, setEmailId] = useState("divya123@gmail.com");
    const [theme, setTheme] = useState('dark');
    return (<ThemeContext.Provider value={{ themeContext: theme, setThemeContext: setTheme }}>
        <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
            <HeaderComponent />
            <Outlet />
        </UserContext.Provider >
    </ThemeContext.Provider>
    )
};

export default AppLayout;