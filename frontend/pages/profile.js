import { keys } from "lodash";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ComBookingCard from "../components/com-booking-card";
import ComPersonalDataForm from "../components/com-personaldata-form";
import { constGen } from "../constants/const-gen";
import LayGeneral from "../layouts/lay-general";
import { stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";

const reqBookings = async (data, setter) => {
	const res = await utilRequestSender("GET", constGen.host + "/bookings/user/" + data);

	setter(res.data);
};

export default function Profile() {
	const [showMyBookings, setShowMyBookings] = useState(true);
	const loginState = useRecoilValue(stateLogin);
	const [flats, setFlats] = useState(null);
	const handleMyBookings = () => {
		setShowMyBookings(true);
	};
	const handlePersonalData = () => {
		setShowMyBookings(false);
	};
	useEffect(() => {
		loginState && reqBookings(loginState.id, setFlats);
	}, []);
	console.log(flats);
	return (
		<div>
			<LayGeneral>
				<div className="m-auto flex flex-row w-[300px]">
					<button
						className={
							showMyBookings
								? "flex w-[150px] place-content-center px-[20px] font-extrabold underline"
								: "flex w-[150px] place-content-center px-[20px]"
						}
						onClick={handleMyBookings}
					>
						My Bookings
					</button>
					<button
						className={
							showMyBookings
								? "flex w-[150px] place-content-center px-[20px]"
								: "flex w-[150px] place-content-center px-[20px] font-extrabold underline"
						}
						onClick={handlePersonalData}
					>
						Personal Data
					</button>
				</div>
				<div>
					{showMyBookings ? (
						<div>
							{keys(flats)?.map((apartment, index) => (
								<ComBookingCard
									key={index}
									flatId={apartment}
									id={flats[apartment].id}
									startRentingDate={flats[apartment].startRentingDate}
								/>
							))}
						</div>
					) : (
						<ComPersonalDataForm />
					)}
				</div>
			</LayGeneral>
		</div>
	);
}
