import * as Styled from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Navigation from './components/navigation/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Styled.Main>
                <Routes>
                    <Route path="/" element={<Board />} />
                </Routes>
            </Styled.Main>
        </BrowserRouter>
    );
};

export default App;
