
import {NavLink} from "react-router-dom";
import Logoheader from "../../projeto-digital-store/assets/logo-header.svg";
import Carrinhoheader from "../../projeto-digital-store/assets/mini-cart.svg"
import Lupaheader from "../../projeto-digital-store/assets/Search.svg";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import Lupa from "./Lupa";


const Header = () => {
  return (

<div className="styleheader-container">
<div className="blocoheader">
<div>
  <Logo className="logo" source={Logoheader} />
</div>


<form id="search-container">
  <input className="InputPesquisa" type="search" placeholder="Pesquisar Produtos..." />
  <button id="SearchButton" type="submit" > <Lupa source={Lupaheader} /></button>
</form>




<div id="links-container">
  <div id="links">
    <a href="" className="cadastro"><span>Cadastre-se</span></a>
    <a href="" className="buttonentrar2"> <button className="ButtonEntrar">Entrar</button></a>
  </div>

</div>

<div id="carrinho">
  <Carrinho className="carrinho" source={Carrinhoheader} />
</div>
</div>

<section>
  
  <nav>
    <ul className="Navlink">
      <li className="list">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="list">
        <NavLink to="/ListaProdutos">Produtos</NavLink>
      </li>
      <li className="list">
        <NavLink to="/Categoria">Categorias</NavLink>
      </li>
      <li className="list">
        <NavLink to="/MeusPedidos">Meus Pedidos</NavLink>
      </li>
    </ul>
  </nav>
</section>


</div>
);
}

export default Header;