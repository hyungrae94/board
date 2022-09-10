import { createContext, useEffect, useState } from 'react';

export const UserContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const ContextValue = {
        isLogin,
        setIsLogin,
        userInfo,
        setUserInfo,
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLogin(true);
            setUserInfo(user);
        } else {
            setIsLogin(false);
            setUserInfo({});
        }
    }, []);

    return <UserContext.Provider value={ContextValue}>{children}</UserContext.Provider>;
};

export const UserContext = createContext(null);
