import './shop.styles.scss';
import { Routes, Route } from 'react-router-dom';
import CategoriesView from '../../components/shop/categories.component';
import CategoryView from '../../components/shop/category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesView />} />
            <Route path=":category" element={<CategoryView />} />
        </Routes>
    )

}

export default Shop;


