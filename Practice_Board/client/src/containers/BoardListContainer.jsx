import React, { useEffect, useState } from 'react'
import BoardList from '../components/BoardList'
import * as boardjs from  '../apis/board'

const BoardListContainer = () => {

  // state
  const [boardList, setBoardList] = useState([])

  const getBoardList = async () => {
    const response = await boardjs.selectBoardList();
    const data = await response.data;
    setBoardList(data);
  };

  useEffect(() => {
    getBoardList();
  }, [])

  return (
    <>
      <BoardList boardList={boardList} />
    </>
  )
}

export default BoardListContainer