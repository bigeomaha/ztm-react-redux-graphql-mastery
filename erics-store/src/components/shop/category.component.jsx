import { useContext,useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import './shop-drilldown.styles.scss';

const CategoryView = () => {
    const {category} = useParams();
    const { product_catalog } = useContext(ProductsContext);
    const [products, setProducts] = useState(product_catalog[category]);

    useEffect(() => {
        setProducts(product_catalog[category]);
    }, [category, product_catalog])

    return (
        <div className='category-details-container' key={category}>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className="preview">
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryView;