import {useState} from 'react';
import {mockApartments} from "../mocks/mock-apartments";
import ComBookingCard from "../components/com-booking-card";
import ComPersonalDataForm from "../components/com-personaldata-form";
import LayGeneral from "../layouts/lay-general";

export default function Profile() {
	const [showMyBookings, setShowMyBookings] = useState(true)
	const handleMyBookings = () => {
		setShowMyBookings(true)
	}
	const handlePersonalData = () => {
		setShowMyBookings(false)
	}
	return (
		<div>
			<LayGeneral>
				<div className="m-auto flex flex-row w-[300px]">
					<button 
						className={
							showMyBookings
								? "flex px-[20px] font-extrabold underline"
								: "flex px-[20px]"
						}
						onClick={handleMyBookings}>My Bookings</button>
					<button 
						className={
							showMyBookings
								? "flex px-[20px]"
								: "flex px-[20px] font-extrabold underline"
						}
						onClick={handlePersonalData}>Personal Data</button>
				</div>
				<div>
					{showMyBookings ? <div>
						{mockApartments.map((apartment, index) => (
							<ComBookingCard key={index} {...apartment} />
						))}
					</div> : <ComPersonalDataForm/>}
				</div>
			</LayGeneral>
		</div>
	);
}