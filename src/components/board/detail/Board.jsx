import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Comment from './Comment';
import { TestImage1, TestImage2 } from '../../../images';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Usercontext } from '../../../contexts/UserContext';
import { replaceDate } from '../../../commons/utility';

const Board = () => {
    const param = useParams();
    const route = useNavigate();
    const { userInfo } = useContext(Usercontext);
    const [board, setBoard] = useState({});

    const getData = async id => {
        const result = await axios.get(
            `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/get.php?id=${id}`
        );
        setBoard(result.data);
        console.log(result.data);
    };

    const onClickDelete = async () => {
        console.log(board.boardId);
        const result = await axios.delete(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/delete.php',
            {
                data: {
                    boardId: board.boardId,
                },
            }
        );

        console.log(result.data);
        if (result.data.message === 'Delete') route('/board');
    };

    useEffect(() => {
        getData(param.id);
    }, []);

    return (
        <Container>
            <BoardHeader>
                <h1>{board.title}</h1>
                <span>{board.writer}</span>
                <span>•</span>
                <span>{replaceDate(board.createDate)}</span>
                {board.writerId === userInfo.id && (
                    <BoardEdit>
                        <button>수정</button>
                        <button onClick={onClickDelete}>삭제</button>
                    </BoardEdit>
                )}
            </BoardHeader>
            <BoardImageContainer>
                <img src={TestImage1} />
                <img src={TestImage2} />
                <img src={TestImage1} />
                <img src={TestImage2} />
            </BoardImageContainer>
            <ReactQuill theme="snow" readOnly value={board.content} />
            <Comment />
        </Container>
    );
};

export default Board;

const Container = styled.div`
    width: 900px;
    height: 900px;
    margin: auto;

    .ql-toolbar {
        display: none;
    }

    .ql-container {
        /* border: 1px solid !important; */
        border: none;
        overflow-y: scroll;
    }
`;

const BoardHeader = styled.header`
    margin-bottom: 20px;
    h1 {
        margin-bottom: 10px;
    }
    span {
        margin-right: 5px;
        color: #999999;
    }
`;

const BoardEdit = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        margin-right: 10px;
        border: none;
        background-color: transparent;
    }
`;

const BoardImageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    margin-bottom: 40px;

    img {
        width: 23%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
    }
`;
