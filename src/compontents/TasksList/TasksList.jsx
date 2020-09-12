import React from 'react';

import TaskItem from '../Task/TaskItem';

const  TasksList = ({ tasks, setTasks }) => {
	const tasksArr = [...tasks]
		.reverse()
		.sort((x, y) => x.completed - y.completed)
		.map((task) => (
		<TaskItem 
			taskName={task.name}
			key={task.id}
			id={task.id}
			completed={task.completed}
			tasks={tasks}
			setTasks={setTasks}
		/>
		));

	return (
		<ul className="tasks-list">
			{tasksArr}
		</ul>
	);
}

export default TasksList;
