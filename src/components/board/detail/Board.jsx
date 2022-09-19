import { useNavigate, useParams } from 'react-router-dom';
import UserCard from '../../UserCard';
import * as Styled from './Board.style';
import Comment from '../../comment/Comment';
import { useState, useEffect } from 'react';
import { replaceDate, replaceName } from '../../../commons/utility';
import { deleteBoardApi, getBoardApi } from '../../../api/boardApi';

const Board = () => {
    const param = useParams();
    const route = useNavigate();
    const [board, setBoard] = useState({});

    const getData = async id => {
        const result = await getBoardApi(id);
        setBoard(result.data);
    };

    const onClickDelete = async () => {
        const result = await deleteBoardApi(board.boardId);

        if (result.data.message === 'Delete') route('/');
    };

    const onClickUpdate = () => {
        route(`/update/${param.id}`);
    };

    useEffect(() => {
        getData(param.id);
    }, []);
    return (
        <Styled.Container>
            <UserCard
                user={{ id: board.writerId }}
                deleteBoard={onClickDelete}
                updateBoard={onClickUpdate}
                page="detail"
            />
            <div>
                <Styled.BoardContainer>
                    <Styled.UserInfo>
                        <Styled.UserAvatar color={board.writerColor}>
                            {replaceName(board.writer || '')}
                        </Styled.UserAvatar>
                        <Styled.UserInfoInner>
                            <h1>{board.writerEmail}</h1>
                            <span>{replaceDate(board.createDate)}</span>
                        </Styled.UserInfoInner>
                    </Styled.UserInfo>
                    <Styled.Title>{board.title}</Styled.Title>
                    <Styled.Content>{board.content}</Styled.Content>
                    {board.image !== 'No file' && (
                        <Styled.UploadImage>
                            <img src={process.env.REACT_APP_S3_URL + (board.image || '')} />
                        </Styled.UploadImage>
                    )}
                </Styled.BoardContainer>
                <Comment id={param.id} />
            </div>
        </Styled.Container>
    );
};

export default Board;
