import React, { useEffect, useState } from "react";
import Axios from "axios";

import {
  Column,
  ContainerB,
  HeaderColumn,
  HeaderRow,
  Row,
  Table,
  Title,
} from "../../components/Table";

const Board = ({ section }) => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  const [boardData, setBoardData] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/post")
    .then((response) => {
      setBoardData(response.data)
     })
  }, [])

  return (
      <ContainerB>
        <Title>Announcement</Title>
        <Table>
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <thead>
            <HeaderRow>
              <HeaderColumn>번호</HeaderColumn>
              <HeaderColumn>제목</HeaderColumn>
              <HeaderColumn>증상</HeaderColumn>
              <HeaderColumn>날짜</HeaderColumn>
              <HeaderColumn>작성자</HeaderColumn>
            </HeaderRow>
          </thead>
          <tbody>
            {boardData.map((data) => (
              <Row key={data.postId}>
                <Column>{data.postId}</Column>
                <Column>{data.postTitle}</Column>
                <Column>{data.postSymptom}</Column>
                <Column>{data.postDate}</Column>
                <Column>{data.postAuthor}</Column>
              </Row>
            ))}
          </tbody>
        </Table>
      </ContainerB>
  );
};

export default Board;
