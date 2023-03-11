import { createContext, useState } from "react";

import PRODUCTS from '../data/shop-data.json';

export const ProductContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    // eslint-disable-next-line
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    return (
        <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )
}