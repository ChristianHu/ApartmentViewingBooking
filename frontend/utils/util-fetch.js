import axios from "axios";
import { has } from "lodash";

/**
 * @description
 * @author Alireza
 * @date 20/03/2022
 * @param {string} method
 * @param {string} path
 * @param {*} params
 * @param {*} body
 * @param {*} headers
 */
export const requestSender = (method, path, params = null, body = null, headers = {}) => {
	if (method === "post" || method === "patch" || method === "put") {
		if (!has(headers, "Content-Type")) headers = { ...headers, ...{ "Content-Type": "application/json" } };
	}

	const options = {
		baseURL: process.env.NEXT_PUBLIC_HOST,
		method: method,
		url: path,
		...(body && { data: body }),
		headers: {
			//'Access-Control-Allow-Origin': '*',
			//...(localStorage.getItem('authorization') && { Authorization: localStorage.getItem('authorization') }),
			...headers,
		},
		withCredentials: false,

		/*         transformRequest: [
            (data, headers) => {
                // transform the data

                return data;
            },
        ], */
		...(params && { params: params }),
		timeout: 10000,
	};
	return axios(options);
};
