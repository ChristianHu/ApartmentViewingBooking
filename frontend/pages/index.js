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
				{
					/*loginState&&*/ apartmentsList ? (
						apartmentsList.map((apartment, index) => <ComApartmentCard key={index} {...apartment} />)
					) : (
						<p>You need to login!</p>
					)
				}
			</LaySidebarLeft>
		</div>
	);
}
