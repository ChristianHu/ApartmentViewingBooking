import Link from "next/link";
import React from "react";
import ComApartmentFacts from "./com-apartment-facts";
import ComImageSlider from "./com-image-slider";
import Image from "next/image";

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
				<div className="m-[20px]">
					<Link href={"/apartment/" + propertyId}>
						<ul className="flex flex-row bg-[#D7D7D7] rounded-[8px] ">
							<li>
								<ComApartmentFacts
									className="card-text-section p-[20px] h-full"
									propertyAddress={propertyAddress}
									propertyRoomNumber={propertyRoomNumber}
									propertySize={propertySize}
									propertyPrice={propertyPrice}
								/>
							</li>
							<li>
	
								<Image width="12" height="24" src="/icon_arrow_right.svg" className="object-contain h-[24px] w-[12px] mt-[20px] mr-[10px]" alt="Arrow right image"/>
							</li>
						</ul>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ComApartmentCard;
