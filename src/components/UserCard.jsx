import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { replaceName } from '../commons/utility';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserCard = ({ user, deleteBoard, updateBoard, page }) => {
    const route = useNavigate();
    const { isLogin, userInfo } = useContext(UserContext);

    const onClickWrite = () => {
        isLogin ? route('/write') : alert('로그인을 해주세요.');
    };

    return (
        <UserInfo>
            {isLogin ? (
                <UserAvatar color={userInfo.color}>{replaceName(userInfo.name || '')}</UserAvatar>
            ) : (
                <UserAvatar color="#bbbabb">
                    <FiUser />
                </UserAvatar>
            )}
            <InfoContainer>
                {isLogin ? (
                    <>
                        <h1>{userInfo.email}</h1>
                        <span>{userInfo.name}</span>
                    </>
                ) : (
                    <h1>로그인을 해주세요.</h1>
                )}
            </InfoContainer>
            <div style={{ display: 'flex' }}>
                {userInfo.id === user.id && page === 'detail' ? (
                    <>
                        <UpdateButton variant="outlined" onClick={updateBoard}>
                            수정
                        </UpdateButton>
                        <DeleteButton variant="outlined" onClick={deleteBoard}>
                            삭제
                        </DeleteButton>
                    </>
                ) : (
                    <AddButton variant="outlined" onClick={onClickWrite}>
                        글 쓰기
                    </AddButton>
                )}
            </div>
        </UserInfo>
    );
};

export default UserCard;

const UserInfo = styled.div`
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 270px;
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
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: white;
    font-size: 24px;
`;

const InfoContainer = styled.div`
    margin: 20px 0px;
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

const UpdateButton = styled(Button)`
    display: block;
    border-color: transparent;
    color: #7e7e7e;
    :hover {
        border-color: transparent;
        background-color: #a6d5fa;
        color: white;
    }
`;

const DeleteButton = styled(Button)`
    display: block;
    border-color: transparent;
    color: #7e7e7e;
    :hover {
        border-color: transparent;
        background-color: #f9a19a;
        color: white;
    }
`;
