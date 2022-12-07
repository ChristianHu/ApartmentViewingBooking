import React, {useState} from "react";
import LayGeneral from "../layouts/lay-general";

export default function Booking() {
	const [showQrCode, setShowQrCode] = useState(false);
	const [selectedDate, setSelectedDate] = useState(false);
	const [selectedTime, setSelectedTime] = useState(false);
	const handleBooking = () => {
		console.log(selectedDate)
		console.log(selectedTime)
		setShowQrCode(true);
	};
	const handleDownload = () => {
		console.log("Handle download...")
		// TODO: implement download functionality
	}
	const availableDates = [new Date().toDateString(), new Date().toDateString(), new Date().toDateString()];// TODO: replace placeholder values
	const availableTimes = ["10:00 - 10:30", "11:00 - 11:30", "12:00 - 12:30", "13:00 - 13:30"]
		
	return (
		<LayGeneral>
			<div className="m-auto w-2/5">
				<h1 className="mb-[20px]">Placeholder for address</h1>
				<div className="my-[10px]">
					<select 
						className="h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] w-full"
						onChange={e => setSelectedDate(e.target.value)}>
						{availableDates.map((value) => (
							<option value={value} key={value}>{value}</option>
						))}
					</select>
				</div>
				<div className="my-[10px]">
					<select
						className="h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] w-full"
						onChange={e => setSelectedTime(e.target.value)}>
						{availableTimes.map((value) => (
							<option value={value} key={value}>{value}</option>
						))}
					</select>
				</div>
				<div className="my-[10px]">{ showQrCode ? <div>Show qr code</div> : <div>Do not show qr code</div> }</div>
				<div>
					<button className="m-auto flex btn px-[70px] mb-[20px]" onClick={handleBooking}>Book</button>
				</div>
				<div className="m-auto mb-[20px] flex flex-row">
					<h1 className="m-auto flex flex-row">Booking successful!</h1>
				</div>
				<div className="m-auto mb-[20px] flex flex-col rounded-[16px] p-[20px] bg-[#F2F2F2]">
					<div className="m-auto flex flex-row mb-[20px]">Your personal access code:</div>
					<div className="m-auto flex flex-row w-[200px] h-[200px] bg-white">QR Code placeholder</div>
					<button className="m-auto flex btn px-[70px] mt-[20px]" onClick={handleDownload}>Download</button>
				</div>
			</div>
		</LayGeneral>
	);
}
