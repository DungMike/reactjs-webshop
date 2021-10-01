import React from "react";

import ProductItem from "../../shared/components/product-item";
import { getCategory, getProductsCategory } from "../../services/Api";
const CategoryPage = (props) => {
    const id = props.match.params.id;
    console.log(id);
    const [category , setCategory] = React.useState([]);
    const [product, setCategoryProduct] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    React.useEffect(() => {
        // get category
        getCategory(id).then((res) => {
            setCategory(res.data.data);
        });
        getProductsCategory(id).then((res) => {
            setCategoryProduct(res.data.data.docs);
            setTotal(res.data.data.items.total);
        });
        
    }, [id])
    return (
        <>
            <div className="products">
                <h3>{category.name} (hiện có {total} sản phẩm)</h3>
                <div className="product-list card-deck">
                    {
                        product.map((product)=>{
                            return <ProductItem item={product}/>
                        })
                    }
                </div>
            </div>
            <div id="pagination">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                </ul>
            </div>
        </>
    )
}
export default CategoryPage;