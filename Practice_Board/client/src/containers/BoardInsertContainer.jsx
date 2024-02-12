import React, { useState } from 'react'
import BoardInsert from '../components/BoardInsert'
import { useNavigate } from 'react-router-dom'
import * as boardjs from '../apis/board'

const BoardInsertContainer = () => {

  const navigate = useNavigate();

  const onInsert = async (title, writer, content) => {
      const response = await boardjs.insertBoard(title, writer, content);
      alert('게시글 등록 완료');
      console.log(response.data);
  
      navigate('/board');
  }

  return (
    <>
        <BoardInsert onInsert={onInsert} />
    </>
  )
}

export default BoardInsertContainer