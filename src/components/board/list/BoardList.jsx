import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import UserCard from '../../UserCard';
import * as Styled from './BoardList.style';
import { replaceContent, replaceDate, replaceName } from '../../../commons/utility';
import Pagination from '@mui/material/Pagination';
import { getBoardCount, getBoardListApi } from '../../../api/boardApi';

const BoardList = () => {
    const route = useNavigate();
    const { userInfo } = useContext(UserContext);
    const [boardList, setBoardList] = useState([]);
    const [lastPage, setLastPage] = useState();

    const getData = async page => {
        const result = await getBoardListApi(page);
        setBoardList(result.data.data);
    };

    const getCount = async () => {
        const result = await getBoardCount();
        setLastPage(Math.ceil(result.data.count / 5));
    };

    useEffect(() => {
        getData(1);
        getCount();
    }, []);

    return (
        <Styled.Container>
            <UserCard user={userInfo} />
            <Styled.BoardContainer>
                {boardList.map(el => (
                    <Styled.BoardItem key={el.boardId} onClick={() => route(`/${el.boardId}`)}>
                        <Styled.TextSection>
                            <Styled.UserInfo>
                                <Styled.UserAvatar color={el.userColor}>{replaceName(el.writer)}</Styled.UserAvatar>
                                <Styled.UserInfoInner>
                                    <h1>{el.writerEmail}</h1>
                                    <span>{replaceDate(el.createDate)}</span>
                                </Styled.UserInfoInner>
                            </Styled.UserInfo>
                            <Styled.Title>{el.title}</Styled.Title>
                            <Styled.Content>{replaceContent(el.content)}</Styled.Content>
                        </Styled.TextSection>
                        <Styled.ImageSection>
                            {el.image !== 'No file' && <img src={process.env.REACT_APP_S3_URL + (el.image || '')} />}
                        </Styled.ImageSection>
                    </Styled.BoardItem>
                ))}
                <Pagination count={lastPage} shape="rounded" onChange={(_, page) => getData(page)} />
            </Styled.BoardContainer>
        </Styled.Container>
    );
};

export default BoardList;
