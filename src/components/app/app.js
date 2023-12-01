import { useState, useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import AddTaskPanel from '../add-task-panel/add-task-panel';
import TasksList from '../tasks-list/tasks-list';
import DoneTasksList from '../done-tasks-list/done-tasks-list';
import Select from '../select/select';

import './app.css'


function App() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('data');
        const initialValue = JSON.parse(saved);
        return initialValue || []
    });

    const [pickedSort, setPickedSort] = useState('')
    

    const countOfTasks = data.filter(item => !item.done).length;
    const countOfDoneTasks =  data.filter(item => item.done).length;

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const addTask = (newTask) => {
        setData([...data, newTask])
    }

    const removeTask = (task) => {
        setData([...data].filter(item => item.id !== task.id))
    }

    const addPriority = (task) => {
        console.log(`Добавили для ${task} приоритет`)
        setData(data.map(item => {
            if (item.id === task.id) {
                return {...item, priority: !item.priority}
            }
            return item
        }));
    }

    const onDone = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                return {...item, done: !item.done}
            }
            return(item)
        }))
    }

    const changeSort = (sort) => {
        setPickedSort(sort);
    }

    return (
        <div className="app">
            <AppInfo 
                countOfTasks={countOfTasks}
                countOfDoneTasks={countOfDoneTasks}/>
            <AddTaskPanel 
                addTask={addTask}/>
            <Select
                options={[{value: 'priority', name: 'По важности'},
                        {value: 'date', name: 'По дате добавления'}]}
                defaultValue='Сортировка по:'
                value={pickedSort}
                onChange={changeSort}/>
            <TasksList 
                data={data}
                onDone={onDone}
                remove={removeTask}
                addPriority={addPriority}
                pickedSort={pickedSort}/>
            <DoneTasksList 
                data={data}
                onDone={onDone}
                remove={removeTask}/>
        </div>
    );
}

export default App;