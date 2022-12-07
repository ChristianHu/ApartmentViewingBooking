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
				<div>
					<button onClick={handleLogin}>Login</button>
					<button onClick={handleRegister}>Register</button>
				</div>
				<div>{showLogin ? <ComLoginForm /> : <ComRegisterForm />}</div>
			</div>
		</LayGeneral>
	);
}
