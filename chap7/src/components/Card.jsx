import { EditButton } from "./EditButton";
import styled from "styled-components";

export const Card = () => {
	//propsとして管理者フラグを受け取る
	//const { isAdmin } = props;

	return (
		<SContainer>
			<p>山田太郎</p>
			<EditButton />
		</SContainer>
	);
};

const SContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 8px;
  border-radius: 8px;
  background-color: #dfd2da;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
