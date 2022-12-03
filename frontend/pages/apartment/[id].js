import ComApartmentFacts from "../../components/com-apartment-facts";
import ComImageSlider from "../../components/com-image-slider";
import LayGeneral from "../../layouts/lay-general";
import {useState} from "react";

export default function Details({ propertyId }) {
	const [rating, setRating] = useState(0)
	const handleRating = (number) => {
		setRating(number)
	}
	
	const renderRatingStars = () => {
		let result = []
		for (let i = 0; i < 5; i++) {
			if (rating === i) {
				result.push(<input key={i} type="radio" name="rating-1" className="mask mask-star" checked />)
			} else {
				result.push(<input key={i} type="radio" name="rating-1" className="mask mask-star" onClick={() => handleRating(i)}/>)
			}
		}
		return result
	}
	
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
					<div className="my-[18px]">PLACEHOLDER for map</div>
					<ul className="flex flex-row my-[18px]">
						<li>
							<h3 className="mr-[15px]">Rate this apartment: </h3>
						</li>
						<li>
							<div className="rating"> { renderRatingStars() }</div>
						</li>
					</ul>
					<div className="my-[18px]">PLACEHOLDER for comment section</div>
				</div>
			</LayGeneral>
		</div>
	);
}
export async function getServerSideProps(context) {
	const id = context.params.id;

	return { props: { propertyId: id } };
}