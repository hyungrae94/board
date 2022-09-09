import styled from '@emotion/styled';
import { Button } from '@mui/material';

const UserCard = () => {
    return (
        <UserInfo>
            <UserAvatar>형래</UserAvatar>
            <InfoContainer>
                <h1>rea@squares.ai</h1>
                <span>우형래</span>
            </InfoContainer>
            <AddButton variant="outlined">글 쓰기</AddButton>
        </UserInfo>
    );
};

export default UserCard;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 250px;
    padding: 30px 0px;
    margin-right: 70px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    padding-top: 5px;
    border-radius: 50%;
    background-color: #795548;
    color: white;
    font-size: 26px;
`;

const InfoContainer = styled.div`
    text-align: center;
    h1 {
        margin-bottom: 10px;
        font-size: 16px;
    }

    span {
        display: inline-block;
        color: #7e7e7e;
        font-size: 13px;
    }
`;

const AddButton = styled(Button)`
    display: block;
    border-color: #e4e6e7;
    color: #7e7e7e;
    :hover {
        border-color: #e4e6e7;
        background-color: #e4e6e7;
    }
`;
