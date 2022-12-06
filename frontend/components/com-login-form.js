import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";

const ComLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="m-auto max-w-[400px] px-[20px] my-[20px]">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Username</label>
					<input
						className={
							errors.username
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("username", {
							required: "is required",
							pattern: {
								value: /^[^0-9]{3,}$/i,
								message: "Invalid name",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="username"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Password</label>
					<input
						className={
							errors.password
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="password"
						{...register("password", { required: "is required" })}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<button className="py-[18px] underline">Forgot Password?</button>
					<input className="btn" type="submit" />
				</div>
			</form>
		</div>
	);
};

export default ComLoginForm;
