import React, { useEffect, useState } from 'react'
import BoardRead from '../components/BoardRead'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardjs from '../apis/board'

const BoardReadContainer = () => {

  const {boardNo} = useParams();

  const navigate = useNavigate();

  // state
  const [board, setBoard] = useState({});

  const getBoard = async () => {
    const response = await boardjs.selectBoard(boardNo);
    const data = response.data;
    console.log(data);
    setBoard(data);
  }

  const onDelete = async (boardNo) => {
    const response = await boardjs.deleteBoard(boardNo);
    const data = response.data;
    console.log(data);

    alert('게시글 삭제 완료');

    navigate("/board");
  }

  useEffect(() => {
    getBoard();
  }, [])


  return (
    <>
        <BoardRead boardNo={boardNo} board={board} onDelete={onDelete} />
    </>
  )
}

export default BoardReadContainer