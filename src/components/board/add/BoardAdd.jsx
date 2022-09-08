import styled from '@emotion/styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useContext, useState } from 'react';
import { modules } from '../quillConfig';
import UploadImage from './UploadImage';
import axios from 'axios';
import { Usercontext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const BoardAdd = () => {
    const route = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { userInfo } = useContext(Usercontext);

    const onClickCreate = async () => {
        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/add.php',
            {
                title,
                content,
                writer: userInfo.name,
                writerId: userInfo.id,
            }
        );

        if (result.data.message === 'Create') route(`/board/${result.data.id}`);
    };

    return (
        <Container>
            <Header>
                <InputTitle
                    type="text"
                    placeholder="Please enter the title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <AddButton onClick={onClickCreate}>create!</AddButton>
            </Header>
            <QuillCustom
                theme="snow"
                modules={modules}
                placeholder="Please enter the content"
                value={content}
                onChange={setContent}
            />
            <UploadImage />
        </Container>
    );
};

export default BoardAdd;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 900px;
    margin: auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

const InputTitle = styled.input`
    width: 400px;
    height: 60px;
    padding: 20px;

    border: none;
    border-bottom: 1px solid #c7c7c7;

    font-size: 32px;

    ::placeholder {
        color: #c7c7c7;
    }
`;

const QuillCustom = styled(ReactQuill)`
    width: 900px;
    height: 300px;
    margin-bottom: 80px;

    .ql-toolbar {
        border-radius: 10px 10px 0px 0px;
    }

    .ql-container {
        border-radius: 0px 0px 10px 10px;
    }
`;

const AddButton = styled.button`
    width: 100px;
    height: 32px;

    border: none;
    border-radius: 5px;
`;
