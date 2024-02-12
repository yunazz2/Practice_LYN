package com.yuna.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yuna.server.dto.Board;
import com.yuna.server.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    // 게시글 목록 조회
    @Override
    public List<Board> selectBoardList() throws Exception {
        List<Board> boardList = boardMapper.selectBoardList();
        return boardList;
    }

    // 게시글 조회
    @Override
    public Board selectBoard(int boardNo) throws Exception {
        Board board = boardMapper.selectBoard(boardNo);
        return board;
    }

    // 게시글 등록
    @Override
    public int insertBoard(Board board) throws Exception {
        int result = boardMapper.insertBoard(board);
        return result;
    }

    // 게시글 수정
    @Override
    public int updateBoard(Board board) throws Exception {
        int result = boardMapper.updateBoard(board);
        return result;
    }

    // 게시글 삭제
    @Override
    public int deleteBoard(int boardNo) throws Exception {
        int result = boardMapper.deleteBoard(boardNo);
        return result;
    }
    
}
