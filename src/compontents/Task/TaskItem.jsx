import React from 'react';

const  TaskItem = ({ taskName, id, completed, tasks, setTasks }) => {
    const completeHandler = () => {
        const changedTasks = tasks.map(task => {
            if (task.id === id) {
                return ({ ...task, completed: !completed })
            }
            return task;
        });

        const currentTasks = changedTasks.filter(task => !task.completed);
        const completedTasks = changedTasks.filter(task => task.completed).reverse();

        setTasks(currentTasks.concat(completedTasks));
    }

    const deleteHandler = () => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
  
    return (
        <li 
            className={!completed ? "tasks-list__item" : "tasks-list__item tasks-list__item_completed"}
        >
            <span className="tasks-list__task">{taskName}</span>
            <button type="button" onClick={completeHandler} className={!completed ? "btn-done btn" : "btn-incompleted btn"}>
                D
            </button>      
            <button className="btn-remove btn" type="button" onClick={deleteHandler}>D</button>
        </li>
    );
}

export default TaskItem;
