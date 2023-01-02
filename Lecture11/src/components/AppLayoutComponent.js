import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import UserContext from "../context/UserContext.js";
import ThemeContext from "../context/ThemeContext.js"
import store from "../store/reduxStore";

const AppLayout = () => {
    const [emailId, setEmailId] = useState("divya123@gmail.com");
    const [theme, setTheme] = useState('dark');
    return (<Provider store={store}>
        <ThemeContext.Provider value={{ themeContext: theme, setThemeContext: setTheme }}>
            <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
                <HeaderComponent />
                <Outlet />
            </UserContext.Provider >
        </ThemeContext.Provider>
    </Provider>
    )
};

export default AppLayout;