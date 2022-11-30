import ComApartmentCard from "../components/com-apartment-card";
import ComSidebarFilter from "../components/com-sidebar-filter";
import { LaySidebarLeft } from "../layouts/lay-sidebar-left";
import { mockApartments } from "../mocks/mock-apartments";

export default function Home() {
	return (
		<div>
			<LaySidebarLeft sidebar={<ComSidebarFilter></ComSidebarFilter>}>
				{mockApartments.map((apartment, index) => (
					<ComApartmentCard key={index} {...apartment} />
				))}
			</LaySidebarLeft>
		</div>
	);
}
