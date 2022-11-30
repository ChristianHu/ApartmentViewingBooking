import React from "react";
import ComFooter from "../components/com-footer";
import ComNav from "../components/com-nav";

export const LaySidebarLeft = ({ sidebar, children }) => {
	return (
		<>
			<ComNav></ComNav>
			<div className="flex flex-row">
				<div className="flex-[1_1_0%]">{sidebar}</div>
				<div className="flex-[3_3_0%] flex flex-col  items-center ">{children}</div>
			</div>
			<ComFooter></ComFooter>
		</>
	);
};
