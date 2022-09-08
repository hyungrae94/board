import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../contexts/UserContext';

export const withAuth = Component => props => {
    const route = useNavigate();
    const { isLogin } = useContext(Usercontext);

    useEffect(() => {
        if (!isLogin) {
            alert('login 필요');
            route('/board');
        }
    }, []);

    return <Component {...props} />;
};
