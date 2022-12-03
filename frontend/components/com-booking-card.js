import React from "react";
import ComApartmentFacts from "./com-apartment-facts";
import ComImageSlider from "./com-image-slider";

const ComBookingCard = ({
							//propertyId,
							propertyAddress,
							propertyPrice,
							propertySize,
							propertyRoomNumber,
							propertyImages,
						}) => {
	
	const handleCancelBooking = () => {
		// TODO: handle cancel booking
	}
	
	return (
		<div className="m-auto apartment-card flex flex-col rounded-[16px] bg-[#F2F2F2] w-5/6 md:w-3/5 my-6">
			<div className=" flex flex-col md:flex-row ">
				<ComImageSlider className="m-auto h-1/2 md:w-1/2" images={propertyImages} />
				<div className="h-1/2 md:w-1/2">
					<div className="">
						<ComApartmentFacts
							className="card-text-section p-[20px] h-full"
							propertyAddress={propertyAddress}
							propertyRoomNumber={propertyRoomNumber}
							propertySize={propertySize}
							propertyPrice={propertyPrice}
						/>
					</div>
				</div>
			</div>
			<div className="mx-[15px] mb-[15px] md:float-root">
				<div className="md:float-left">
					<ul className="flex flex-row">
						<li className="w-[50px]">Date:</li>
						<li>Placeholder Date</li>
					</ul>
					<ul className="flex flex-row">
						<li className="w-[50px]">Time:</li>
						<li>Placeholder Time</li>
					</ul>
				</div>
				<div className="md:float-right mt-[15px] md:mt-[0px]">
					<button className="flex flex-row m-auto btn " onClick={handleCancelBooking}>Cancel Booking</button>
				</div>
			</div>
		</div>
	);
};

export default ComBookingCard;
