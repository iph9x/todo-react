import React, { useState } from 'react';

const  CreateTaskForm = ({ inputValue, setInputValue, setTasks, tasks }) => {
    const [wobble, setWobble] = useState(0);
    const [wobblereject, setWobbleReject] = useState(0);
 

    const handleChange = (e) => {
        const currentValue = e.target.value;
        setInputValue(currentValue);
    }

    const addTask = (e) => {
        e.preventDefault();

        if (inputValue !== '') {
            const newArr = [...tasks, {name: inputValue, id: Math.floor(Math.random() * 100000), completed: false}];
            setTasks(newArr.sort((a, b) => b.completed - a.completed));

            setWobble(1);
            setInputValue('');
        } else {
            setWobbleReject(1);
        }
    }

    return (
        <form className="main__create-box">
            <input
                type="text"
                className="main__input"
                value={inputValue}
                onChange={handleChange}
                placeholder="Текст задачи..."
            />
            <button 
                className="btn-add btn"
                type="submit"
                onClick={addTask}
                onAnimationEnd={() => {
                    setWobble(0);
                    setWobbleReject(0);
                }}
                wobble={wobble}
                wobblereject={wobblereject}
            >
                Create
            </button>
        </form>
    );
}

export default CreateTaskForm;
