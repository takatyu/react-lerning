//import { styled } from "styled-components";
import { memo } from "react";
export const Child4 = memo(() => {
	console.log("Child4 レンダリング");
	return (
		<div>
			<p>Child4</p>
		</div>
	);
});

