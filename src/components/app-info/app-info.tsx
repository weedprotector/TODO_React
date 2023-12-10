import './app-info.css';
import { useEffect, useState } from 'react';

interface TAppInfo {
    countOfTasks: number;
    countOfDoneTasks: number;
}

const AppInfo = ({countOfTasks, countOfDoneTasks}: TAppInfo) => {


    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date(); 
            setDate(currentDate); 
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds();

    const clock = `${hours}:${minutes}:${seconds}`

    return (
        <div className="app-info">
            <div className="app-info__counter">
                <h2>Задач на сегодня: {countOfTasks}</h2>
                <h2>Выполнено задач: {countOfDoneTasks}</h2>
            </div>
            
            <h2>{clock}</h2>
        </div>
    );
}

export default AppInfo;