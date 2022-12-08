import React from "react";
import ComFooter from "../components/com-footer";
import ComNav from "../components/com-nav";

export const LaySidebarLeft = ({ sidebar, children }) => {
	return (
		<>
			<ComNav></ComNav>
			<div className="flex flex-col lg:flex-row min-h-screen  ">
				<div className="flex justify-center">{sidebar}</div>
				<div className="flex w-full flex-col items-center">{children}</div>
			</div>
			<ComFooter></ComFooter>
		</>
	);
};
