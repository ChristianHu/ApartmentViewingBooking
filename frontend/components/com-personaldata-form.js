import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { constGen } from "../constants/const-gen";
import { stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";

const reqDelete = async (data, setter) => {
	const res = await utilRequestSender("DELETE", constGen.host + "/users/" + data);
	console.log(res);
	setter && setter();
};

const ComPersonalDataForm = () => {
	const loginState = useRecoilValue(stateLogin);
	const stateLoginSet = useSetRecoilState(stateLogin);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	console.log(errors);

	const handleDeleteProfile = () => {
		console.log("delete profile");
		reqDelete(loginState.id, () => {
			stateLoginSet(null);
			router.push("/");
		});
	};

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
					<label className="pb-[4px]">New Password</label>
					<input
						className={
							errors.password
								? "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-[2px] border-red-500"
								: "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
						}
						type="password"
						{...register("password", { required: false })}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <small className="text-red-500">{message}</small>}
					/>
				</div>
				<div className="flex flex-col pt-[18px]">
					<input className="btn" type="submit" />
				</div>
			</form>
			<div className="flex flex-col pt-[18px]">
				<button onClick={handleDeleteProfile} className="btn btn-error ">
					Delete Profile
				</button>
			</div>
		</div>
	);
};

export default ComPersonalDataForm;
