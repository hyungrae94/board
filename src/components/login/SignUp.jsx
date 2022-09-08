import * as Styled from './Login.style';
import { RiCloseLine } from 'react-icons/ri';

const SignUp = ({ setIsViewSignUp }) => {
    const onClickClose = () => {
        setIsViewSignUp(false);
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
                        <Styled.Label htmlFor="name">이름</Styled.Label>
                        <Styled.Input name="name" type="text" placeholder="이름을 입력해주세요." />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">이메일</Styled.Label>
                        <Styled.Input name="email" type="text" placeholder="이메일을 입력해주세요." />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">비밀번호</Styled.Label>
                        <Styled.Input name="password" type="password" placeholder="비밀번호를 입력해주세요." />
                    </Styled.InputContainer>
                </Styled.Main>
                <Styled.SignButton onClick={onClickClose} variant="contained">
                    회원가입
                </Styled.SignButton>
            </Styled.Container>
        </Styled.BackgroundContainer>
    );
};

export default SignUp;
