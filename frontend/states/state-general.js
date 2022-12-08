import { filter, values } from "lodash";
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

const stateApartmentsListMapper = selector({
	key: "stateApartmentsListMapper",
	get: ({ get }) => {
		const apartmentsList = get(stateApartmentsList);
		return apartmentsList.map((apartment) => {
			return {
				propertyId: apartment.id,
				propertyAddress: values(apartment.address).reduce((prev, current) => {
					return prev + " " + current;
				}),
				propertyDescription: apartment.description,
				propertyPrice: apartment.price,
				propertySize: apartment.size,
				propertyRoomNumber: apartment.size,
				propertyImages: [
					"https://picsum.photos/200/200",
					"https://placeimg.com/200/200/arch",
					"https://loremflickr.com/200/200",
				],
			};
		});
	},
});
export const selectorStateApartmentsList = selector({
	key: "selectorStateApartmentsList",
	get: ({ get }) => {
		const apartmentsList = get(stateApartmentsListMapper);
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
