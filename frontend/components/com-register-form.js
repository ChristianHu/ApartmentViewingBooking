import React from "react";
import { useForm } from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

const ComRegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	console.log(errors);
	
	return (
		<div className="m-auto max-w-[400px] px-[20px] my-[20px]">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">First name</label>
					<input
						className={
							errors.firstName
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("firstName", {
							required: "is required",
							pattern: {
								value: /^[^0-9]+$/i,
								message: "Invalid name",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="firstName"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Last name</label>
					<input
						className={
							errors.lastName
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("lastName", {
							required: "is required",
							pattern: {
								value: /^[^0-9]+$/i,
								message: "Invalid name",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="lastName"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Age</label>
					<input
						className={
							errors.age
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("age", {
							required: "is required",
							pattern: {
								value: /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/i,// age between 18 - 120
								message: "Invalid age (minimum age is 18)",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="age"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Email</label>
					<input
						className={
							errors.email
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("email", {
							required: "is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
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
					<label className="pb-[4px]">Security Question 1: Coca Cola or Pepsi?</label>
					<select
						className={
							errors.secQuestionOne
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] px-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] px-[12px]"
						}
						{...register("secQuestionOne", { required: "is required" })}>
						<option value="cocaCola">Coca Cola</option>
						<option value="pepsi">Pepsi</option>
					</select>
					<ErrorMessage
						errors={errors}
						name="secQuestionOne"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Security Question 2: Cat or Dog?</label>
					<select
						className={
							errors.secQuestionTwo
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] px-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] px-[12px]"
						}
						{...register("secQuestionTwo", { required: "is required" })}>
						<option value="cat">Cat</option>
						<option value="dog">Dog</option>
					</select>
					<ErrorMessage
						errors={errors}
						name="secQuestionTwo"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<div className="btn">
						<input type="submit" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default ComRegisterForm;