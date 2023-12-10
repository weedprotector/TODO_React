import { useState, useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import DatePicker from '../date-picker/date-picker'
import AddTaskPanel from '../add-task-panel/add-task-panel';
import TasksList from '../tasks-list/tasks-list';
import DoneTasksList from '../done-tasks-list/done-tasks-list';
import Select from '../select/select';

import './app.css'

interface Task {
    id: number;
    done: boolean;
    priority: boolean;
    task: string;
}

function App() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('data') || '';
        const initialValue = JSON.parse(saved);
        return initialValue || []
    });

    const [pickedSort, setPickedSort] = useState('')

    

    const countOfTasks = data.filter((item: Task) => !item.done).length;
    const countOfDoneTasks =  data.filter((item: Task) => item.done).length;

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const addTask = (newTask: Task) => {
        setData([...data, newTask])
    }

    const removeTask = (task: Task) => {
        setData([...data].filter(item => item.id !== task.id))
    }

    const addPriority = (task: Task) => {
        setData(data.map((item: Task) => {
            if (item.id === task.id) {
                return {...item, priority: !item.priority}
            }
            return item
        }));
    }

    const onDone = (id: number) => {
        setData(data.map((item: Task) => {
            if (item.id === id) {
                return {...item, done: !item.done}
            }
            return(item)
        }))
    }

    const changeSort = (sort: string) => {
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
                options={[{'value': 'priority', 'name': 'По важности'},
                        {'value': 'date', 'name': 'По дате добавления'}]}
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