import * as Style from './Sign.style';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Usercontext } from '../../contexts/UserContext';

const SignIn = ({ handleClose }) => {
    const { setIsLogin, setUserInfo } = useContext(Usercontext);
    const [isAlert, setIsAlert] = useState(false);

    const onClickClose = () => {
        handleClose(false);
    };

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

    const onClickSignIn = async () => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/user/get.php',
            user
        );

        if (result.data.message === 'fail') {
            setIsAlert(true);
            return;
        }

        setIsAlert(false);
        setIsLogin(true);
        setUserInfo(result.data);
        localStorage.setItem('user', JSON.stringify(result.data));
        handleClose(false);
    };

    return (
        <>
            {isAlert && <Style.AlertCustom severity="error">check email or password</Style.AlertCustom>}
            <Style.SignContainer>
                <Style.CloseIcon onClick={onClickClose} />
                <Style.Label htmlFor="email">Email address</Style.Label>
                <Style.Input name="email" type="text" value={user.email} onChange={onChangeInput} />
                <Style.Label htmlFor="password">Password</Style.Label>
                <Style.Input name="password" type="password" value={user.password} onChange={onChangeInput} />
                <Style.SignButton onClick={onClickSignIn}>Sign in</Style.SignButton>
            </Style.SignContainer>
        </>
    );
};

export default SignIn;
