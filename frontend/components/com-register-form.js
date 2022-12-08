import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { constGen } from "../constants/const-gen";
import { utilRequestSender } from "../utils/util-fetch";
import {router} from "next/client";

const reqRegister = async (data, setter) => {
	try {
		const res = await utilRequestSender("POST", constGen.host + "/auth/signup", null, data);
		setter(res.data);
		//alert("Register successful");
		if (confirm("Register successful")) {
			router.push("/");
		}
	} catch (e) {
		alert(e);
	}
};

const ComRegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		reqRegister(data, console.log);
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
								value: /^[^0-9]{2,}$/i,
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
								value: /^[^0-9]{2,}$/i,
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
						type="number"
						{...register("age", {
							required: "is required",
							pattern: {
								value: /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/i, // age between 18 - 120
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
						{...register("password", {
							required: "is required",
							pattern: {
								value: /^.{8,}$/i,
								message: "Minimum 8 chars",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Security Question 1: Coca Cola or Pepsi?</label>
					<input
						className={
							errors.securityAnswerOne
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("securityAnswerOne", {
							required: "is required",
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="securityAnswerOne"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Security Question 2: Cat or Dog?</label>
					<input
						className={
							errors.securityAnswerTwo
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="text"
						{...register("securityAnswerTwo", {
							required: "is required",
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="securityAnswerTwo"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<input className="btn" type="submit" />
				</div>
			</form>
		</div>
	);
};

export default ComRegisterForm;
