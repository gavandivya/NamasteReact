import { createContext } from "react";

const UserContext = createContext({
    email: "divya@gmail.com",
    setEmail: () => { }
});

export default UserContext;
