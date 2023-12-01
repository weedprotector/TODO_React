import TasksListItem from "../tasks-list-item/tasks-list-item";

const DoneTasksList = ({data, onDone, remove}) => {
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