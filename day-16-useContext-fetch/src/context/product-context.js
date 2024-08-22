import {createContext, useEffect, useState} from "react"
import useFetch from "../hooks/useFetch";
import {getProducts} from "../service/products-service";
// Context
export const ProductContext = createContext();

// Provider
export default function ProductContextProvider({children}){
    const [products, setProducts] = useState([]);
    // Thêm sửa xóa
    // Nên extend thằng useState -> useReducer
    // bản chất: chỉ gọi 1 api để fetch data -> lấy về cho products
    const { isLoading, data, message, error } = useFetch(getProducts, []);

    useEffect(() => {
        setProducts(data);
    }, [data])

    // List products 
    // Lấy thông qua api

    // products: mảng product
    const value = {
        products: products
    };

    // Truyền global state vào
    return <ProductContext.Provider value={value}>
        {!isLoading && <div>Is loading</div>}
        {message && <div>{message}</div>}
        {error && <div>{error}</div>}

        {children}
    </ProductContext.Provider>
}