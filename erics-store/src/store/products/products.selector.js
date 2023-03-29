export const selectProducts = state => state.products.product_catalog.reduce((acc, doc) => {
    const { title, items } = doc.data();
    acc[title.toLowerCase()] = items
    return acc;
}, {});