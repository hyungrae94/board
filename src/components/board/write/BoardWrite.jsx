import * as Styled from './BoardWrite.style';
import { useRef, useState, useContext, useEffect } from 'react';
import { BsFillImageFill } from 'react-icons/bs';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import axios from 'axios';

const BoardWrite = ({ isUpdate = false }) => {
    const route = useNavigate();
    const param = useParams();
    const fileRef = useRef(null);
    const { userInfo } = useContext(UserContext);

    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const getData = async id => {
        const result = await axios.get(
            `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/get.php?id=${id}`
        );

        setTitle(result.data.title);
        setContent(result.data.content);
        result.data.image !== 'No file' &&
            setImageUrl(
                `http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/readS3.php?file=${result.data.image}`
            );
    };

    const onClickUpdate = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('imageFile', file);
            formData.append('boardId', param.id);

            const imageResult = await axios.post(
                'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/updateImage.php',
                formData,
                {
                    headers: {
                        'Content-type': 'multipart/form-data',
                    },
                }
            );

            console.log(imageResult);
        } else {
            console.log('file 변경안됨');
        }

        const result = await axios.put(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/update.php',
            {
                title,
                content,
                boardId: param.id,
            },
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }
        );

        console.log(result.data.message);
        if (result.data.message === 'Update') {
            alert('수정되었습니다.');
            route(`/${param.id}`);
        }
    };

    const onClickCreate = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('writer', userInfo.name);
        formData.append('writerId', userInfo.id);
        formData.append('imageFile', file);

        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/board/add.php',
            formData,
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }
        );

        console.log(result);

        if (result.data.message === 'Create') route(`/${result.data.id}`);
    };

    const onClickUploadButton = () => {
        if (imageUrl !== '') {
            setImageUrl('');
            return;
        }
        fileRef.current.click();
    };

    const onChangeImage = event => {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0]);
    };

    useEffect(() => {
        if (!isUpdate) return;
        getData(param.id);
    }, []);

    return (
        <Styled.Container>
            <Styled.WriteHeader>
                <Styled.BackButton variant="outlined" startIcon={<KeyboardBackspaceIcon />} onClick={() => route('/')}>
                    목록으로
                </Styled.BackButton>
                {isUpdate ? (
                    <Styled.AddButton variant="contained" disabled={false} onClick={onClickUpdate}>
                        수정하기
                    </Styled.AddButton>
                ) : (
                    <Styled.AddButton variant="contained" disabled={false} onClick={onClickCreate}>
                        등록하기
                    </Styled.AddButton>
                )}
            </Styled.WriteHeader>
            <Styled.WriteTitle
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <Styled.WriteContent
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={event => setContent(event.target.value)}
            />
            <Styled.UploadImage>
                {imageUrl !== '' && <img src={imageUrl} />}
                <Styled.UploadButton onClick={onClickUploadButton}>
                    <BsFillImageFill />
                    <span>({imageUrl === '' ? 0 : 1}/1)</span>
                </Styled.UploadButton>
            </Styled.UploadImage>
            <input type="file" ref={fileRef} style={{ display: 'none' }} onChange={onChangeImage} />
        </Styled.Container>
    );
};

export default BoardWrite;
