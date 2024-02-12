import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BoardInsert = ({onInsert}) => {

  // state
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');


  // 작성한 제목을 이벤트 객체로 저장
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  // 작성한 작성자를 이벤트 객체로 저장
  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
  }
  // 작성한 내용을 이벤트 객체로 저장
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    onInsert(title, writer, content);
  }


  return (
    <div className='container'>
      <h1>게시글 조회</h1>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" value={title} onChange={handleChangeTitle}></input>
            </td>
          </tr>

          <tr>
            <td>작성자</td>
            <td>
              <input type="text" value={writer} onChange={handleChangeWriter}></input>
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
      <Link to="/board">취소</Link>
      <button onClick={onSubmit}>등록</button>
    </div>
  )
}

export default BoardInsert