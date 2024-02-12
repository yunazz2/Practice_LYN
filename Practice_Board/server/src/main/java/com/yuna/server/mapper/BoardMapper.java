package com.yuna.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.yuna.server.dto.Board;

@Mapper
public interface BoardMapper {

    // 게시글 목록
    public List<Board> selectBoardList() throws Exception;

    // 게시글 조회
    public Board selectBoard(int boardNo) throws Exception;

    // 게시글 등록
    public int insertBoard(Board board) throws Exception;

    // 게시글 수정
    public int updateBoard(Board board) throws Exception;

    // 게시글 삭제
    public int deleteBoard(int boardNo) throws Exception;
    
}
