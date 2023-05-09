import React from 'react'

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.


const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Formulario = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({target}) {
    const {checked, value} = target
    if (checked) {
    setCores([...cores, value])
  
    } else {
      setCores(cores.filter(cor => cor !== value))
    }
  }
  function handleChecked(cor) {
    return cores.includes(cor)
  }

  return (
<form>
  
    {coresArray.map((cor) => (
    <label key={cor}>
    <input 
      type='checkbox' 
      id={cor} 
      value={cor} 
      checked={handleChecked(cor)}
      onChange={handleChange}/>
    {cor}
    </label>
    ))}
    <ul>
    {cores.map((cor) => (
      <li key={cor}>{cor}</li>
    ))}
    </ul>
</form>
  );
};


export default Formulario