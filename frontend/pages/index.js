import { useRecoilValue } from "recoil";
import ComApartmentCard from "../components/com-apartment-card";
import ComSidebarFilter from "../components/com-sidebar-filter";
import { LaySidebarLeft } from "../layouts/lay-sidebar-left";
import { selectorStateApartmentsList } from "../states/state-general";

export default function Home() {
	const apartmentsList = useRecoilValue(selectorStateApartmentsList);
	return (
		<div>
			<LaySidebarLeft sidebar={<ComSidebarFilter></ComSidebarFilter>}>
				{apartmentsList.map((apartment, index) => (
					<ComApartmentCard key={index} {...apartment} />
				))}
			</LaySidebarLeft>
		</div>
	);
}
