package com.yuna.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.yuna.server.dto.Board;
import com.yuna.server.service.BoardService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    // 게시글 목록 조회
    @GetMapping()
    public ResponseEntity<?> selectBoardList() {
        log.info("게시글 목록 조회");
        try{
            List<Board> boardList = boardService.selectBoardList();

            if(boardList == null) {
                log.info("조회된 게시글 없음");
            }
            else {
                log.info("게시글 수 : " + boardList.size());
                log.info("게시글 목록 : " + boardList);
            }
            return new ResponseEntity<>(boardList, HttpStatus.OK);
        }
        catch (Exception e) {
            log.error(null, e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 조회
    @GetMapping("/{boardNo}")
    public ResponseEntity<?> selectBoard(@PathVariable Integer boardNo) {
        log.info("게시글 조회");

        try{
            Board board = boardService.selectBoard(boardNo);

            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 등록
    @PostMapping()
    public ResponseEntity<?> insertBoard(@RequestBody Board board) {
        log.info("게시글 등록");

        try {
            int result = boardService.insertBoard(board);

            return new ResponseEntity<>("게시글 등록 완료", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 수정
    @PutMapping()
    public ResponseEntity<?> updateBoard(@RequestBody Board board) {
        log.info("게시글 수정");

        try {
            int result = boardService.updateBoard(board);
            
            return new ResponseEntity<>("게시글 수정 완료", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 게시글 삭제
    @DeleteMapping("{boardNo}")
    public ResponseEntity<?> delete(@PathVariable Integer boardNo) {
        log.info("게시글 삭제");
        
        try {
            int result = boardService.deleteBoard(boardNo);

            return new ResponseEntity<>("게시글 삭제 완료", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
