import './select.css'
import {ChangeEvent} from 'react'

interface TSelectProps  {
    options: { value: string; name: string }[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const Select = ({options,defaultValue, value, onChange}: TSelectProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value); 
      };

    return(
        <select
            className="sort-select"
            value={value}
            onChange={handleChange}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => {
                return (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
    
};

export default Select