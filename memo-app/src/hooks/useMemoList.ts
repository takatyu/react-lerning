import { useCallback, useState } from "react";

export const useMemoList = () => {
	console.log("useMemoList");
  	// TodoList
  	const [todoList, setTodoList] = useState<string[]>([]);
	
	// 追加ボタン
	const addButton = useCallback((text: string) => {
		if (text === "") { 
			alert("文字が入力されていない。"); 
			return;
		}
		const todo = [...todoList];
		todo.push(text)
		setTodoList(todo);
	}, [todoList]);

	const deleteButton = useCallback((index: number) => {
		const newTodo = [...todoList];
		newTodo.splice(index, 1);
		setTodoList(newTodo);
	}, [todoList]);
	
	return { todoList, addButton, deleteButton };
};