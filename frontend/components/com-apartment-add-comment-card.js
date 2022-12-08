import React, {useState} from "react";
import {useForm} from "react-hook-form";

const ComApartmentAddCommentCard = () => {
	const [rating, setRating] = useState(5)
	const {
		register,
		handleSubmit,
	} = useForm();
	
	const handleRating = (number) => {
		setRating(number)
	};
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
	};
	
	const onSubmit = (data) => {
		// TODO: handle add comment
		console.log("Submit test data:")
		console.log(data)
	};

	return (
		<div className="m-auto apartment-card flex flex-col rounded-[16px] bg-[#F2F2F2] px-[20px] w-5/6 md:w-3/5 my-6">
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
