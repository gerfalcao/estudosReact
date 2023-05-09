import React from 'react'
import Formulario from "./Form";
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';


function App() {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [radio, setRadio] = React.useState('azul')
  const [skills, setSkills] = React.useState([])

  return (
    <div>
      <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>
      <Input id="email" label="Email" value={email} setValue={setEmail}/>      
      <Select 
        options={['notebook', 'smartphone']} 
        value={produto} 
        setValue={setProduto} />
      <Radio 
        options={['azul', 'amarelo', 'melancia', 10]} 
        value={radio} 
        setValue={setRadio} 
      />
      <Checkbox
        options={['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'PHP']}
        value={skills}
        setValue={setSkills}
      />
      <button>Enviar</button>
      </form>
      <Formulario />
    </div>
  );
}

export default App;
