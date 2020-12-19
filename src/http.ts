import axios from "axios";

type data = { userId: number; id: number; title: string; completed: boolean }[];

let url = `https://jsonplaceholder.typicode.com/todos`;

export async function fetchData(): Promise<data> {
	const res = await axios.get(url + `?_limit=10`);
	return res.data;
}

export async function deleteData(id: number): Promise<data> {
	const res = await axios.delete(url + `/${id}`);
	return res.data;
}

export async function addData(title: string): Promise<any> {
	const res = await axios.post(url, { title, completed: false });
	return res.data;
}
