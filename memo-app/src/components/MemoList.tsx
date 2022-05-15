import { FC, memo } from "react"
import styled from "styled-components"

type Props = {
	todoList: string[];
	deleteButton: (index: number) => void;
};

// MemoListコンポーネント
export const MemoList: FC<Props> = memo((props) => {
	console.log("MemoList");
	const { todoList, deleteButton} =  props;

	return (
		<SContainer>
        <p>メモ一覧</p>
        <ul>
          {/** 配列ループ */}
          { todoList.map((todos, index) => (
              <li key={index}>
                <SMemoWrapper>
                  <p>{todos}</p>
                  <SButton onClick={() => {deleteButton(index)}}>削除</SButton>
                </SMemoWrapper>
              </li>
            )) 
          }
        </ul>
      </SContainer>
	);
});

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