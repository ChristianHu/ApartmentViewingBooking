import React from "react";
import Image from "next/image"

const ComApartmentFacts = ({ propertyAddress, propertyPrice, propertySize, propertyRoomNumber }) => {

	return (
		<ul className="card-text-section p-[20px] h-full">
			<li className="pb-[10px] text-lg font-bold">{propertyAddress}</li>
			<li>
				<div className="flex flex-row pb-[5px]">
					<Image width="24" height="24" src="/icon_price.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
					<div className="ml-[10px] font-semibold">{propertyPrice}</div>
				</div>
			</li>
			<li>
				<div className="flex flex-row pb-[5px]">
					<Image width="24" height="24" src="/icon_size.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
					<div className="ml-[10px]">{propertySize}</div>
				</div>
			</li>
			<li>
				<div className="flex flex-row pb-[5px]">
					<Image width="24" height="24" src="/icon_rooms.svg" className="object-contain h-[24px] w-[24px]" alt="Room number Image"/>
					<div className="ml-[10px]">{propertyRoomNumber}</div>
				</div>
			</li>
		</ul>
	)
};

export default ComApartmentFacts;
