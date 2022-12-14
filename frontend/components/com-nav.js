import Link from "next/link";
import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import { stateLogin } from "../states/state-general";
const ComNav = () => {
	const stateLoginVal = useRecoilValue(stateLogin);
	const stateLoginSet = useSetRecoilState(stateLogin)
	const handleLogout = () => {
		stateLoginSet(null)
	}
	
	const renderLogin = () => {
		if (stateLoginVal) {
			return (
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<Link href="/profile">
							<li>
								<a className="justify-between">
									Profile
								</a>
							</li>
						</Link>
						<li>
							<a onClick={handleLogout}>Logout</a>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<Link href="/login">
					<button className="btn btn-active btn-primary">Login or Register</button>
				</Link>
			);
		}
	};

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link href="/">
					<button className="btn btn-ghost normal-case text-xl">No More Homeless</button>
				</Link>
			</div>
			<div className="flex-none gap-2">{renderLogin()}</div>
		</div>
	);
};

ComNav.propTypes = {};

export default ComNav;
