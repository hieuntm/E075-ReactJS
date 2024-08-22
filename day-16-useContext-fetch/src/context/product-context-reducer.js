import {createContext, useEffect, useReducer} from "react"
import useFetch from "../hooks/useFetch";
import {getProducts} from "../service/products-service";
// Context
export const ProductContext = createContext({
    products: [],
    addProduct: () => {}, // function
    editProdcut: () => {} // function
});

const callbackFunction = (currentState, payload) => {
    if(payload.action === "GET_DATA_FROM_API"){
        console.log(payload)
        return [...payload.data];
    }
    if(payload.action === "ADD_NEW_PRODUCT"){
        // return [...payload.data];
    }
    if(payload.action === "EDIT_PRODUCT"){
        // return [...payload.data];
    }
    return currentState;
}

// Provider
export default function ProductContextProvider({children}){
    // 1. Kiểm tra trạng thái của state hiện tại
    // 2. Payload: Mang theo dữ liệu và action cần thực hiện
    const [products, dispatch] = useReducer(callbackFunction, []);
    // Thêm sửa xóa
    // Nên extend thằng useState -> useReducer
    // bản chất: chỉ gọi 1 api để fetch data -> lấy về cho products
    const { isLoading, data, message, error } = useFetch(getProducts, []);

    useEffect(() => {
        dispatch({action: "GET_DATA_FROM_API", data: data});
    }, [products])

    const addProduct = (product) => {
        dispatch({action: "ADD_NEW_PRODUCT", data: product});
    }

    const editProduct = (id, product) => {
        dispatch({action: "EDIT_PRODUCT", data: {id: id, product: product}});
    }

    // List products 
    // Lấy thông qua api

    // products: mảng product
    const value = {
        products: products, // Dữ liệu
        addProduct: addProduct, // function
        editProdcut: editProduct // function
    };

    // Truyền global state vào
    return <ProductContext.Provider value={value}>
        {!isLoading && <div>Is loading</div>}
        {message && <div>{message}</div>}
        {error && <div>{error}</div>}

        {children}
    </ProductContext.Provider>
}