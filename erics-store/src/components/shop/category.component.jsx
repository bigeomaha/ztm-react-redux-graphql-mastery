import { useContext,useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context.jsx.old";
import ProductCard from "../product-card/product-card.component";
import './shop-drilldown.styles.scss';
import { selectProducts } from "../../store/products/products.selector.js";
import { useSelector } from "react-redux";

const CategoryView = () => {
    const {category} = useParams();
    const { product_catalog } = useSelector(selectProducts);
    const products = product_catalog[category];

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