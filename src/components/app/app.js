import { useState, useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import AddTaskPanel from '../add-task-panel/add-task-panel';
import TasksList from '../tasks-list/tasks-list';
import DoneTasksList from '../done-tasks-list/done-tasks-list';

import './app.css'

function App() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('data');
        const initialValue = JSON.parse(saved);
        return initialValue || []
    });

    const [id, setId] = useState(() => {
        const savedId = localStorage.getItem('id');
        const initialId = JSON.parse(savedId);
        return initialId || 1
    })

    const countOfTasks = data.filter(item => !item.done).length;
    const countOfDoneTasks =  data.filter(item => item.done).length;

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
        localStorage.setItem('id', JSON.stringify(id))
    }, [data, id])

    const addTask = (task) => {
        if (task) {
            const newTask = {
                task,
                id: id
            }
            setId(id + 1)
            setData([newTask, ...data]);
        }
    }

    const removeTask = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const onDone = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                return {...item, done: !item.done}
            }
            return(item)
        }))
    }

    return (
        <div className="app">
            <AppInfo 
                countOfTasks={countOfTasks}
                countOfDoneTasks={countOfDoneTasks}/>
            <AddTaskPanel 
                addTask={addTask}/>
            <TasksList 
                data={data} 
                onDone={onDone}
                remove={removeTask}/>
            <DoneTasksList 
                data={data}
                onDone={onDone}/>
        </div>
    );
}

export default App;