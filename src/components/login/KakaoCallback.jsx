import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { randomColor } from '../../commons/utility';
import { UserContext } from '../../contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

const KakaoCallback = () => {
    const route = useNavigate();
    const { setIsLogin, setUserInfo } = useContext(UserContext);

    const getToken = async code => {
        const result = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=eaffb2e6e2f844601a9e1e35e7231391&redirect_uri=http://localhost:3000/kakao&code=${code}`,
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

    const onClickLogout = async () => {
        const token = localStorage.getItem('token');

        await axios.get(`https://kapi.kakao.com/v1/user/logout`, {
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        localStorage.clear();
        route('/');
    };

    const checkUser = async userId => {
        const result = await axios.get(
            `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/snsUser/get.php?id=${userId}`
        );

        if (result.data.message === 'fail') {
            return false;
        }

        return true;
    };

    const addUser = async (id, name) => {
        await axios.post('http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/add.php', {
            email: id,
            password: '123',
            name,
            color: randomColor(),
        });
    };

    const loginUser = async id => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/get.php',
            {
                email: id,
                password: '123',
            }
        );

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

    span {
    }
`;
