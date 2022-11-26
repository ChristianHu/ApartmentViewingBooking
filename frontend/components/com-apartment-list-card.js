import React from "react";
import ComImageSlider from "./com-image-slider";
import ComApartmentFacts from "./com-apartment-facts";

const ComApartmentListCard = ({ propertyAddress, propertyPrice, propertySize, propertyRoomNumber, propertyImages }) => {

	return (
		<div className="apartment-card flex flex-col md:flex-row rounded-[16px] bg-[#F2F2F2]">
			<ComImageSlider className="m-auto h-1/2 md:w-1/2" images={propertyImages}/>
			<div className="h-1/2 md:w-1/2">
				<ComApartmentFacts
					className="card-text-section p-[20px] h-full"
					propertyAddress={propertyAddress}	
					propertyRoomNumber={propertyRoomNumber}
					propertySize={propertySize}
					propertyPrice={propertyPrice}>
				</ComApartmentFacts>
			</div>
		</div>
	)
};

export default ComApartmentListCard;
