import TasksListItem from "../tasks-list-item/tasks-list-item"

interface TDoneTasksList {
    data: {task: string, id: number, priority: boolean, done: boolean}[];
    onDone: (value: number) => void;
    remove: (task: {task: string, id: number, priority: boolean, done: boolean}) => void;
}

const DoneTasksList = ({data, onDone, remove}: TDoneTasksList) => {
    const elements = data.map(item => {
        if (item.done) {
            return (
                <TasksListItem
                    key={item.id}
                    onDone={() => onDone(item.id)}
                    remove={() => remove(item)}
                    {...item}/>
            )
        }
        return null
    });

    return (
        <>
            <h2 className="tasks-header">Выполненные задачи:</h2>
            <ul className="list-group tasks-list">
                {elements}
            </ul>
        </>
    )
}

export default DoneTasksList;