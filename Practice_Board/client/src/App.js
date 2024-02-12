import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import BoardListContainer from './containers/BoardListContainer';
import BoardInsertContainer from './containers/BoardInsertContainer'
import BoardReadContainer from './containers/BoardReadContainer';
import BoardUpdateContainer from './containers/BoardUpdateContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board" element={<BoardListContainer/>} />
        <Route path="/board/:boardNo" element={<BoardReadContainer/>} />
        <Route path="/board/insert" element={<BoardInsertContainer/>} />
        <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
