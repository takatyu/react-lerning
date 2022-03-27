//import { styled } from "styled-components";
import { memo } from "react";
export const Child3 = memo(() => {
	console.log("Child3 レンダリング");
	return (
		<div>
			<p>Child3</p>
		</div>
	);
});
