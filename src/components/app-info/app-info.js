import './app-info.css';



const AppInfo = ({countOfTasks, countOfDoneTasks}) => {

    return (
        <div className="app-info">
            <h1>ToDo List</h1>
            <h2>Задач на сегодня: {countOfTasks}</h2>
            <h2>Выполнено задач: {countOfDoneTasks}</h2>
        </div>
    );
}

export default AppInfo;