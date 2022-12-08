import { values } from "lodash";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ComApartmentAddCommentCard from "../../components/com-apartment-add-comment-card";
import ComApartmentFacts from "../../components/com-apartment-facts";
import ComCardComment from "../../components/com-card-comment";
import ComImageSlider from "../../components/com-image-slider";
import ComModalBooking from "../../components/com-modal-booking";
import { constGen } from "../../constants/const-gen";
import LayGeneral from "../../layouts/lay-general";
import { utilRequestSender } from "../../utils/util-fetch";

const reqFlat = async (data, setter) => {
	const res = await utilRequestSender("GET", constGen.host + "/flats/" + data);
	console.log(res);
	setter(res.data);
};
export default function Details({ propertyId }) {
	const [apartment, setApartment] = useState(null);
	const [showModal, setShowModal] = useState(false);

	console.log(apartment);
	useEffect(() => {
		propertyId && reqFlat(propertyId, setApartment);
	}, [propertyId]);

	const handleBook = () => {
		setShowModal(!showModal);
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
					<ReactModal ariaHideApp={false} isOpen={showModal} contentLabel="Minimal Modal Example">
						<>
							<button onClick={handleBook}>Close Modal</button>
							<ComModalBooking {...apartment}></ComModalBooking>
						</>
					</ReactModal>

					<ComApartmentFacts
						className="my-[18px]"
						propertyAddress={
							apartment
								? values(apartment.address).reduce((prev, current) => {
										return prev + " " + current;
								  })
								: null
						}
						propertyRoomNumber={apartment ? apartment.numberOfRooms : null}
						propertySize={apartment ? apartment.size : null}
						propertyPrice={apartment ? apartment.price : null}
					/>
					<div className="rounded-[16px] bg-[#F2F2F2] p-[18px]">
						<h1 className="">Headline</h1>
						<p>{apartment ? apartment.description : null}</p>
					</div>
					<div className="container-fluid my-[18px]">
						<iframe
							title="google map"
							id="googleMaps"
							width="100%"
							height="500"
							src={
								"https://maps.google.com/maps?q=" +
								apartment?.address.city +
								"," +
								apartment?.address.street +
								"," +
								apartment?.address.flatNumber +
								"=&z=13&ie=UTF8&iwloc=&output=embed"
							}
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
						/>
					</div>
					<div>
						<ComApartmentAddCommentCard flatId={propertyId} />
					</div>
					<div className="font-bold">Comments:</div>
					<div className="my-[18px]">
						{apartment?.comments.map((comment, index) => {
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
