import styled from '@emotion/styled';
import { useRef, useState } from 'react';

const UploadImage = () => {
    const [imageUrl, setImageUrl] = useState([]);
    const fileRef = useRef(null);

    const onClickUpload = () => {
        fileRef.current.click();
    };

    const onClickDelete = url => () => {
        setImageUrl(pre =>
            pre.filter(el => {
                return el !== url;
            })
        );
    };

    const onChangeImage = event => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = data => {
            setImageUrl(pre => [...pre, String(data.target.result)]);
        };
    };

    return (
        <UploadContainer>
            <UploadButton onClick={onClickUpload}>+</UploadButton>
            {imageUrl.map((url, index) => (
                <ImageContainer key={index} onClick={onClickDelete(url)}>
                    <ImageText>Delete</ImageText>
                    <ImageItem src={url} />
                </ImageContainer>
            ))}

            <input type="file" ref={fileRef} onChange={onChangeImage} />
        </UploadContainer>
    );
};

export default UploadImage;

const UploadContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    margin-bottom: 40px;

    input {
        display: none;
    }
`;

const UploadButton = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 5px;
    background-color: #eeeeee;

    overflow: hidden;
    text-align: center;
    line-height: 100px;

    font-size: 24px;

    cursor: pointer;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border: none;
    border-radius: 5px;
    overflow: hidden;

    cursor: pointer;

    :hover {
        span {
            opacity: 1;
        }
        img {
            opacity: 0.5;
        }
    }
`;

const ImageText = styled.span`
    position: absolute;
    z-index: 99;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);

    opacity: 0;
    font-weight: bolder;
`;

const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
