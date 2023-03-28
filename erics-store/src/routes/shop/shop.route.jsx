import './shop.styles.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils/product-store.utils';
import {useDispatch} from 'react-redux'
import CategoriesView from '../../components/shop/categories.component';
import CategoryView from '../../components/shop/category.component';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let loadData = async () => {
            let initial_products = await getCategoriesAndDocuments();
            dispatch({ type: "SET_PRODUCTS", payload: initial_products });
        }
        loadData();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesView />} />
            <Route path=":category" element={<CategoryView />} />
        </Routes>
    )

}

export default Shop;


