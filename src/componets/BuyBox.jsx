import stars from "../../../projeto geracao tech/projeto-digital-store/assets/Stars.svg";
import starsfull from "../../projeto-digital-store/assets/fullstars.svg";
import FullStars from "../componets/coleções/Fullstars";
import Stars from "../componets/coleções/Stars";

const BuyBox = () => {
    return (
        <>

            <section className="options">
                <h3>Tênis Nike Revolution
                    6 Next Nature Masculino</h3>
                <p>Casual | Nike | REF:38416711</p>
            </section>
            <div className="container-stars">
                <Stars source={stars} />  
                <FullStars source={starsfull} />
                <p>
                    (90 Avaliações)
                </p>
                </div>
              <div className="valores-price">
                <div>
                R$
                </div>
                <p className="Discountprice">219,00</p>
                <p className="price">R$219,00</p>
              </div>

              <div className="DescriptionProduct">
                <p className="ProdutoDescriçao">Descrição do produto</p>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            <div className="Tamanhos-Container">
                <div className="Tamanhos">
                  Tamanhos 
                </div>
                <div className="Box-Tamanhos">
                  <p>39</p>
                  <p>40</p>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                </div>
            </div>
            <div className="Tamanhos-Color">
              <p className="Tamanhos">
                Tamanhos
              </p>
              <div className="Box-Color">
                  <div className="blue"></div>
                  <div className="red"></div>
                  <div className="black"></div>
                  <div className="purple"></div>
              </div>
            </div>
                <button className="Button-Comprar">
                 <p>COMPRAR</p>   
                </button>
        </>
    )


}
export default BuyBox;