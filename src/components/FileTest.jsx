import axios from 'axios';
import { useState, useRef } from 'react';

const FileTest = () => {
    const fileRef = useRef(null);

    const [id, _] = useState('testID');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');

    const onClickFile = () => {
        fileRef.current.click();
    };

    const onChangeFile = e => {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const onClickUpload = async () => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('test', file);

        const result = await axios.post(
            'http://ec2-15-165-45-169.ap-northeast-2.compute.amazonaws.com/api/upload/file.php',
            formData,
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }
        );

        console.log(result);
    };

    return (
        <div>
            <button onClick={onClickFile}>파일찾기</button>
            <img src={preview} style={{ width: '100px', height: '100px' }} />
            <br />
            <br />
            <input type="file" onChange={onChangeFile} ref={fileRef} style={{ display: 'none' }} />
            <button type="button" onClick={onClickUpload}>
                업로드
            </button>
        </div>
    );
};

export default FileTest;
