import ProductCard from "./ProductCard";

const ProductList = ({Products}) => {
    return ( 
        <>
        {Products.map((Product, index ) => (
        <ProductCard 
        image={Product.image}
        name={Product.name}
        price={Product.price}
        priceDiscount={Product.priceDiscount}
        key={index}
        />
        ))}
         </>
     );
}
 
export default ProductList;