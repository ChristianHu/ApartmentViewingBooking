import React from "react";
import { useForm } from "react-hook-form";

const ComLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className="m-auto max-w-[400px] px-[20px] my-[20px]">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Email</label>
					<input type="email" placeholder="email" {...register("email", { required: true })} />
					{/* <div className="h-[20px] m-auto text-red-500">{renderErrorMessage("email")}</div> */}
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Email</label>
					<input type="undefined" placeholder="password" {...register} />
				</div>
				<div className="flex flex-col pt-[18px]">
					<button className="py-[18px] underline">Forgot Password?</button>
					<div className="my-[32px] grid grid-cols-2 gap-8">
						<input type="submit" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default ComLoginForm;
