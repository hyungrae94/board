import * as Styled from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Board, BoardList, BoardWrite } from './components/board/index';
import Navigation from './components/navigation/Navigation';
import Login from './components/login/Login';
import { useState } from 'react';
import SignUp from './components/login/SignUp';
import FileTest from './components/FileTest';

const App = () => {
    const [isViewLogin, setIsViewLogin] = useState(false);
    const [isViewSignUp, setIsViewSignUp] = useState(false);
    return (
        <BrowserRouter>
            {isViewLogin && <Login setIsViewLogin={setIsViewLogin} setIsViewSignUp={setIsViewSignUp} />}
            {isViewSignUp && <SignUp setIsViewSignUp={setIsViewSignUp} />}
            <Navigation setIsViewLogin={setIsViewLogin} />
            <Styled.Main>
                <Routes>
                    <Route path="/" element={<BoardList />} />
                    <Route path="/:id" element={<Board />} />
                    <Route path="/write" element={<BoardWrite />} />
                    <Route path="/file" element={<FileTest />} />
                </Routes>
            </Styled.Main>
        </BrowserRouter>
    );
};

export default App;
