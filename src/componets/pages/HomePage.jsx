import LayoutHome from "../Layout";
import ImagemLayout from "../../../projeto-digital-store/assets/imglayout.svg";
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconeCamisa from "../coleções/Camisa";
import CamisaIcon from "../../../projeto-digital-store/assets/camisa.svg.svg";
import IconeTenis from "../coleções/Tenis";
import TenisIcon from "../../../projeto-digital-store/assets/Tenis.svg";
import IconeHeadset from "../coleções/Headset";
import HeadsetIcon from "../../../projeto-digital-store/assets/Headset.svg";
import IconeCamiseta from "../coleções/IconeCamisa";
import CamisetaIcon from "../../../projeto-digital-store/assets/camiseta.svg.svg";
import IconeCalca from "../coleções/IconeCalca";
import CalcaIcon from "../../../projeto-digital-store/assets/calca.svg.svg";
import IconHeadset from "../coleções/IconeFone";
import FoneIcon from "../../../projeto-digital-store/assets/fones.svg.svg";
import IconTenis from "../coleções/IconTenis";
import TenisIcone from "../../../projeto-digital-store/assets/tênis.svg.svg";
import ImgTenis from "../../componets/coleções/ImgTenis";
import TenisImg from "../../../projeto-digital-store/assets/Laye 1.svg";
import ProductList from "../ProductList";

const HomePage = () => {

   const data = [
      { id: '1', Image: ImagemLayout },
      { id: '2', Image: ImagemLayout },
      { id: '3', Image: ImagemLayout },

   ]

   return (
      <>

         <LayoutHome>
            <section className="slider">
               <div className="carrossel">
                  <Swiper
                     slidesPerView={1}
                     pagination={{ clickable: true }}
                     navigation
                     className="SwiperHome"
                  >
                     {data.map((item) => (
                        <SwiperSlide key={item.id}>
                           <img src={item.Image}
                              alt="Promoção"
                              className="slider-item"

                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="conteudo">
                     <p>
                        Melhores Ofertas Personalizadas
                     </p>
                     <h1>
                        Queima De Estoque Nike 🔥
                     </h1>
                     <p className="lorem">
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                     </p>
                     <button className="buttonofertas">Ver Ofertas</button>
                  </div>
               </div>

            </section>
            <section className="colecoes">

               <h3 className="titulo-coleçoes">
                  Coleções em destaque
               </h3>

               <section className="container-colecoes">

                  <section className="box-1">
                     <div className="div-box">
                        <p>
                           30% OFF
                        </p>
                        <h3>
                           Novo drop
                           Supreme
                        </h3>
                        <button>Comprar</button>
                     </div>
                     <div className="imgens-colecoes">
                        <IconeCamisa source={CamisaIcon} />
                     </div>
                  </section>

                  <section className="box-2">
                     <div className="div-box-2">
                        <p>30% OFF</p>
                        <h3>Coleção
                           Adidas
                        </h3>
                        <button>Comprar</button>
                     </div>

                     <div className="imgens-colecoes-2">
                        <IconeTenis source={TenisIcon} />
                     </div>
                  </section>

                  <section className="box-3">
                     <div className="div-box-3">
                        <p>30% OFF</p>
                        <h3>Novo
                           Beats Bass
                        </h3>
                        <button>Comprar</button>
                     </div>
                     <div className="imagens-colecoes-3">
                        <IconeHeadset source={HeadsetIcon} />
                     </div>
                  </section>

               </section>


            </section>
            <div className="titulo-h3">
               <h3>Coleções em destaque</h3>
            </div>
            <section className="box-icone">
               <div className="icones">
                  <IconeCamiseta source={CamisetaIcon} />

               </div>

               <div className="icones">
                  <IconeCalca source={CalcaIcon} />

               </div>
               <div className="icones">
                  <IconeCalca source={CalcaIcon} />

               </div>
               <div className="icones">
                  <IconHeadset source={FoneIcon} />

               </div>
               <div className="icones">
                  <IconTenis source={TenisIcone} />

               </div>

            </section>
            <section className="box-icone-2">
               <h5>Camisetas</h5>
               <h5>Calças</h5>
               <h5>Bonés</h5>
               <h5>Headset</h5>
               <h5>Tênis</h5>
            </section>
            <div className="titulo-h3-2">
               <h3>Produtos em alta</h3>
               <a href="/ListaProdutos">Ver Todos →</a>
            </div>
            <section className="bloco-produtos">
            </section>

            <div className="produtos-layout">
               <ProductList Products={[

                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },

                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },

                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },
                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },
                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },
                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },
                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  },
                  {
                     image: '<TenisCard />',
                     name: 'K-Swiss V8 - Masculino',
                     price: '$200',
                     priceDiscount: '$100'
                  }

               ]}
               />
            </div>

            <section className="Box-4">

               <div className="tenis">
                  <ImgTenis source={TenisImg} />
               </div>


               <div className="ConteudoDescricao">
                  <div>
                     <p className="OfertaDescricao">
                        Oferta Especial
                     </p>
                  </div>
                  <div className="h2Descricao">
                     <h2>Air Jordan edição de
                        colecionador
                     </h2>
                  </div>
                  <div>
                     <p className="LoremDEscricao">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     </p>
                  </div>
                  <div className="ButtonDescricao">
                     <button>Ver Oferta</button>
                  </div>

               </div>
            </section>
         </LayoutHome>
      </>
   );
}

export default HomePage;