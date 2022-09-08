import styled from '@emotion/styled';
import CommentItem from './CommentItem';

const Comment = () => {
    return (
        <CommnetContainer>
            <InputContainer>
                <CommentInput type="text" placeholder="Enter the comment" />
                <CommentButton>comment</CommentButton>
            </InputContainer>
            <ListContainer>
                {new Array(3).fill(1).map((_, idx) => (
                    <CommentItem key={idx} />
                ))}
            </ListContainer>
        </CommnetContainer>
    );
};

export default Comment;

const CommnetContainer = styled.div`
    width: 100%;
    margin: 50px 0px;

    /* border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`;

const CommentInput = styled.input`
    width: 500px;
    height: 34px;
    padding-left: 10px;
    margin: 0px 10px;
    border-radius: 10px;
`;

const CommentButton = styled.button`
    width: 100px;
    height: 34px;
    border: none;
    border-radius: 10px;
`;

const ListContainer = styled.div`
    /* border: 1px solid red; */
    padding: 40px 10px;
`;
