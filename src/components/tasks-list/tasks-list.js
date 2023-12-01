import TasksListItem from "../tasks-list-item/tasks-list-item";

import './tasks-list.css'

const TasksList = ({data, onDone, remove, addPriority, pickedSort}) => {

    if (pickedSort && pickedSort === 'priority') {
        data = data.sort((a, b) => b.priority - a.priority)
    }

    if (pickedSort && pickedSort === 'date') {
        data = data.sort((a, b) => a.id - b.id)
    }


    let elements = 
        data.length === data.filter(task => task.done).length && data.length
        ? 
        <div className="tasks-information">Ура, все задачи сегодня выполнены</div>
        : 
        data.length
        ?
        data.map(item => {
            if (!item.done) {
                return (
                    <TasksListItem 
                        key={item.id}
                        onDone={() => onDone(item.id)}
                        remove={() => remove(item)}
                        addPriority={() => addPriority(item)}
                        {...item}/>
                )
            }
            return null
        })
        :
        <div className="tasks-information">На сегодня задач нет</div>

    return (
        <>
            <h2 className="tasks-header">Невыполненные задачи:</h2>
            <ul className="list-group tasks-list">
                {elements}
            </ul>
        </>
        
    )
}

export default TasksList;