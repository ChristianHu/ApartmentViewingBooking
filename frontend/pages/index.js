import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ComApartmentCard from "../components/com-apartment-card";
import ComSidebarFilter from "../components/com-sidebar-filter";
import { constGen } from "../constants/const-gen";
import { LaySidebarLeft } from "../layouts/lay-sidebar-left";
import { selectorStateApartmentsList, stateApartmentsList, stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";

const reqFlats = async (data, setter) => {
	const res = await utilRequestSender("GET", constGen.host + "/flats/");
	console.log(res);
	setter(res.data);
};

export default function Home() {
	const setFlats = useSetRecoilState(stateApartmentsList);
	const apartmentsList = useRecoilValue(selectorStateApartmentsList);
	const loginState = useRecoilValue(stateLogin);
	useEffect(() => {
		reqFlats(null, setFlats);
	}, []);
	return (
		<div>
			<LaySidebarLeft sidebar={<ComSidebarFilter></ComSidebarFilter>}>
				{loginState && apartmentsList ? (
					apartmentsList.map((apartment, index) => <ComApartmentCard key={index} {...apartment} />)
				) : (
					<div className="m-auto flex flex-row w-full place-content-center">
						<div className="m-auto flex flex-col mx-[20px] my-[20px] p-[50px] h-[80px] place-content-center bg-[#EC6F69] border-2 border-[#EB625C] drop-shadow-2xl text-white text-center rounded-[8px] font-semibold">
							Please login to search for Apartments!
						</div>
					</div>
				)}
			</LaySidebarLeft>
		</div>
	);
}
