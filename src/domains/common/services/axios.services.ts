import axios from 'axios'

const axiosInstance = axios.create({ baseURL: '/' })

export async function fetchRequest(data: [string, Record<string, unknown>]) {
	const [url, params] = data
	return axiosInstance.get(url, { params: params }).then((res) => res.data)
}

export async function postRequest(
	data: [string],
	{ arg }: Record<string, unknown>,
) {
	const [url] = data
	return axiosInstance.post(url, arg)
}
export async function putRequest(
	data: [string],
	{ arg }: Record<string, unknown>,
) {
	const [url] = data
	return axiosInstance.put(url, arg)
}
export async function deleteRequest(data: [string]) {
	const [url] = data
	return axiosInstance.delete(url)
}

export { axiosInstance }
