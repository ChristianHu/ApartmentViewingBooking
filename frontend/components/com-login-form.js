import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { constGen } from "../constants/const-gen";
import { stateLogin } from "../states/state-general";
import { utilRequestSender } from "../utils/util-fetch";

const reqLogin = async (data, setter, router) => {
	try {
		const res = await utilRequestSender("POST", constGen.host + "/auth/signin", null, data);
		setter(res.data);
		if (confirm("Login successful")) {
			router.push("/");
		}
	} catch (e) {
		alert(e);
	}
};

const ComLoginForm = () => {
	const router = useRouter();
	const setLogin = useSetRecoilState(stateLogin);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		reqLogin(data, setLogin, router);
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
				<div className="flex flex-col pt-[24px]">
					<button className="pb-[24px] underline">Forgot Password?</button>
					<input className="btn" type="submit" />
				</div>
			</form>
		</div>
	);
};

export default ComLoginForm;
