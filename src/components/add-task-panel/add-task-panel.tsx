import { useState, useEffect } from 'react';

import './add-task-panel.css'

interface TAddTaskPanel {
    addTask: (task: { task: string; id: number; priority: boolean, done: boolean }) => void; 
}

const AddTaskPanel = ({addTask}: TAddTaskPanel) => {
    const [task, setTask] = useState(() => {
        const saved = localStorage.getItem('task');
        const initialValue = JSON.parse(saved as string);
        return initialValue || ''
    });

    const [id, setId] = useState(() => {
        const savedId = localStorage.getItem('id');
        const initialId = JSON.parse(savedId as string);
        return initialId || 1
    })



    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task));
        localStorage.setItem('id', JSON.stringify(id));
    }, [task, id])

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTask(e.target.value);
    }

    const addNewTask = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(task) {
            const newTask = {
                task,
                id,
                priority: false,
                done: false,
            }
            setId(id + 1)
            addTask(newTask)
            setTask('')
        }
    }

    return (
        <form
            className="add-task d-flex"
            onSubmit={addNewTask}>
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