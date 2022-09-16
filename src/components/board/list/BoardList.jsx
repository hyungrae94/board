import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import UserCard from '../../UserCard';
import * as Styled from './BoardList.style';
import axios from 'axios';
import { replaceContent, replaceDate, replaceName } from '../../../commons/utility';
import Pagination from '@mui/material/Pagination';

const BoardList = () => {
    const route = useNavigate();
    const { userInfo } = useContext(UserContext);
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
        const result = await axios.get(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/getCount.php'
        );
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
                            {el.image !== 'No file' && (
                                <img
                                    src={`http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/readS3.php?file=${
                                        el.image || ''
                                    }`}
                                />
                            )}
                        </Styled.ImageSection>
                    </Styled.BoardItem>
                ))}
                <Pagination count={lastPage} shape="rounded" onChange={(_, page) => getData(page)} />
            </Styled.BoardContainer>
        </Styled.Container>
    );
};

export default BoardList;
