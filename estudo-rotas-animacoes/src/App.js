import Contato from "./Components/Contato";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import styles from './Components/Global.module.css'
import Produto from "./Components/Produto";

function App() {
  return (
    <BrowserRouter>
   
    <Header />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='contato' element={<Contato />} />
        <Route path='produto/:id' element={<Produto />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
