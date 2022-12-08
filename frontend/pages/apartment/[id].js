import ComApartmentFacts from "../../components/com-apartment-facts";
import ComImageSlider from "../../components/com-image-slider";
import LayGeneral from "../../layouts/lay-general";
import ComApartmentAddCommentCard from "../../components/com-apartment-add-comment-card";

export default function Details({ propertyId }) {
	const handleBook = () => {
		console.log("TODO: show booking page");
	};
	
	return (
		<div>
			<LayGeneral>
				<div className="m-auto w-3/5">
					<div className="flex rounded-[16px] bg-[#F2F2F2] my-[30px]">
						<ComImageSlider
							className=""
							images={[
								"https://picsum.photos/200/200",
								"https://placeimg.com/200/200/arch",
								"https://loremflickr.com/200/200",
							]}
						/>
					</div>
					<button className="flex flex-row m-auto btn px-[70px]" onClick={handleBook}>
						Book
					</button>
					<ComApartmentFacts
						className="my-[18px]"
						propertyAddress={propertyId}
						propertyRoomNumber={propertyId}
						propertySize={"Test"}
						propertyPrice={"Test"}
					/>
					<div className="rounded-[16px] bg-[#F2F2F2] p-[18px]">
						<h1 className="">Headline</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</p>
					</div>
					<div className="container-fluid my-[18px]">
						<iframe title="google map" id="googleMaps" width="100%" height="500"
								src="https://maps.google.com/maps?q=vienna,${place}=&z=13&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no" marginHeight="0" marginWidth="0"/>
					</div>
				</div>
				<div>
					<ComApartmentAddCommentCard/>
				</div>
			</LayGeneral>
		</div>
	);
}
export async function getServerSideProps(context) {
	const id = context.params.id;

	return { props: { propertyId: id } };
}
