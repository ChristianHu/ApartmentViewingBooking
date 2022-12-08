import { useState } from "react";
import ComLoginForm from "../components/com-login-form";
import ComRegisterForm from "../components/com-register-form";
import LayGeneral from "../layouts/lay-general";

export default function Login() {
	const [showLogin, setShowLogin] = useState(true);
	const handleLogin = () => {
		setShowLogin(true);
	};
	const handleRegister = () => {
		setShowLogin(false);
	};
	return (
		<LayGeneral>
			<div>
				<div className="m-auto flex flex-row w-[300px]">
					<button
						className={
							showLogin 
								? "flex px-[20px] font-extrabold underline" 
								: "flex px-[20px]"
						}
						onClick={handleLogin}>Login</button>
					<button
						className={
							showLogin
								? "flex px-[20px]"
								: "flex px-[20px] font-extrabold underline"
						}
						onClick={handleRegister}>Register</button>
				</div>
				<div>{showLogin ? <ComLoginForm /> : <ComRegisterForm />}</div>
			</div>
		</LayGeneral>
	);
}
