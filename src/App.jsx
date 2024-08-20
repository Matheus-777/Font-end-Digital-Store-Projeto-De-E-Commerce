import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './componets/pages/HomePage.jsx'
import ListaProdutos from "./componets/pages/ListaProdutos.jsx";
import Categoria from "./componets/pages/Categoria.jsx";
import MeusPedidos from "./componets/pages/MeusPedidos.jsx";
import ProductViewPage from "./componets/pages/ProductViewPage.jsx";
const App = () => {
  return ( 
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ViewPage/:id" element={<ProductViewPage />} />
          <Route path="/ListaProdutos" element={<ListaProdutos />} />
          <Route path="/Categoria" element={<Categoria />} />
          <Route path="/MeusPedidos" element={<MeusPedidos />} />
        </Routes>
    </BrowserRouter>
    </>
   );
}
 
 export default App;