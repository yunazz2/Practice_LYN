import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BoardUpdate = ({boardNo, board, onUpdate}) => {

  // state
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');


  // 수정한 제목을 이벤트 객체로 저장
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  // 수정한 내용을 이벤트 객체로 저장
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    onUpdate(boardNo, title, writer, content);
  }

  // 게시글 수정이기 때문에 기존 내용을 불러와야 한다.
  useEffect(() => {
    if(board) {
      setTitle(board.title);
      setWriter(board.writer);
      setContent(board.content);
    }
  }, [board])

  return (
    <div className='container'>
      <h1>게시글 수정</h1>

      <table>
        <tbody>

          <tr>
            <td>제목</td>
            <td>
              <input type="text" value={title} onChange={handleChangeTitle}/>
            </td>
          </tr>

          <tr>
            <td>작성자</td>
            <td>
              <input type="text" value={board.writer} readOnly></input>
            </td>
          </tr>

          <tr>
            <td>내용</td>
            <td>
              <input type="text" value={content} onChange={handleChangeContent}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to={`/board/${boardNo}`}>취소</Link>
      <button onClick={onSubmit}>수정</button>
    </div>
  )
}

export default BoardUpdate