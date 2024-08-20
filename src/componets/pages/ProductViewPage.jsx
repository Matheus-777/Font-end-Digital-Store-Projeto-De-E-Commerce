import LayoutHome from "../Layout";
import Gallery from "../Gallery";
import ImagemGallery1 from "../../../projeto-digital-store/assets/ImgGallery/product-page-slide-1.svg";
import ImagemGallery2 from "../../../projeto-digital-store/assets/ImgGallery/product-page-slide-2.svg";
import ImagemGallery3 from "../../../projeto-digital-store/assets/ImgGallery/product-page-slide-3.svg";
import ImagemGallery4 from "../../../projeto-digital-store/assets/ImgGallery/product-page-slide-4.svg";
import ImagemGallery5 from "../../../projeto-digital-store/assets/ImgGallery/product-page-slide-5.svg";
import ProductList from "../ProductList";
import BuyBox from "../BuyBox";

const ProductViewPage = () => {
     return (
          <>
               <LayoutHome>
                    <section className="ViewPage">
                         <section className="Productshowthumbs">

                              <Gallery showThumbs image={[

                                   {
                                        src: ImagemGallery1

                                   },
                                   {
                                        src: ImagemGallery2
                                   },
                                   {
                                        src: ImagemGallery3
                                   },
                                   {
                                        src: ImagemGallery4
                                   },
                                   {
                                        src: ImagemGallery5
                                   },

                              ]} />

                         </section>

                         <section className="Descricaooptions">
                              <BuyBox />
                         </section>

                    </section>

                    <div className="titulo-h3-3">
                         <h3>Produtos em alta</h3>
                         <a href="/ListaProdutos">Ver Todos →</a>
                    </div>
                    <div className="Products-View-page">
                         <ProductList Products={[
                              {
                                   image: '',
                                   name: 'K-Swiss V8 - Masculino',
                                   price: '$200',
                                   priceDiscount: '$100'
                              },

                              {
                                   image: '',
                                   name: 'K-Swiss V8 - Masculino',
                                   price: '$200',
                                   priceDiscount: '$100'
                              },

                              {
                                   image: '',
                                   name: 'K-Swiss V8 - Masculino',
                                   price: '$200',
                                   priceDiscount: '$100'
                              },
                              {
                                   image: '',
                                   name: 'K-Swiss V8 - Masculino',
                                   price: '$200',
                                   priceDiscount: '$100'
                              }
                         ]}
                         />
                    </div>



               </LayoutHome>
          </>
     );
}
export default ProductViewPage;