import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const route = useNavigate();

    const getToken = async code => {
        const result = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=eaffb2e6e2f844601a9e1e35e7231391&redirect_uri=http://localhost:3000/kakao&code=${code}`,
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            }
        );
        getUserInfo(result.data.access_token);
        console.log(result);
        localStorage.setItem('token', result.data.access_token);
    };

    const getUserInfo = async token => {
        const result = await axios.get(`https://kapi.kakao.com/v1/oidc/userinfo`, {
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        console.log(result);
    };

    const onClickLogout = async () => {
        const token = localStorage.getItem('token');

        const result = await axios.get(`https://kapi.kakao.com/v1/user/logout`, {
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        console.log(result);
        route('/');
    };

    useEffect(() => {
        const param = new URL(document.location).searchParams;
        if (param.get('code')) getToken(param.get('code'));
    }, []);

    return (
        <div>
            <h1>kakao callback</h1>
            <button onClick={onClickLogout}>로그아웃</button>
        </div>
    );
};

export default KakaoCallback;
