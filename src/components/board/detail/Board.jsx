import { useNavigate, useParams } from 'react-router-dom';
import UserCard from '../../UserCard';
import * as Styled from './Board.style';
import Comment from '../../comment/Comment';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { replaceDate, replaceName } from '../../../commons/utility';

const Board = () => {
    const param = useParams();
    const route = useNavigate();
    const [board, setBoard] = useState({});

    const getData = async id => {
        const result = await axios.get(
            `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/get.php?id=${id}`
        );
        setBoard(result.data);
    };

    const onClickDelete = async () => {
        const result = await axios.delete(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/delete.php',
            {
                data: {
                    boardId: board.boardId,
                },
            }
        );

        console.log(result.data);
        if (result.data.message === 'Delete') route('/');
    };

    useEffect(() => {
        getData(param.id);
    }, []);
    return (
        <Styled.Container>
            <UserCard user={{ id: board.writerId }} deleteBoard={onClickDelete} page="detail" />
            <div>
                <Styled.BoardContainer>
                    <Styled.UserInfo>
                        <Styled.UserAvatar>{replaceName(board.writer || '')}</Styled.UserAvatar>
                        <Styled.UserInfoInner>
                            <h1>{`${board.writer}@squares.ai`}</h1>
                            <span>{replaceDate(board.createDate)}</span>
                        </Styled.UserInfoInner>
                    </Styled.UserInfo>
                    <Styled.Title>{board.title}</Styled.Title>
                    <Styled.Content>{board.content}</Styled.Content>
                    <Styled.UploadImage>
                        <img src="https://picsum.photos/200" />
                    </Styled.UploadImage>
                </Styled.BoardContainer>
                <Comment />
            </div>
        </Styled.Container>
    );
};

export default Board;
