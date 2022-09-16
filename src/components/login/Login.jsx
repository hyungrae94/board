import * as Styled from './Login.style';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill, RiCloseLine } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';

const KAKAO_AUTH_URL =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=eaffb2e6e2f844601a9e1e35e7231391&redirect_uri=http://localhost:3000/kakao';

const Login = ({ setIsViewLogin, setIsViewSignUp }) => {
    const { setIsLogin, setUserInfo } = useContext(UserContext);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const onChangeInput = event => {
        setUser(pre => ({
            ...pre,
            [event.target.name]: event.target.value,
        }));
    };

    const onClickSignUp = () => {
        setIsViewLogin(false);
        setIsViewSignUp(true);
    };

    const onClickSignIn = async () => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/get.php',
            user
        );

        if (result.data.message === 'fail') {
            alert('아이디, 비밀번호를 확인해주세요.');
            return;
        }

        setIsLogin(true);
        setUserInfo(result.data);
        setIsViewLogin(false);

        console.log(result.data);
        localStorage.setItem('user', JSON.stringify(result.data));
    };

    const onClickKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <Styled.BackgroundContainer>
            <Styled.Container>
                <Styled.CloseIcon onClick={() => setIsViewLogin(false)}>
                    <RiCloseLine />
                </Styled.CloseIcon>
                <h1>SQUARES</h1>
                <span>Onboarding Project</span>
                <Styled.Main>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">이메일</Styled.Label>
                        <Styled.Input
                            name="email"
                            type="text"
                            placeholder="이메일을 입력해주세요."
                            value={user.email}
                            onChange={onChangeInput}
                        />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">비밀번호</Styled.Label>
                        <Styled.Input
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            value={user.password}
                            onChange={onChangeInput}
                        />
                    </Styled.InputContainer>
                </Styled.Main>
                <Styled.Footer>
                    <Styled.SignButton variant="contained" onClick={onClickSignIn}>
                        로그인
                    </Styled.SignButton>
                    <Styled.SignButton onClick={onClickSignUp} variant="contained">
                        회원가입
                    </Styled.SignButton>
                    <Styled.SignContainer>
                        <Styled.SnsIcon color="#fee601" onClick={onClickKakaoLogin}>
                            <RiKakaoTalkFill />
                        </Styled.SnsIcon>
                        <Styled.SnsIcon color="#18ce5f" fontColor="white">
                            <SiNaver />
                        </Styled.SnsIcon>
                        <Styled.SnsIcon color="white">
                            <FcGoogle />
                        </Styled.SnsIcon>
                    </Styled.SignContainer>
                </Styled.Footer>
            </Styled.Container>
        </Styled.BackgroundContainer>
    );
};

export default Login;
