import './shop.styles.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import CategoriesView from '../../components/shop/categories.component';
import CategoryView from '../../components/shop/category.component';
import { fetchProductCatalogStart } from '../../store/products/products.actions';


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductCatalogStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesView />} />
            <Route path=":category" element={<CategoryView />} />
        </Routes>
    )

}

export default Shop;


