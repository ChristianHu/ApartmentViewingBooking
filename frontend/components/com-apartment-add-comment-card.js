import React, {useState} from "react";
import {useForm} from "react-hook-form";

const ComApartmentAddCommentCard = () => {
	const [rating, setRating] = useState(1)
	const {
		register,
		handleSubmit,
	} = useForm();
	
	const handleRating = (number) => {
		setRating(number)
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
	
	const onSubmit = (data) => {
		// TODO: handle add comment
		console.log("Submit test data:")
		console.log({...data, ...{rating: rating}})
	};

	return (
		<div className="m-auto apartment-card flex flex-col rounded-[16px] bg-[#F2F2F2] px-[20px] my-6">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Add your comment here:</label>
					<textarea
						className="h-[120px] rounded-[8px] bg-white p-[12px]"
						{...register("comment", {
						})}
					/>
				</div>
				<ul className="flex flex-row my-[18px]">
					<li>
						<div className="mr-[15px]">Rate this apartment: </div>
					</li>
					<li>
						<div className="rating"> { renderRatingStars() }</div>
					</li>
				</ul>
				<input className="flex flex-row w-[256px] m-auto btn my-[20px]" type="submit"/>
			</form>
		</div>
	);
};

export default ComApartmentAddCommentCard;
