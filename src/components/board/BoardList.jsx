import UserCard from '../UserCard';
import * as Styled from './BoardList.style';
import { TestImage1, TestImage2 } from '../../images/index';

const BoardList = () => {
    return (
        <Styled.Container>
            <UserCard />
            <Styled.BoardContainer>
                {new Array(5).fill(1).map((_, idx) => (
                    <Styled.BoardItem key={idx}>
                        <Styled.TextSection>
                            <Styled.UserInfo>
                                <Styled.UserAvatar>wo</Styled.UserAvatar>
                                <Styled.UserInfoInner>
                                    <h1>woo@squares.ai</h1>
                                    <span>9시간 전</span>
                                </Styled.UserInfoInner>
                            </Styled.UserInfo>
                        </Styled.TextSection>
                        <Styled.ImageSection>
                            <img src={idx % 2 === 0 ? TestImage1 : TestImage2} />
                        </Styled.ImageSection>
                    </Styled.BoardItem>
                ))}
            </Styled.BoardContainer>
        </Styled.Container>
    );
};

export default BoardList;
