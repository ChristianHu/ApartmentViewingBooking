import { useRecoilValue } from "recoil";
import ComApartmentCard from "../components/com-apartment-card";
import ComSidebarFilter from "../components/com-sidebar-filter";
import { LaySidebarLeft } from "../layouts/lay-sidebar-left";
import {selectorStateApartmentsList, stateLogin} from "../states/state-general";

export default function Home() {
	const apartmentsList = useRecoilValue(selectorStateApartmentsList);
	const loginState = useRecoilValue(stateLogin);
	return (
		<div>
			<LaySidebarLeft sidebar={<ComSidebarFilter></ComSidebarFilter>}>
				
				{loginState ? apartmentsList.map((apartment, index) => (
					<ComApartmentCard key={index} {...apartment} />
				)) : <p>You need to login!</p>}
			</LaySidebarLeft>
		</div>
	);
}
