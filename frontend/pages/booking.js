import React, {useState} from "react";
import LayGeneral from "../layouts/lay-general";
import QRCode from "react-qr-code";

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
			<div className="md:m-auto md:w-2/5  m-[20px]">
				<h1 className="mb-[20px]">Placeholder for address</h1>
				<div className="my-[10px]">
					<select 
						className="h-[50px] rounded-[8px] bg-[#F2F2F2] p-[12px] w-full"
						onChange={e => setSelectedDate(e.target.value)}>
						{availableDates.map((value) => (
							<option value={value} key={value}>{value}</option>
						))}
					</select>
				</div>
				<div className="my-[10px]">
					<select
						className="h-[50px] rounded-[8px] bg-[#F2F2F2] p-[12px] w-full"
						onChange={e => setSelectedTime(e.target.value)}>
						{availableTimes.map((value) => (
							<option value={value} key={value}>{value}</option>
						))}
					</select>
				</div>
				<div>
					<button onClick={handleBooking}
							className={
								showQrCode
									? "m-auto flex btn w-[256px] mb-[20px] btn-disabled"
									: "m-auto flex btn w-[256px] mb-[20px]"
							}
					>Book</button>
				</div>
				{showQrCode ? <div>
					<div className="m-auto mb-[20px] flex flex-row">
						<h1 className="m-auto flex flex-row">Booking successful!</h1>
					</div>
					<div className="m-auto mb-[20px] flex flex-col rounded-[16px] p-[20px] bg-[#F2F2F2]">
						<div className="m-auto flex flex-row mb-[20px]">Your personal access code:</div>
						<div className="m-auto flex flex-row w-[256px] h-[256px] bg-white">
							<QRCode className="m-auto flex flex-row bg-white" value="Some random value"/>
						</div>
						<button className="m-auto flex btn w-[256px] mt-[20px]" onClick={handleDownload}>Download</button>
					</div>
				</div> : ''}
			</div>
		</LayGeneral>
	);
}
