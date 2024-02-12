-- board 테이블 생성
CREATE TABLE `board` (
  `board_no` int NOT NULL AUTO_INCREMENT COMMENT '글 번호',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `writer` varchar(100) NOT NULL COMMENT '작성자',
  `content` varchar(100) NOT NULL COMMENT '내용',
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정일자',
  `views` int NOT NULL DEFAULT '0' COMMENT '조회 수',
  `like` int NOT NULL DEFAULT '0' COMMENT '좋아요',
  PRIMARY KEY (`board_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='게시판';
