import {useState} from 'react';
import ComLoginForm from "../components/com-login-form";
import ComRegisterForm from "../components/com-register-form";

export default function Login() {
	const [showLogin, setShowLogin] = useState(true)
	const handleLogin = () => {
		setShowLogin(true)
	}
	const handleRegister = () => {
		setShowLogin(false)
	}
	return (
		<div>
			<div>
				<button onClick={handleLogin}>Login</button>
				<button onClick={handleRegister}>Register</button>
			</div>
			<div>
				{showLogin ? <ComLoginForm/> : <ComRegisterForm/>}
			</div>
		</div>
	);
}