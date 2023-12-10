import {useState} from 'react'

import './date-picker.css'

const DatePicker = () => {
    const [date, setDate] = useState(new Date())

    const day = date.getDay();

    return (
        <div>
            {day}
        </div>
    )
}

export default DatePicker;