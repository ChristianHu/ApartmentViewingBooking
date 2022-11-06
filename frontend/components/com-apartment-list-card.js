import React from "react";

const ComApartmentListCard = ({ PropertyName, PropertyPrice }) => {
	return (
		<div className="card">
			<div>{PropertyName}</div>
			<div>{PropertyPrice}</div>
		</div>
	);
};

export default ComApartmentListCard;
