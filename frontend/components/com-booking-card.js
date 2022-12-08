import { values } from "lodash";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useRecoilValue } from "recoil";
import { constGen } from "../constants/const-gen";
import { stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";
import ComApartmentFacts from "./com-apartment-facts";
import ComImageSlider from "./com-image-slider";

const reqFlat = async (data, setter) => {
	const res = await utilRequestSender("GET", constGen.host + "/flats/" + data);
	console.log(res);
	setter(res.data);
};

const ComBookingCard = ({ id, startRentingDate, flatId }) => {
	const [apartment, setApartment] = useState(null);
	const loginState = useRecoilValue(stateLogin);
	console.log("loginState", loginState);
	useEffect(() => {
		flatId && reqFlat(flatId, setApartment);
	}, [flatId]);

	return (
		<div className="m-auto apartment-card flex flex-col rounded-[16px] bg-[#F2F2F2] w-5/6 md:w-3/5 my-6">
			<div className=" flex flex-col md:flex-row ">
				<ComImageSlider
					className="m-auto h-1/2 md:w-1/2"
					images={[
						"https://picsum.photos/200/200",
						"https://placeimg.com/200/200/arch",
						"https://loremflickr.com/200/200",
					]}
				/>
				<div className="h-1/2 md:w-1/2">
					<div className="">
						<ComApartmentFacts
							className="card-text-section p-[20px] h-full"
							propertyAddress={
								apartment
									? values(apartment.address).reduce((prev, current) => {
											return prev + " " + current;
									  })
									: null
							}
							propertyRoomNumber={apartment ? apartment.numberOfRooms : null}
							propertySize={apartment ? apartment.size : null}
							propertyPrice={apartment ? apartment.price : null}
						/>
					</div>
				</div>
			</div>
			<div className="mx-[15px] mb-[15px] md:float-root">
				<div className="md:float-left">
					<ul className="flex flex-row">
						<li className="underline mr-[10px]">Date and Time: </li>
						<li>{startRentingDate}</li>
					</ul>
					{}
				</div>
			</div>
			<div>
				<QRCode className="m-auto flex flex-row bg-white mb-[20px]" value={id} />
			</div>
		</div>
	);
};

export default ComBookingCard;
