import React from "react";
import TodoItem from "./TodoItem";

interface propTypes {
	todos: TodosProps[];
	markComplete: (...args: any[]) => any;
	delTodo: (...args: any[]) => any;
}

interface TodosProps {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const Todos = ({ todos, markComplete, delTodo }: propTypes) => {
	const todoElements = todos.map((todo: TodosProps) => (
		<TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
	));

	return <>{todoElements}</>;
};

export default Todos;
