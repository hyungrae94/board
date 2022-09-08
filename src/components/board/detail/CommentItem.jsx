import styled from '@emotion/styled';

const CommentItem = () => {
    return (
        <Container>
            <CommentHeader>
                <Writer>user</Writer>
                <Date>15시간 전</Date>
                <CommentEdit>
                    <button>수정</button>
                    <button>삭제</button>
                </CommentEdit>
            </CommentHeader>
            <CommentContent>asdfasd fasdf sadf</CommentContent>
        </Container>
    );
};

export default CommentItem;

const Container = styled.div`
    margin-bottom: 40px;
`;

const CommentHeader = styled.div`
    /* border: 1px solid gold; */
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;

    span {
        margin-right: 10px;
    }
`;

const CommentEdit = styled.div`
    margin-left: 20px;

    button {
        margin-right: 10px;
        border: none;
        background-color: transparent;
    }
`;

const Writer = styled.span`
    font-size: 20px;
    font-weight: bolder;
`;

const Date = styled.span`
    color: gray;
    font-size: 15px;
`;

const CommentContent = styled.p`
    margin-bottom: 20px;
    white-space: pre-line;
    font-size: 18px;
`;
