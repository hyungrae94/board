import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
    width: 800px;
    padding: 30px;
    margin: auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

export const WriteHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 50px;
    margin-bottom: 20px;
`;

export const BackButton = styled(Button)`
    height: 36px;
    border-color: #cbcbcb;
    color: black;
    :hover {
        border-color: #cbcbcb;
        background-color: #e4e6e7;
    }
`;

export const AddButton = styled(Button)`
    height: 36px;
    background-color: #03a9f4;
    :hover {
        background-color: #a6d5fa;
    }
`;

export const WriteTitle = styled.input`
    width: 100%;
    height: 60px;
    margin: 40px 0px;
    border: none;
    border-bottom: 2px solid #7e7e7e;

    font-size: 30px;
    font-weight: bolder;
    outline: none;
`;

export const WriteContent = styled.textarea`
    min-height: 450px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 20px;
`;

export const UploadImage = styled.div`
    position: relative;
    width: 100%;
    height: 400px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const UploadButton = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 20px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: 0.2px solid #cbcbcb;
    border-radius: 50%;
    background-color: white;
    font-size: 20px;

    cursor: pointer;

    span {
        margin-top: 3px;
        display: inline-block;
        font-size: 10px;
        font-weight: bolder;
    }

    :hover {
        background-color: #e4e6e7;
    }
`;
