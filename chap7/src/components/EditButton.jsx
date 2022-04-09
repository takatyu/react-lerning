import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";
import styled from "styled-components";

export const EditButton = (props) => {
	const { isAdmin } = props;
	// useContextの引数に参照するContextを指定する
	const contexValue = useContext(AdminFlagContext);
	console.log(contexValue);
	
	// isAdminがfalse(管理者以外)の場合、ボタンを非活性
	return (
		<SButton disabled={isAdmin}>編集</SButton>
	);
};

const SButton = styled.button`
  width: 100px;
  padding: 6px;
  border-radius: 8px;
`;