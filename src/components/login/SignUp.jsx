import * as Styled from './Login.style';
import { RiCloseLine } from 'react-icons/ri';
import axios from 'axios';
import { useState } from 'react';
import { randomColor } from '../../commons/utility';

const SignUp = ({ setIsViewSignUp }) => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        name: '',
        color: randomColor(),
    });

    const onChangeValue = event => {
        setInputValue(pre => ({
            ...pre,
            [event.target.name]: event.target.value,
        }));
    };

    const onClickClose = () => {
        setIsViewSignUp(false);
    };

    const onClickSignUp = async () => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/add.php',
            inputValue
        );

        if (result.data.message === 'Create') setIsViewSignUp(false);
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
                        <Styled.Input
                            name="name"
                            type="text"
                            placeholder="이름을 입력해주세요."
                            value={inputValue.name}
                            onChange={onChangeValue}
                        />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">이메일</Styled.Label>
                        <Styled.Input
                            name="email"
                            type="text"
                            placeholder="이메일을 입력해주세요."
                            value={inputValue.email}
                            onChange={onChangeValue}
                        />
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label htmlFor="email">비밀번호</Styled.Label>
                        <Styled.Input
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            value={inputValue.password}
                            onChange={onChangeValue}
                        />
                    </Styled.InputContainer>
                </Styled.Main>
                <Styled.SignButton onClick={onClickSignUp} variant="contained">
                    회원가입
                </Styled.SignButton>
            </Styled.Container>
        </Styled.BackgroundContainer>
    );
};

export default SignUp;
