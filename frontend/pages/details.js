import LayGeneral from "../layouts/lay-general";
import ComImageSlider from "../components/com-image-slider";
import ComApartmentFacts from "../components/com-apartment-facts";

export default function Details() {
	const handleBook = () => {
		console.log("TODO: show booking page")
	}
	
	return (
		<div>
			<LayGeneral>
				<div className="m-auto w-3/5">
					<div className="flex rounded-[16px] bg-[#F2F2F2] my-[30px]">
						<ComImageSlider
							className=""
							images={["https://picsum.photos/200/200", "https://placeimg.com/200/200/arch", "https://loremflickr.com/200/200"]}
						/>
					</div>
					<button className="btn px-[70px]" onClick={handleBook}>Book</button>
					<ComApartmentFacts
						className=""
						propertyAddress={"Test"}
						propertyRoomNumber={"Test"}
						propertySize={"Test"}
						propertyPrice={"Test"}
					/>
					<div className="rounded-[16px] bg-[#F2F2F2] p-[18px]">
						<h1 className="">Headline</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</LayGeneral>
		</div>
	);
}