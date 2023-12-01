import './select.css'

const Select = ({options,defaultValue, value, onChange}) => {
    return(
        <select
            className="sort-select"
            value={value}
            onChange={e => onChange(e.target.value)}>
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