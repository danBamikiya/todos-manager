import React, { useState } from "react";

function AddTodo(props: any) {
	const [state, setState] = useState({ title: "" });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.addTodo(state.title);
		setState({ title: "" });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState({ title: e.target.value });
	};

	return (
		<form style={{ display: "flex" }} onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				style={{ flex: "10", padding: "5px" }}
				placeholder="Add Todo..."
				value={state.title}
				onChange={handleChange}
			/>
			<input type="submit" value="Submit" className="btn" style={{ flex: "1" }} />
		</form>
	);
}

export default AddTodo;
