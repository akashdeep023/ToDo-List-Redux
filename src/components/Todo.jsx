import { useDispatch, useSelector } from "react-redux";
import AddFrom from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
	const todos = useSelector((state) => state.todos);
	console.log(todos);

	const dispatch = useDispatch();

	const taskDelete = (id) => {
		console.log("delete ", id);
		dispatch(deleteTodo(id));
	};
	const taskDone = (id) => {
		console.log("done ", id);
		dispatch(markAsDone(id));
    };

    let doneStyle = {
        textDecorationLine: "line-through",
        backgroundColor: "white",
        color: "black",
      };

	return (
		<>
			<AddFrom />
			<h2>Todo List App</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.isDone ? (
							<span style={doneStyle}>{todo.task}</span>
						) : (
							<span>{todo.task}</span>
						)}&nbsp;&nbsp;
						<button onClick={() => taskDelete(todo.id)}>
							Delete
						</button>
						&nbsp;&nbsp;
						<button onClick={() => taskDone(todo.id)}>Done</button>
						<br />
						<br />
					</li>
				))}
			</ul>
		</>
	);
}
