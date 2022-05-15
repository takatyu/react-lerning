import { useState, FC } from "react";
import styled from "styled-components"
import { MemoList } from "./components/MemoList";
import { useMemoList } from "./hooks/useMemoList";

const App: FC = () => {
  console.log("App");
  // 入力テキスト
	const [text, setText] = useState<string>("");
  // カスタムフックから取得
  const { todoList, addButton, deleteButton  } = useMemoList();

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      <SButton onClick={() => { addButton(text) } }>追加</SButton>
      <MemoList todoList={todoList} deleteButton={deleteButton} />
    </div>
  );
};

export default App;

const SButton = styled.button`
  margin-left: 16px;
`;