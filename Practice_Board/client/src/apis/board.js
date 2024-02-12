import axios from 'axios';

// 게시글 목록
export const selectBoardList = () => axios.get("/board")

// 게시글 조회
export const selectBoard = (boardNo) => axios.get(`/board/${boardNo}`)

// 게시글 등록
export const insertBoard = (title, writer, content) => axios.post("/board", {title, writer, content})

// 게시글 수정
export const updateBoard = (boardNo, title, writer, content) => axios.put('/board', {boardNo, title, writer, content})

// 게시글 삭제
export const deleteBoard = (boardNo) => axios.delete(`/board/${boardNo}`)