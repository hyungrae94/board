import { useNavigate } from 'react-router-dom';
import UserCard from '../../UserCard';
import * as Styled from './Board.style';
import { TestImage2 } from '../../../images/index';
import Comment from '../../comment/Comment';

const Board = () => {
    const route = useNavigate();
    return (
        <Styled.Container>
            <UserCard />
            <div>
                <Styled.BoardContainer>
                    <Styled.UserInfo>
                        <Styled.UserAvatar>wo</Styled.UserAvatar>
                        <Styled.UserInfoInner>
                            <h1>woo@squares.ai</h1>
                            <span>9시간 전</span>
                        </Styled.UserInfoInner>
                    </Styled.UserInfo>
                    <Styled.Title>{`🔥 2022 업비트 개발자 컨퍼런스(UDC 2022) 등록 마감 임박!! (D-7) 🔥`}</Styled.Title>
                    <Styled.Content>
                        {`★UDC 2022의 사전 등록이 9월 14일 수요일 마감될 예정입니다!
할인된 가격으로 참가할 수 있는 마지막 기회를 놓치지 마세요!★
※스탠다드 등록: ~9월 14일 (수)
※등록 바로가기: https://udc.upbit.com/register/tickets

국내 최대 규모 블록체인 컨퍼런스, 업비트 개발자 컨퍼런스(UDC)가 오는 9월 부산에서 3년만에 오프라인으로 개최됩니다. 👏👏
업비트 개발자 컨퍼런스(Upbit Developer Conference, UDC)는 두나무가 블록체인 생태계 육성과 확장에 기여하고자 개최하는 글로벌 블록체인 컨퍼런스입니다.
UDC 2022에서는 'Imagine your Blockchain Life'를 주제로 블록체인과 함께하는 미래를 상상해 보고 그 상상이 현실이 되어가는 경험을 여러분과 나누려 합니다. 

블록체인의 핫한 트렌드와 기술에 대한 지식을 공유하고 NFT, 메타버스, DeFi, Web 3.0 등 블록체인의 다양한 키워드를 짚어볼 수 있는 글로벌 블록체인 컨퍼런스 UDC 2022! 
블록체인과 함께하는 일상이 궁금하신가요? UDC 2022에서 확인해보세요. 👀

▶ 일시: 2022년 9월 22일(목) - 23일(금) 
▶ 장소: 부산항국제전시컨벤션센터(BPEX) 
▶ 주제: Imagine your Blockchain Life 
▶ 주최: 두나무(주) 
▶ 참가대상: 개발자, 블록체인 기술에 관심 있는 누구나 
▶ 등록: 공식 홈페이지 
*UDC SNS를 팔로우하시면 다양한 이벤트와 행사 정보를 받아 보실 수 있습니다.`}
                    </Styled.Content>
                    <Styled.UploadImage>
                        <img src={TestImage2} />
                    </Styled.UploadImage>
                </Styled.BoardContainer>
                <Comment />
            </div>
        </Styled.Container>
    );
};

export default Board;
