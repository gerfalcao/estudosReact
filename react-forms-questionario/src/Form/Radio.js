import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {
    console.log(active)

    if (active === false) return null
  return (
    <fieldset style={{padding: '2rem'}}>
        <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
        {options.map((opcao) => (
            <label key={opcao}>
                <input 
                    type="radio" 
                    checked={value === opcao} 
                    value={opcao} 
                    onChange={onChange} 
                    id={id}
                />
                {opcao}
            </label>
        ))}
    </fieldset>
  )
}

export default Radio