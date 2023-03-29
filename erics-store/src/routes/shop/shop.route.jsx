import './shop.styles.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils/product-store.utils';
import {useDispatch} from 'react-redux'
import CategoriesView from '../../components/shop/categories.component';
import CategoryView from '../../components/shop/category.component';
import { setProductCatalog } from '../../store/products/products.actions';


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            const initial_products = await getCategoriesAndDocuments();
            dispatch(setProductCatalog(initial_products));
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


