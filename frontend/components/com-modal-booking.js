import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useRecoilValue } from "recoil";
import { constGen } from "../constants/const-gen";
import { stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";

const reqBooking = async (data, setter) => {
	const res = await utilRequestSender(
		"POST",
		constGen.host + "/bookings/user/" + data.userId + "/flat/" + data.flat,
		null,
		data.bookingDate,
		{ "Content-Type": "text/plain" }
	);
	console.log(res.data.id);
	setter(res.data.id);
};

export default function ComModalBooking({ id, avaiableBookingTimes, address }) {
	console.log("ComModalBooking", id, avaiableBookingTimes, address.city, address.street, address.flatNumber);
	const [showQrCode, setShowQrCode] = useState(false);
	const [selectedTime, setSelectedTime] = useState(false);
	const loginState = useRecoilValue(stateLogin);

	const handleBooking = () => {
		console.log(selectedTime);
		reqBooking({ userId: loginState.id ? loginState.id : 1, flat: id, bookingDate: selectedTime }, setShowQrCode);
	};
	const handleDownload = () => {
		window.print();
	};

	return (
		<div className="md:m-auto max-w-[400px] m-[20px]">
			<h1 className="mb-[20px]">{address.city + " " + address.street + " " + address.flatNumber}</h1>
			<div className="my-[10px]">
				<select
					className="h-[50px] rounded-[8px] bg-[#F2F2F2] p-[12px] w-full"
					onChange={(e) => setSelectedTime(e.target.value)}
				>
					{avaiableBookingTimes
						.filter((time) => time.alreadyBooked === false)
						.map((time) => (
							<option value={time.bookingDate} key={time.id}>
								{time.bookingDate}
							</option>
						))}
				</select>
			</div>
			<div>
				<button
					onClick={handleBooking}
					className={
						showQrCode
							? "m-auto flex btn w-[256px] mb-[20px] btn-disabled"
							: "m-auto flex btn w-[256px] mb-[20px]"
					}
				>
					Book
				</button>
			</div>
			{showQrCode ? (
				<div>
					<div className="m-auto mb-[20px] flex flex-row">
						<h1 className="m-auto flex flex-row">Booking successful!</h1>
					</div>
					<div className="m-auto mb-[20px] flex flex-col rounded-[16px] p-[20px] bg-[#F2F2F2]">
						<div className="m-auto flex flex-row mb-[20px]">Your personal access code:</div>
						<div className="m-auto flex flex-row w-[256px] h-[256px] bg-white">
							<QRCode className="m-auto flex flex-row bg-white" value={showQrCode} />
						</div>
						<button className="m-auto flex btn w-[256px] mt-[20px]" onClick={handleDownload}>
							Download
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
