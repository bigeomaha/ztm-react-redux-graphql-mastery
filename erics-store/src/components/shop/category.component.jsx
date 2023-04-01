import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import './shop-drilldown.styles.scss';
import { selectProducts, selectProductsIsLoading } from "../../store/products/products.selector.js";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";

const CategoryView = () => {
    const {category} = useParams();
    const product_catalog = useSelector(selectProducts);
    const products = product_catalog[category];
    const isLoading = useSelector(selectProductsIsLoading);

    if (isLoading) {
        return <Spinner />
    }
    else {
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

}

export default CategoryView;