import type { FC } from "react";
import type { User } from "../types/user";

// propsに型を指定
export const ListItem: FC<User> = props => {
	const { id, name, age, personalColor} = props;
	return (
		<p style={{color: personalColor}}>
			{id} : {name}({age})
		</p>
	);
};

ListItem.defaultProps = {
	personalColor: "gray",
};