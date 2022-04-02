import styled from "styled-components";

export const EditButton = (props) => {
	const { isAdmin } = props;
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