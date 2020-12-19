export function fetchData() {
	jest.fn().mockResolvedValue({
		data: [
			{
				userId: 1,
				id: 1,
				title: "delectus aut autem",
				completed: false
			}
		]
	});
}
