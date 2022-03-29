//import { styled } from "styled-components";
import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = memo((props) => {
	console.log("Child1 レンダリング");

	// Propsから関数を展開（分割代入）
	const { onClickReset } = props;

	return (
		<div>
			<p>Child1</p>
			<button onClick={onClickReset}>リセット</button>
			<Child2 />
			<Child3 />
		</div>
	);

});