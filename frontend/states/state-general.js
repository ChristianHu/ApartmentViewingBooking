import { filter } from "lodash";
import { atom, selector } from "recoil";
import { mockApartments } from "../mocks/mock-apartments";

export const stateLogin = atom({
	key: "stateLogin",
	default: false,
});

export const stateApartmentsList = atom({
	key: "stateApartmentsList",
	default: mockApartments,
});
export const stateApartmentsListFilter = atom({
	key: "stateApartmentsListFilter",
	default: null,
});
export const selectorStateApartmentsList = selector({
	key: "selectorStateApartmentsList",
	get: ({ get }) => {
		const apartmentsList = get(stateApartmentsList);
		const apartmentsListFilter = get(stateApartmentsListFilter);
		console.log("apartmentsListFilter", apartmentsListFilter);
		if (apartmentsListFilter) {
			return filter(apartmentsList, (apartment) => {
				let result = true;
				if (apartmentsListFilter.address) {
					result = result ? apartment.propertyAddress.includes(apartmentsListFilter.address) : false;
				}
				if (apartmentsListFilter.priceMin) {
					result = result ? apartment.propertyPrice >= apartmentsListFilter.priceMin : false;
				}
				if (apartmentsListFilter.priceMax) {
					result = result ? apartment.propertyPrice <= apartmentsListFilter.priceMax : false;
				}
				if (apartmentsListFilter.roomMin) {
					result = result ? apartment.propertyRoomNumber >= apartmentsListFilter.roomMin : false;
				}
				if (apartmentsListFilter.roomMax) {
					result = result ? apartment.propertyRoomNumber <= apartmentsListFilter.roomMax : false;
				}

				return result;
			});
		} else {
			return apartmentsList;
		}
	},
});
