import { useState } from "react";
import ComApartmentFacts from "../../components/com-apartment-facts";
import ComCardComment from "../../components/com-card-comment";
import ComImageSlider from "../../components/com-image-slider";
import LayGeneral from "../../layouts/lay-general";
import { mockComments } from "../../mocks/mock-comments";

export default function Details({ propertyId }) {
	const [rating, setRating] = useState(1);
	const handleRating = (number) => {
		setRating(number);
		console.log(number);
	};

	const renderRatingStars = () => {
		let result = [];
		for (let i = 1; i < 6; i++) {
			if (rating !== undefined && rating === i) {
				result.push(
					<input
						key={i + 100}
						name={"input-1"}
						type="radio"
						className="mask mask-star"
						defaultChecked
						readOnly
					/>
				);
			} else {
				result.push(
					<input
						key={i + 100}
						name={"input-1"}
						readOnly
						type="radio"
						className="mask mask-star"
						onClick={() => handleRating(i)}
					/>
				);
			}
		}
		return result;
	};

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
						<iframe
							title="google map"
							id="googleMaps"
							width="100%"
							height="500"
							src="https://maps.google.com/maps?q=vienna,${place}=&z=13&ie=UTF8&iwloc=&output=embed"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
						/>
					</div>
					<ul className="flex flex-row my-[18px]">
						<li>
							<h3 className="mr-[15px]">Rate this apartment: </h3>
						</li>
						<li>
							<form>
								<div className="rating"> {renderRatingStars()}</div>
							</form>
						</li>
					</ul>
					<div className="my-[18px]">
						{mockComments.map((comment, index) => {
							return (
								<ComCardComment
									rating={comment.rating}
									text={comment.text}
									id={comment.id}
									key={index}
								></ComCardComment>
							);
						})}
					</div>
				</div>
			</LayGeneral>
		</div>
	);
}
export async function getServerSideProps(context) {
	const id = context.params.id;

	return { props: { propertyId: id } };
}
