//import { styled } from "styled-components";
import { memo } from "react";
export const Child2 = memo(() => {
	console.log("Child1 レンダリング");
	return (
		<div>
			<p>Child2</p>
		</div>
	);
});