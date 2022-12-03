import { filter } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { stateApartmentsListFilter } from "../states/state-general";

const ComSidebarFilter = () => {
	const [apartmentsListFilter, setApartmentsListFilter] = useRecoilState(stateApartmentsListFilter);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data = {}) => {
		const result = {};
		filter(data, (value, key) => {
			value !== "" && (result[key] = value);
		});
		setApartmentsListFilter(Object.keys(result).length === 0 ? null : result);
	};

	return (
		<div className="drawer-side">
			<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="input-group my-4 px-2">
					<span>Address</span>
					<input
						defaultValue={apartmentsListFilter?.address}
						type="text"
						placeholder="Some Address 1, 1010 Vienna"
						className="input input-bordered w-full "
						{...register("address", {})}
					/>
				</label>
				<label className="input-group my-4 px-2">
					<span>Price Min</span>
					<input
						defaultValue={apartmentsListFilter?.priceMin}
						type="number"
						placeholder="1000"
						className="input input-bordered "
						{...register("priceMin", {})}
					/>
					<span>Price Max</span>
					<input
						defaultValue={apartmentsListFilter?.priceMax}
						type="number"
						placeholder="2000"
						className="input input-bordered "
						{...register("priceMax", {})}
					/>
				</label>
				<label className="input-group my-4 px-2">
					<span>Rooms Min</span>
					<input
						defaultValue={apartmentsListFilter?.roomsMin}
						type="number"
						placeholder="1"
						className="input input-bordered "
						{...register("roomMin", {})}
					/>
					<span>Rooms Max</span>
					<input
						defaultValue={apartmentsListFilter?.roomsMax}
						type="number"
						placeholder="3"
						className="input input-bordered "
						{...register("roomMax", {})}
					/>
				</label>
				<label className="flex flex-col pt-[18px] px-2">
					<input className="btn" type="submit" />
				</label>
			</form>
		</div>
	);
};

export default ComSidebarFilter;
