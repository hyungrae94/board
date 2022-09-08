import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { BiPencil } from 'react-icons/bi';
import { TestImage1, TestImage2 } from '../../../images';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { replaceDate } from '../../../commons/utility';

const BoardList = () => {
    const route = useNavigate();
    const [boardList, setBoardList] = useState([]);
    const [lastPage, setLastPage] = useState();

    const getData = async page => {
        const result = await axios({
            method: 'get',
            url: `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/getList.php?page=${page}`,
            headers: {
                'content-type': 'application/json',
            },
        });
        setBoardList(result.data.data);
    };

    const getCount = async () => {
        const result = await axios({
            method: 'get',
            url: 'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/getCount.php',
            headers: {
                'content-type': 'application/json',
            },
        });
        setLastPage(Math.ceil(result.data.count / 8));
    };

    const onChangePage = (_, page) => {
        getData(page);
    };

    useEffect(() => {
        getData(1);
        getCount();
    }, []);

    return (
        <ListContainer>
            <ListHeader>
                <AddBoardButton onClick={() => route('/board/add')}>
                    <span>Speak freely!</span>
                    <BiPencil />
                </AddBoardButton>
            </ListHeader>
            <ListSection>
                {boardList.map(board => (
                    <ListItem key={board.boardId} onClick={() => route(`/board/${board.boardId}`)}>
                        <Thumbnail src={board.boardId % 2 === 0 ? TestImage1 : TestImage2} alt="thumbnail" />
                        <BoardTitle>{board.title}</BoardTitle>
                        <BoardInfoContainer>
                            <span>{board.writer}</span>
                            <span>{replaceDate(board.createDate)}</span>
                        </BoardInfoContainer>
                    </ListItem>
                ))}
            </ListSection>
            <ListFooter>
                <Pagination count={lastPage} onChange={onChangePage} />
            </ListFooter>
        </ListContainer>
    );
};

export default BoardList;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    padding-top: 0px;
`;

const ListHeader = styled.header`
    width: 100%;
    height: 60px;
    padding: 0px 250px;
`;

const AddBoardButton = styled.button`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 40px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    background-color: transparent;

    color: #666666;
    text-align: left;
    font-size: 30px;
    font-weight: 100;

    svg {
        position: absolute;
        right: 30px;
    }
`;

const ListSection = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 40px 0px;
`;

const ListItem = styled.div`
    width: 20%;
    margin: 0px 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    overflow: hidden;

    cursor: pointer;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 130px;
    object-fit: cover;
`;

const BoardTitle = styled.h1`
    margin: 5px 0px 5px 10px;
`;

const BoardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

const ListFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
`;
