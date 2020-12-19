import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

// import GlobalStyle from "./themes/globalStyle";
import { addData, deleteData, fetchData } from "./http";
// import GlobalStyle from "./themes/globalStyle";

interface AppState {
	todos: { userId: number; id: number; title: string; completed: boolean }[];
}

function App(): React.ReactElement {
	const [state, setState] = useState<AppState>({
		todos: []
	});

	useEffect(() => {
		fetchData().then(extractedData => setState({ todos: extractedData }));
	}, []);

	// Toggle Complete
	const markComplete = (id: number) => {
		setState({
			todos: state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	const delTodo = (id: number) => {
		deleteData(id).then(() =>
			setState({ todos: [...state.todos.filter(todo => todo.id !== id)] })
		);
	};

	// Add Todo
	const addTodo = (title: string) => {
		addData(title).then(updatedData =>
			setState({ todos: [...state.todos, updatedData] })
		);
	};

	return (
		// <Router>
		// <GlobalStyle>
		<div className="container">
			<Header />
			{/* <Route
						exact
						path="/"
						render={() => ( */}
			<>
				<AddTodo addTodo={addTodo} />
				<Todos todos={state.todos} markComplete={markComplete} delTodo={delTodo} />
			</>
			<About />
			{/* // )} */}
			{/* // /> */}

			{/* <Route path="/about" component={About} /> */}
		</div>
		// </GlobalStyle>
		// {/* </Router> */}
	);
}

export default App;
