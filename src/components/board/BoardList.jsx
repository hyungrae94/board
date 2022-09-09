import UserCard from '../UserCard';
import * as Styled from './BoardList.style';

const BoardList = () => {
    return (
        <Styled.Container>
            <UserCard />
            <Styled.BoardContainer>
                {new Array(5).fill(1).map((el, idx) => (
                    <Styled.BoardItem key={idx}>
                        <Styled.TextSection></Styled.TextSection>
                        <Styled.ImageSection></Styled.ImageSection>
                    </Styled.BoardItem>
                ))}
            </Styled.BoardContainer>
        </Styled.Container>
    );
};

export default BoardList;
