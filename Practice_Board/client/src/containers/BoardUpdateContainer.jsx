import React, { useEffect, useState } from 'react'
import BoardUpdate from '../components/BoardUpdate'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardjs from '../apis/board'

const BoardUpdateContainer = () => {
  
  const {boardNo} = useParams();

  const [board, setBoard] = useState({});

  const navigate = useNavigate();

  const onUpdate = async(boardNo, title, writer, content) => {
    const response = await boardjs.updateBoard(boardNo, title, writer, content);
    
    console.log(response);
    
    alert('게시글 수정 완료');

    navigate('/board');
  }

  const getBoard = async() => {
    const response = await boardjs.selectBoard(boardNo);
    const data = response.data
    console.log(data);
    setBoard(data);
  }

  useEffect(() => {
    getBoard()
  }, [])


  return (
    <>
        <BoardUpdate boardNo={boardNo} board={board} onUpdate={onUpdate} />
    </>
  )
}

export default BoardUpdateContainer