// import React from "react";
// import styled from "styled-components";

// const ItemDiv = styled.div`
// 	background: #f4f4f4;
// 	padding: 10px;
// 	borderbottom: 1px #ccc dotted;
// 	textdecoration: ${(props: any) => (props.style ? "line-through" : "none")};
// `;

// const Button = styled.button`
// 	background: #ff0000;
// 	color: #fff;
// 	border: none;
// 	padding: 5px 10px;
// 	borderradius: 20%;
// 	cursor: pointer;
// 	float: right;
// `;

const TodoItem = (props: any) => {
	const { title, id } = props.todo;
	return (
		<div style={{ padding: "10px" }}>
			<input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
			<span>{title}</span>
			<button onClick={props.delTodo.bind(this, id)}>X</button>
		</div>
	);
};

export default TodoItem;
