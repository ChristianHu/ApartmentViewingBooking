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
				<div>
					<button onClick={handleMyBookings}>My Bookings</button>
					<button onClick={handlePersonalData}>Personal Data</button>
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