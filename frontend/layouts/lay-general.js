import React from "react";
import ComFooter from "../components/com-footer";
import ComNav from "../components/com-nav";

const LayGeneral = (props) => {
	return (
		<>
			<ComNav></ComNav>
			<div className="min-h-screen">{props.children}</div>
			<ComFooter></ComFooter>
		</>
	);
};

export default LayGeneral;
