import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 800px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    h1 {
        margin-right: 10px;
        font-size: 15px;
    }
    span {
        color: #7e7e7e;
        font-size: 12px;
    }
`;

export const UserInfoInner = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: white;
`;

export const Title = styled.h1`
    width: 100%;
    margin: 40px 0px;

    word-break: break-all;
`;

export const Content = styled.pre`
    width: 100%;
    font-size: 18px;

    white-space: pre-wrap;
`;

export const UploadImage = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
