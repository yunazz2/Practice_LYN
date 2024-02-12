import React from 'react'
import { Link } from 'react-router-dom';

const BoardRead = ({boardNo, board, onDelete}) => {

  // 등록일자를 yyyy-mm-dd 형식으로 만들기 위해 Date 객체로 변환
  const regDate = new Date(board.regDate);
  
  // yyyy-mm-dd 형식으로 등록일자 문자열 생성
  const formattedRegDate = `${regDate.getFullYear()}-${String(regDate.getMonth() + 1).padStart(2, '0')}-${String(regDate.getDate()).padStart(2, '0')}`;

  return (
    <div className='container'>
      <h1>게시글 조회</h1>

      <table>
        <tbody>
          <tr>
            <td>등록일자</td>
            <td>
              <input type="text" value={formattedRegDate} readOnly></input>
            </td>
          </tr>

          <tr>
            <td>제목</td>
            <td>
              <input type="text" value={board.title} readOnly></input>
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
              <input type="text" value={board.content} readOnly></input>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button_box">
        <Link to="/board">목록</Link>
        <Link to={`/board/update/${boardNo}`}>수정</Link>
        <button onClick={() => onDelete(boardNo)}>삭제</button>
      </div>

    </div>
  )
}

export default BoardRead