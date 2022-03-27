//import { styled } from "styled-components";
import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = memo(() => {
	console.log("Child1 レンダリング");
	return (
		<div>
			<p>Child1</p>
			<Child2 />
			<Child3 />
		</div>
	);

});