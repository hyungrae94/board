import * as Styled from './Login.style';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill, RiFacebookFill, RiCloseLine } from 'react-icons/ri';

const Login = ({ setIsViewLogin, setIsViewSignUp }) => {
    const onClickClose = () => {
        setIsViewLogin(false);
    };

    const onClickSignUp = () => {
        setIsViewLogin(false);
        setIsViewSignUp(true);
    };

    return (
        <Styled.BackgroundContainer>
            <Styled.Container>
                <Styled.CloseIcon onClick={onClickClose}>
                    <RiCloseLine />
                </Styled.CloseIcon>
                <h1>SQUARES</h1>
                <span>Onboarding Project</span>
                <Styled.Main>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">이메일</Styled.Label>
                        <Styled.Input name="email" type="text" placeholder="이메일을 입력해주세요." />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">비밀번호</Styled.Label>
                        <Styled.Input name="password" type="password" placeholder="비밀번호를 입력해주세요." />
                    </Styled.InputContainer>
                </Styled.Main>
                <Styled.Footer>
                    <Styled.SignButton variant="contained">로그인</Styled.SignButton>
                    <Styled.SignButton onClick={onClickSignUp} variant="contained">
                        회원가입
                    </Styled.SignButton>
                    <Styled.SignContainer>
                        <Styled.SnsIcon color="#fee601">
                            <RiKakaoTalkFill />
                        </Styled.SnsIcon>
                        <Styled.SnsIcon color="#1676f2" fontColor="white">
                            <RiFacebookFill />
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
