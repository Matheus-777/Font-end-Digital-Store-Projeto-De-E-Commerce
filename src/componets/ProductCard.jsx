import TenisCard from "../componets/coleções/TenisCard";
import CardTenis from "../../projeto-digital-store/assets/TênisCard.svg";





const ProductCard = ({ name, price, priceDiscount }) => {


    return (
        <>
            <a href="/ViewPage/:id">
                <section className="Card">
                    <div className="produtos-layout">
                        <div className="Card-img">
                            <p>30% OFF</p>
                            <TenisCard source={CardTenis} />
                        </div>

                        <div className="DescricaoCard">
                            <p className="tenis">Tênis</p>
                            <p className="name">{name}</p>

                            <div className="valores">
                                <p className="price">{price}</p>
                                <p className="priceDiscount">{priceDiscount}</p>

                            </div>
                        </div>
                    </div>


                </section>
            </a>



        </>
    );
}

export default ProductCard;