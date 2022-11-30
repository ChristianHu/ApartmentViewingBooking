import Link from "next/link";
import React from "react";
import ComApartmentFacts from "./com-apartment-facts";
import ComImageSlider from "./com-image-slider";

const ComApartmentCard = ({
	propertyId,
	propertyAddress,
	propertyPrice,
	propertySize,
	propertyRoomNumber,
	propertyImages,
}) => {
	return (
		<div className="apartment-card flex flex-col md:flex-row rounded-[16px] bg-[#F2F2F2] w-4/5 my-6">
			<ComImageSlider className="m-auto h-1/2 md:w-1/2" images={propertyImages} />
			<div className="h-1/2 md:w-1/2">
				<Link href={"/apartment/" + propertyId}>
					<ComApartmentFacts
						className="card-text-section p-[20px] h-full"
						propertyAddress={propertyAddress}
						propertyRoomNumber={propertyRoomNumber}
						propertySize={propertySize}
						propertyPrice={propertyPrice}
					></ComApartmentFacts>
				</Link>
			</div>
		</div>
	);
};

export default ComApartmentCard;
