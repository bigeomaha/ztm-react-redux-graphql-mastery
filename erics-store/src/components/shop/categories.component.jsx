import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import './shop-drilldown.styles.scss';
import { selectProducts } from "../../store/products/products.selector.js";
import { useSelector } from "react-redux";

const CategoriesView = () => {
    const {product_catalog} = useSelector(selectProducts);
    return (
        Object.keys(product_catalog).map((category_title) => (
            <div className='category-preview-container' key={category_title}>
                <h2 className='title'>
                    <Link to={`/shop/${category_title}`}>{category_title.toUpperCase()}</Link>
                </h2>
                <div className="preview">
                    {product_catalog[category_title].map((product, i) => {
                        // Only show 4 products per category
                        if (i < 4) {
                            return <ProductCard key={product.id} product={product} />
                        }
                        else {
                            return null;
                        }
                    })}
                </div>
            </div>
        ))
    )
}

export default CategoriesView;