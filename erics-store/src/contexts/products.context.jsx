import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/product-store.utils.js";

export const ProductsContext = createContext({
    product_catalog: [],
    setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
    const [product_catalog, setProductCatalog] = useState([]);
    const value = { product_catalog, setProductCatalog};
    useEffect(() => {
        let loadData = async () => {
            let products = await getCategoriesAndDocuments();
            setProductCatalog(products);
        }
        loadData();
    }, []);
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}