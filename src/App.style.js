import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: auto;
`;

// Header
export const Header = styled.header`
    width: 100%;
    margin-bottom: 40px;
`;
export const InfoSection = styled.section`
    height: 30px;
    margin-top: 10px;
    text-align: right;
`;

export const UserName = styled.span`
    color: blue;
    margin: 10px;
`;

export const SignOutButton = styled(Link)`
    margin: 10px;
    color: #8a8a8a;
    font-size: 13px;

    :hover {
        color: #333333;
    }
`;

export const InfoButton = styled.button`
    margin: 10px 10px;
    border: none;
    background-color: transparent;

    color: #8a8a8a;

    :hover {
        color: #333333;
    }
`;

export const Title = styled(Link)`
    text-align: center;
    color: black;
`;

export const SubTitle = styled.h5`
    font-weight: 400;
    text-align: center;
`;

// Navbar
export const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #333333;
`;

export const NavMenu = styled(Link)`
    color: #cecece;

    :hover {
        color: white;
    }
`;

// Main
export const Main = styled.main`
    width: 100%;
    margin-top: 40px;
`;
