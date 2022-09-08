import styled from '@emotion/styled';
import Alert from '@mui/material/Alert';
import { BiX } from 'react-icons/bi';

export const SignContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 350px;
    padding: 30px;
    border-radius: 10px;
    background-color: white;
`;

export const CloseIcon = styled(BiX)`
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 999;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const Label = styled.label`
    display: block;
    margin: 10px 0px;

    font-size: 20px;
`;

export const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 5px;

    border-color: ${({ validation = true }) => (validation ? 'black' : 'red')};
    font-size: 20px;
    outline: none;
`;

export const SignButton = styled.button`
    width: 100%;
    height: 32px;
    margin-top: 30px;

    border: none;
    border-radius: 5px;
`;

export const AlertCustom = styled(Alert)`
    position: relative;
    width: 350px;
    margin-bottom: 30px;
    border-radius: 10px;

    svg {
        top: 11px;
    }
`;
