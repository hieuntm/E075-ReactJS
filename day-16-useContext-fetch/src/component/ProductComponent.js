import {ProductContext} from "../context/product-context";
import { useContext } from "react";

const ProductComponent = () => {

    const productCtx = useContext(ProductContext);
    // console.log(productCtx.addProduct(10));
    return <div>
            <ul>
                {productCtx.products.map(product => <li>{product.name} - {product.price} - {product.category}</li>)}
            </ul>
        </div>
}

export default ProductComponent;