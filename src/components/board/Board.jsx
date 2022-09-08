import * as Styled from './Board.style';
import Pagination from '@mui/material/Pagination';

const Board = () => {
    return (
        <Styled.Container>
            <Styled.UserInfo>
                <Styled.UserAvatar>형래</Styled.UserAvatar>
                <h1>rea@squares.ai</h1>
                <span>우형래</span>
                <Styled.AddButton variant="contained">글 쓰기</Styled.AddButton>
            </Styled.UserInfo>
            <Styled.BoardContainer>
                {new Array(5).fill(1).map((el, idx) => (
                    <Styled.BoardItem key={idx} />
                ))}
                <Pagination count={10} color="primary" />
            </Styled.BoardContainer>
        </Styled.Container>
    );
};

export default Board;
