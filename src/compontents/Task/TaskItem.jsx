import React, { useState } from 'react';

const  TaskItem = ({ taskName, id, completed, tasks, setTasks }) => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(taskName);

    const changeHandler = (e) => {
        const currentValue = e.target.value;
        setValue(currentValue);
    }

    const blurHandler = () => {
        const changedTasks = tasks.map(task => {
            if (task.id === id) {
                return ({ ...task, name: value })
            }
            return task;
        });

        setTasks(changedTasks.sort((a, b) => b.completed - a.completed));
        setEditMode(false);
    }

    const completeHandler = () => {
        const changedTasks = tasks.map(task => {
            if (task.id === id) {
                return ({ ...task, completed: !completed })
            }
            return task;
        });

        setTasks(changedTasks.sort((a, b) => b.completed - a.completed));
    }

    const deleteHandler = () => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
  
    return (
        <li className="tasks-list__item">
            <button type="button" onClick={completeHandler} className={!completed ? "btn-done btn" : "btn-incompleted btn"}>
                D
            </button>
            {!editMode
                ? <span onClick={() => setEditMode(true)} className={!completed ? "tasks-list__task" :"tasks-list__task tasks-list__task_completed" }>{taskName}</span>
                : <input 
                autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                autoFocus={true} onBlur={blurHandler} onChange={changeHandler} 
                className="tasks-list__task tasks-list__edit" value={value} />
            }   
            <button className="btn-remove btn" type="button" onClick={deleteHandler}>D</button>
        </li>
    );
}

export default TaskItem;
