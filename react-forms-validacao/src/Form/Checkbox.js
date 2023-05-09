import React from 'react'

const Checkbox = ({options, value, setValue, ...props}) => {
    function handleChange ({target}) {
        if (target.checked) {
            setValue([...value, target.value])
            console.log(value)
        } else {
            setValue(value.filter(item => item !== target.value))
            console.log(value)
        }
    }
  
    return (
    <div>
        {options.map((option) => (
            <label key={option}>
            <input 
                type="checkbox" 
                value={option}
                checked={value.includes(option)}
                onChange={handleChange}
            />
            {option}
           </label>
        ))}
        
    </div>
  )
}

export default Checkbox