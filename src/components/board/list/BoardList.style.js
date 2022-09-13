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

export const BoardItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 0.2px solid #7e7e7e;
    overflow: hidden;

    cursor: pointer;
`;

export const TextSection = styled.div`
    width: 400px;
    height: 100%;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
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
    width: 350px;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: medium;
`;

export const Content = styled.p`
    display: block;
    width: 350px;
    height: 60px;
    padding-top: 10px;
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
`;

export const ImageSection = styled.div`
    width: 200px;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;
