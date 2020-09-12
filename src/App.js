import React, { useState, useEffect } from 'react';

import './assets/scss/main.scss';
import CreateTaskForm from './compontents/CreateTaskForm/CreateTaskForm';
import TasksList from './compontents/TasksList/TasksList';

const  App = () => {
	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState([]);

	const getLocalTasks = () => {	
		if (localStorage.getItem("tasks") === null) {
			localStorage.setItem("tasks", JSON.stringify([]));
		} else {
			const localTasks = JSON.parse(localStorage.getItem("tasks"));
			setTasks(localTasks);
		}
	};

	useEffect(() => {
		getLocalTasks();
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
	

	return (
		<div className="App">
			<div className="main">
				<h1 className="main__title">
					To Do
				</h1>
				<CreateTaskForm
					inputValue={inputValue}
					setInputValue={setInputValue}
					setTasks={setTasks}
					tasks={tasks} 
				/>
				<TasksList
					tasks={tasks}
					setTasks={setTasks}
				/>
			</div>
		</div>
	);
}

export default App;
