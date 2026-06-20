import { createContext, useState, useEffect } from "react";

export const UserSignInContext = createContext();

const UserSignInContextProvider = ({ children }) => {
    const [userSignIn, setUserSignIn] = useState(localStorage.getItem("VelouraUserInfo"))
    const checkUser = () => {
        localStorage.setItem("VelouraUserInfo", "xxxxxx");
        setUserSignIn(localStorage.getItem("VelouraUserInfo"));
    };

    // useEffect(() => {
    //     checkUser();
    // }, []);


    const UserLogOut = () => {
        localStorage.removeItem("VelouraUserInfo")
        setUserSignIn(null)
    }


    return (
        <UserSignInContext.Provider value={{ checkUser, userSignIn, UserLogOut }}>
            {children}
        </UserSignInContext.Provider>
    );
};

export default UserSignInContextProvider;