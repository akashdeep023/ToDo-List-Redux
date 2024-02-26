import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddFrom() {
	const [task, setTask] = useState("");
	const dispatch = useDispatch();

	const submitHandler = (evt) => {
		evt.preventDefault();
		if (task.trim() == "") {
			console.log("input value empty")
		} else {
			console.log(task);
			dispatch(addTodo(task.trim()));
			setTask("");
		}
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button>Add Task</button>
			</form>
		</>
	);
}
