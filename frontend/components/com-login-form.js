import React, { useState } from "react";

const ComLoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [errorMessages, setErrorMessages] = useState({ name: "", message: "" })
	//const [isSubmitted, setIsSubmitted] = useState(false)
	
	const handleSubmit = (event) => {
	  event.preventDefault()
		
		// TODO: parse real user data
		const database = [
			{
				email: "abc@abc.at",
				password: "abc"
			},
			{
				email: "a@a.at",
				password: "a"
			}
		];
		const userData = database.find((user) => user.email === email)
	  
		if (userData) {
			if (userData.password !== password) {
				setErrorMessages({ name: "password", message: errors.wrongPassword })
			} else {
				resetErrors()
				//setIsSubmitted(true);
				// TODO: handle login
			}
		} else {
			setErrorMessages({ name: "email", message: errors.emailNotFound })
			
		}
	}
	
	const resetErrors = () => (
		setErrorMessages({ name: "", message: "" })
	)

	const errors = {
		emailNotFound: "Username not found!",
		wrongPassword: "Invalid password!"
	}

	const renderErrorMessage = (name) =>
		name === errorMessages.name && (
			<div className="error">{errorMessages.message}</div>
		)
	
	const inputBorderStyle = (input) => {
		if (errorMessages.name === input) {
			return "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px] border-red-600 border-2"
		} else {
			return "h-[40px] rounded-[8px] bg-[#F2F2F2] p-[12px]"
		}
	}
	
	return (
		<div className="m-auto max-w-[400px] px-[20px] my-[20px]">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Email</label>
					<input
						type="email"
						className={inputBorderStyle("email")}
						value={email}
						onChange={(event) => setEmail(event.target.value)}/>
					<div className="h-[20px] m-auto text-red-500">
						{renderErrorMessage("email")}
					</div>
				</div>
				<div className="flex flex-col pt-[18px]">
					<label className="pb-[4px]">Password</label>
					<input
						type="password"
						className={inputBorderStyle("password")}
						value={password}
						onChange={(event) => setPassword(event.target.value)}/>
					<div className="h-[20px] m-auto text-red-500">
						{renderErrorMessage("password")}
					</div>
				</div>
				<button className="py-[18px] underline">Forgot Password?</button>
				<div className="my-[32px] grid grid-cols-2 gap-8">
					<button className="btn btn-outline">Cancel</button>
					<button className="btn" type="submit">Login</button>
				</div>
				<div className="login-success-message"/>
			</form>
		</div>
	)
}

export default ComLoginForm;