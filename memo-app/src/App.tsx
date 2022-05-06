import { useState, FC, useCallback } from "react";
import styled from "styled-components"
import { MemoList } from "./components/MemoList";

const App: FC = () => {
  // 入力テキスト
  const [text, setText] = useState<string>("");
  // TodoList
  const [todoList, setTodoList] = useState<string[]>([]);

  // 追加ボタン
  const addButton = () => {
    if (text === "") return;
    console.log("追加ボタン:" + text)
    const todo = [...todoList];
    todo.push(text)
    setTodoList(todo);
  };

  const deleteButton = useCallback((index: number) => {
    console.log(index);
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }, [todoList]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      <SButton onClick={addButton}>追加</SButton>
      <MemoList todoList={todoList} deleteButton={deleteButton} />
    </div>
  );
}

export default App;

const SButton = styled.button`
  margin-left: 16px;
`;