import styled from '@emotion/styled';
import { Button } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { replaceDate, replaceName } from '../../../commons/utility';
import { UserContext } from '../../../contexts/UserContext';

const CommentItem = ({ comment, reload }) => {
    const { userInfo } = useContext(UserContext);

    const onClickDelete = async () => {
        const result = await axios.delete(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/comment/delete.php',
            {
                data: {
                    commentId: comment.commentId,
                },
            }
        );

        if (result.data.message === 'Delete') {
            alert('삭제되었습니다.');
            reload();
        }
    };

    return (
        <Container>
            <Header>
                <WriterAvatar color={comment.writerColor}>{replaceName(comment.writer)}</WriterAvatar>
                <CommentInfo>
                    <h1>{comment.writer}</h1>
                    <span>{replaceDate(comment.createDate)}</span>
                </CommentInfo>
            </Header>
            <CommentContent>{comment.content}</CommentContent>
            {userInfo.id === comment.writerId && (
                <CommentFooter>
                    <DeleteButton variant="outlined" onClick={onClickDelete}>
                        삭제
                    </DeleteButton>
                </CommentFooter>
            )}
        </Container>
    );
};

export default CommentItem;

const Container = styled.div`
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 0.2px solid #7e7e7e;
`;

const Header = styled.header`
    display: flex;
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

const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    h1 {
        margin-right: 10px;
        font-size: 15px;
    }
    span {
        color: #7e7e7e;
        font-size: 12px;
    }
`;

const CommentContent = styled.div`
    width: 100%;
    margin: 20px 0px;
    font-size: 15px;
`;

const CommentFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    height: 30px;
`;

const DeleteButton = styled(Button)`
    border-color: transparent;
    color: #7e7e7e;
    :hover {
        border-color: transparent;
        background-color: #f9a19a;
        color: white;
    }
`;
