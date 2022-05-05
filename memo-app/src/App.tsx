import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components"

function App() {
  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" />
      <SButton>追加</SButton>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          <li>
            <SMemoWrapper>
              <p>本を読む</p>
              <SButton>削除</SButton>
            </SMemoWrapper>
          </li>
          <li>
            <SMemoWrapper>
              <p>テスト</p>
              <SButton>削除</SButton>
            </SMemoWrapper>
          </li>
        </ul>
      </SContainer>
    </div>
  );
}

export default App;

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;