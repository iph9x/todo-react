import React from 'react';

import TaskItem from '../Task/TaskItem';

const  TasksList = ({ tasks, setTasks }) => {
	const tasksArr = [...tasks]
		.reverse()
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
