import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { randomColor } from '../../commons/utility';
import { UserContext } from '../../contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
import { signInApi, signUpApi, snsLoginApi } from '../../api/userApi';

const KakaoCallback = () => {
    const route = useNavigate();
    const { setIsLogin, setUserInfo } = useContext(UserContext);
    const getToken = async code => {
        const result = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=http://localhost:3000/kakao&code=${code}`,
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            }
        );
        await getUserInfo(result.data.access_token);
        localStorage.setItem('token', result.data.access_token);
    };

    const getUserInfo = async token => {
        const result = await axios.get(`https://kapi.kakao.com/v1/oidc/userinfo`, {
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (!(await checkUser(result.data.sub))) {
            addUser(result.data.sub, result.data.nickname);
        }

        await loginUser(result.data.sub);
    };

    const checkUser = async userId => {
        const result = await snsLoginApi(userId);

        if (result.data.message === 'fail') {
            return false;
        }

        return true;
    };

    const addUser = async (id, name) => {
        signUpApi({ email: id, password: '123', name, color: randomColor() });
    };

    const loginUser = async id => {
        const result = await signInApi({ email: id, password: '123' });

        setIsLogin(true);
        setUserInfo(result.data);
        localStorage.setItem('user', JSON.stringify(result.data));

        route('/');
    };

    useEffect(() => {
        const param = new URL(document.location).searchParams;
        if (param.get('code')) getToken(param.get('code'));
    }, []);

    return (
        <Background>
            <CircularProgress color="success" />
        </Background>
    );
};

export default KakaoCallback;

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
