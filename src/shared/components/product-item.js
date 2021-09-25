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

/*
B1. gắn URL để tới Page Product (bao gồm cả ID)
B2. hoàn thiện Router cho Page Product
B3. Viết API lấy ra một sản phẩm duy nhất theo ID truyền vào
B4. Import data
B5. Xây dựng State
B6. Cập nhật dữ liệu cho State
B7. Render dữ liệu chi tiết sản phẩm
*/

