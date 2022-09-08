import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const BackgroundContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5); /*까만색(0,0,0) 50% 불투명도*/
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    background-color: white;
`;

export const Main = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin-top: 70px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #7e7e7e;
    font-size: 15px;
`;

export const InputContainer = styled.li`
    margin-bottom: 30px;
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 10px;
    border: 0.2px solid black;
    border-radius: 5px;
    font-size: 18px;
    font-weight: lighter;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 200px;
`;

export const SignButton = styled(Button)`
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
`;

export const SignContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const SnsIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border: ${({ color }) => color === 'white' && '0.2px solid #7e7e7e'};
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: ${({ fontColor }) => fontColor};

    cursor: pointer;

    svg {
        font-size: 30px;
    }
`;

export const CloseIcon = styled.div`
    margin-left: 300px;
    margin-bottom: 10px;
    font-size: 32px;
    cursor: pointer;
`;
