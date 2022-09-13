import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Navigation = styled.nav`
    position: fixed;
    z-index: 99;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1200px;
    width: 100%;
    height: 50px;
    padding: 0px 250px 0px 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const Logo = styled.h1`
    display: inline-block;
    width: 170px;
    height: 100%;
    color: black;
    text-align: center;
`;

export const LoginButton = styled(Button)`
    color: black;
    :hover {
        background-color: #e4e6e7;
    }
`;

export const AvatarContainer = styled.div`
    position: relative;
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 2px solid;
    border-color: ${({ isBorder }) => isBorder && '#03a9f4'};
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: white;
    font-size: 10px;
    cursor: pointer;
`;

export const AvatarMenu = styled.div`
    position: absolute;
    z-index: 99;
    top: 35px;
    left: -34px;
    width: 100px;
    padding-bottom: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    text-align: center;
`;

export const MenuList = styled.li`
    border-radius: 5px;
    padding: 5px;
    margin: 10px 10px 0px 10px;
    color: #7e7e7e;
    font-size: 12px;
    cursor: pointer;

    :hover {
        background-color: #f7f7f7;
    }
`;
