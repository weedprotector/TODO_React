import './tasks-list-item.css'


const TasksListItem = ({task, done, onDone, remove, data}) => {
    let clazz = 'list-group-item-label';
    let icon = 'fa-solid fa-check';
    if (done) {
        clazz += ' done';
        icon = 'fa-solid fa-rotate-left';
    }


    return (
            <li className="list-group-item d-flex justify-content-between tasks-list-item">
                <span className={clazz}>{task}</span>
                <div className="btns">
                    <button
                        type='button'
                        className='btn-sm'
                        onClick={remove}>
                            <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                        type='button'
                        className='btn-sm'
                        onClick={onDone}>
                            <i className={icon}></i>
                    </button>
                </div>
            </li>
            
    )
}

export default TasksListItem;