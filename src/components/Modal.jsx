import styled from '@emotion/styled';

const Modal = ({ isOpen, children }) => {
    return isOpen && <Background>{children}</Background>;
};

export default Modal;

const Background = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background-color: rgba(13, 13, 13, 0.436);
`;
