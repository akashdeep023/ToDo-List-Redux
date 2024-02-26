// Reduser-----------------
import { createSlice, nanoid } from "@reduxjs/toolkit"; //import createSlice and nanoid -> just like uuid

const initialState = {
	// initialize Todo------
	todos: [{ id: "abc", task: "demo_task", isDone: false }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	// create reducers----------
	reducers: {
		//state,action
		addTodo: (state, action) => {
			const newTodo = {
				id: nanoid(),
				task: action.payload,
				isDone: false,
			};
			state.todos.push(newTodo); //direct mutation in redux toolkit
		},
		deleteTodo: (state, action) => {
			// action.payload
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		markAsDone: (state, action) => {
			// action.payload
            state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isDone = true;
				}
			});
		},
	},
});

// Action creators are generated for each case reducer function--------
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
