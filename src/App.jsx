import * as Style from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BoardAdd, Board, BoardList } from './components/board/index';
import { SignIn, SignUp } from './components/user/index';
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import { Usercontext } from './contexts/UserContext';

const App = () => {
    const [isSignin, setIsSignin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const { isLogin, userInfo, setIsLogin, setUserInfo } = useContext(Usercontext);

    const onClickSignOut = () => {
        setIsLogin(false);
        setUserInfo({});
        localStorage.clear();
    };

    return (
        <BrowserRouter>
            <Style.Container>
                <Modal isOpen={isSignin}>
                    <SignIn handleClose={setIsSignin} />
                </Modal>
                <Modal isOpen={isSignup}>
                    <SignUp handleClose={setIsSignup} />
                </Modal>
                <Style.Header>
                    <Style.InfoSection>
                        {isLogin ? (
                            <>
                                <Style.UserName>{userInfo.name}</Style.UserName>
                                <Style.SignOutButton to={'/board'} onClick={onClickSignOut}>
                                    Sign out
                                </Style.SignOutButton>
                            </>
                        ) : (
                            <>
                                <Style.InfoButton onClick={() => setIsSignin(true)}>Sign in</Style.InfoButton>
                                <Style.InfoButton onClick={() => setIsSignup(true)}>Sign up</Style.InfoButton>
                            </>
                        )}
                    </Style.InfoSection>
                    <Style.Title to="/board">
                        <h1>Free Board</h1>
                    </Style.Title>
                    <Style.SubTitle>Squares Onboarding Project</Style.SubTitle>
                </Style.Header>
                <Style.Navbar>{/* <Style.NavMenu to="/board">Board</Style.NavMenu> */}</Style.Navbar>
                <Style.Main>
                    <Routes>
                        <Route path="/board" element={<BoardList />} />
                        <Route path="/board/:id" element={<Board />} />
                        <Route path="/board/add" element={<BoardAdd />} />
                    </Routes>
                </Style.Main>
            </Style.Container>
        </BrowserRouter>
    );
};

export default App;
