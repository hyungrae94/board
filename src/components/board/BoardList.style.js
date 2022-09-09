import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 100%; */
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

export const BoardItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    margin-top: 10px;
    border: 1px solid gold;

    cursor: pointer;
`;

export const TextSection = styled.div`
    width: 400px;
    height: 100%;

    border: 1px solid blue;
`;

export const ImageSection = styled.div`
    width: 200px;
    height: 100%;

    border: 1px solid red;
`;
