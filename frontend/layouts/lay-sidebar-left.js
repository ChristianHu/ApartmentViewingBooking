import React from "react";
import ComFooter from "../components/com-footer";
import ComNav from "../components/com-nav";

export const LaySidebarLeft = ({ sidebar, children }) => {
	return (
		<>
			<ComNav></ComNav>
			<div className="flex flex-col md:flex-row">
				<div className="flex">{sidebar}</div>
				<div className="flex flex-col items-center">{children}</div>
			</div>
			<ComFooter></ComFooter>
		</>
	);
};
