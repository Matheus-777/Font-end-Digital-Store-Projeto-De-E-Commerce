import LayoutHome from "../Layout";
import ProductListPage from "../ProductListPage";
import ProductList from "../ProductList";
const ListaProdutos = () => {
    return (
        <>
            <LayoutHome>
            <div className="ordenarpor">
                <p>Ordenar Por : mais relevantes</p>
                
                </div>  
                <section className="listagem">
                
                    <div className="form-selector">
                        <ProductListPage />
                    </div>
                    <div className="listagem-produtos">

                    <div className="produtos-layout">
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
                    </div>
                </section>
            </LayoutHome>
        </>
    );
}

export default ListaProdutos;