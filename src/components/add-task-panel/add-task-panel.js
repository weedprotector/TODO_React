import { useState, useEffect } from 'react';

import './add-task-panel.css'

const AddTaskPanel = ({addTask}) => {
    const [task, setTask] = useState(() => {
        const saved = localStorage.getItem('task');
        const initialValue = JSON.parse(saved);
        return initialValue || ''
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task))
    }, [task])

    const onValueChange = (e) => {
        e.preventDefault();
        setTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask('');
    }

    return (
        <form
            className="add-task d-flex"
            onSubmit={onSubmit}>
            <input type="text"
                className="form-control add-task-input"
                placeholder="Добавьте задачу"
                name="task"
                value={task}
                onChange={onValueChange}/>

            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
        </form>
    );
}

export default AddTaskPanel;