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

    return <Usercontext.Provider value={ContextValue}>{children}</Usercontext.Provider>;
};

export const Usercontext = createContext(null);
