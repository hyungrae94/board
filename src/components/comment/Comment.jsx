import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { replaceName } from '../../commons/utility';
import { UserContext } from '../../contexts/UserContext';
import CommentItem from './commentItem/CommentItem';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VscCommentDiscussion } from 'react-icons/vsc';

const Comment = ({ id }) => {
    const route = useNavigate();
    const { userInfo, isLogin } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState();

    const getComment = async () => {
        const result = await axios.get(
            `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/comment/get.php?id=${id}`
        );

        if (!result.data.message) setComments(result.data.data);
    };

    const onClickAddComment = async () => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/comment/add.php',
            {
                writerId: userInfo.id,
                content,
                boardId: id,
            }
        );
        if (result.data.message === 'Add') {
            alert('등록 되었습니다!');
            setContent('');
            getComment();
        }
    };

    useEffect(() => {
        getComment();
    }, []);

    return (
        <Container>
            {comments.length === 0 && (
                <CommentPlaceHolder>
                    <VscCommentDiscussion />첫 댓글을 남겨주세요.
                </CommentPlaceHolder>
            )}
            {comments.map(el => (
                <CommentItem key={el.commentId || '101'} comment={el} reload={getComment} />
            ))}
            <CommentInputContainer>
                {isLogin && (
                    <>
                        <CommentHeader>
                            <WriterAvatar color={userInfo.color}>{replaceName(userInfo.name || '')}</WriterAvatar>
                            <Writer>{userInfo.name}</Writer>
                        </CommentHeader>
                        <CommentInput
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            type="text"
                            placeholder="댓글 남기기"
                        />
                        <AddButton variant="contained" onClick={onClickAddComment}>
                            등록하기
                        </AddButton>
                    </>
                )}

                <ButtonContainer>
                    <BackButton onClick={() => route('/')} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                        목록으로
                    </BackButton>
                </ButtonContainer>
            </CommentInputContainer>
        </Container>
    );
};

export default Comment;

const Container = styled.div`
    width: 800px;
    padding: 30px;
    margin: 40px 0px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
`;

const CommentInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`;

const CommentHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 30px 0px;
`;

const WriterAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: white;
`;

const Writer = styled.h1`
    margin-left: 10px;
    font-size: 16px;
`;

const CommentPlaceHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;

    svg {
        margin-bottom: 10px;
        font-size: 40px;
    }
`;

const CommentInput = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 20px 0px 0px 20px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
    resize: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
`;

const BackButton = styled(Button)`
    height: 36px;
    border-color: #cbcbcb;
    color: black;
    :hover {
        border-color: #cbcbcb;
        background-color: #e4e6e7;
    }
`;

const AddButton = styled(Button)`
    width: 90px;
    height: 36px;
    margin-top: 10px;
    background-color: #03a9f4;
    :hover {
        background-color: #a6d5fa;
    }
`;
