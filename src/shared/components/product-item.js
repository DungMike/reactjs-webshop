import React from "react";
import { getImageProduct } from "../ultils";

const ProductItem = ({item}) => {
    return (
        <div className="product-item card text-center">
            <a href={`/product-details-${item._id}`}><img src={getImageProduct(item.image)} /></a>
            <h4><a href={`/product-details-${item._id}`}>{item.name}</a></h4>
            <p>Giá Bán: <span>{item.price}đ</span></p>
        </div>
    )
}
export default ProductItem;