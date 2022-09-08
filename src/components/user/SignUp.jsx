import axios from 'axios';
import { useState } from 'react';
import * as Style from './Sign.style';

const SignUp = ({ handleClose }) => {
    const [isComplete, setIsComplete] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        name: '',
    });
    const [validation, setValidation] = useState({
        email: true,
        password: true,
        name: true,
    });

    const onChangeValue = event => {
        setInputValue(pre => ({
            ...pre,
            [event.target.name]: event.target.value,
        }));
    };

    const onClickClose = () => {
        setIsComplete(false);
        handleClose(false);
    };

    const checkValidation = () => {
        let isCheck = true;

        if (inputValue.name === '') {
            setValidation(pre => ({ ...pre, name: false }));
            isCheck = false;
        } else {
            setValidation(pre => ({ ...pre, name: true }));
        }

        if (inputValue.email === '') {
            setValidation(pre => ({ ...pre, email: false }));
            isCheck = false;
        } else {
            setValidation(pre => ({ ...pre, email: true }));
        }

        if (inputValue.password === '') {
            setValidation(pre => ({ ...pre, password: false }));
            isCheck = false;
        } else {
            setValidation(pre => ({ ...pre, password: true }));
        }

        return isCheck;
    };

    const onClickSignUp = async () => {
        if (checkValidation()) {
            const result = await axios.post(
                'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/add.php',
                inputValue
            );

            if (result.data.message === 'Create') setIsComplete(true);
        }
    };

    return (
        <>
            {isComplete ? (
                <Style.AlertCustom severity="success">
                    <Style.CloseIcon onClick={onClickClose} />
                    Complete !
                </Style.AlertCustom>
            ) : (
                <Style.SignContainer>
                    <Style.CloseIcon onClick={onClickClose} />
                    <Style.Label htmlFor="name">Enter your name</Style.Label>
                    <Style.Input
                        validation={validation.name}
                        name="name"
                        type="text"
                        value={inputValue.name}
                        onChange={onChangeValue}
                    />
                    <Style.Label htmlFor="email" value={inputValue.email}>
                        Enter your email address
                    </Style.Label>
                    <Style.Input validation={validation.email} name="email" type="text" onChange={onChangeValue} />
                    <Style.Label htmlFor="">Enter your Password</Style.Label>
                    <Style.Input
                        validation={validation.password}
                        name="password"
                        type="password"
                        value={inputValue.password}
                        onChange={onChangeValue}
                    />
                    <Style.SignButton onClick={onClickSignUp}>Sign up</Style.SignButton>
                </Style.SignContainer>
            )}
        </>
    );
};
export default SignUp;
