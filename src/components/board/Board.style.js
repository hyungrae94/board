import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

export const UserInfo = styled.div`
    width: 30%;
    height: 40%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #795548;
    color: white;
`;

export const AddButton = styled(Button)`
    display: block;
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;

    nav {
        margin-bottom: 20px;
    }

    .Mui-selected {
        background-color: #03a9f4;

        :hover {
            background-color: #2196f3;
        }
    }
`;

export const BoardItem = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;

    cursor: pointer;
`;
