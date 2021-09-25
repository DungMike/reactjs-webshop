import React from "react";
import { getCategory, getProductsCategory } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
const CategoryPage = (props) => {
    const id = props.match.params.id;
    console.log(id);
    const [category, setCategory] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [totalProduct, setTotalProduct] = React.useState(0);
    
    React.useEffect(()=>{
        // Get Category
        getCategory(id).then((res)=>{
            // console.log(res.data.data);
            setCategory(res.data.data);
        });
        // Get Products By Category ID
        getProductsCategory(id).then((res)=>{
            // console.log(res.data.data);
            setProducts(res.data.data.docs);

            // Get Total Product
            setTotalProduct(res.data.data.docs.length);
        });
        
    }, [id]);

    return (
        <>
            {/*	List Product	*/}
            <div className="products">
                <h3>{category.name} (hiện có {totalProduct} sản phẩm)</h3>
                <div className="product-list card-deck">
                    {
                        products.map((product)=>{
                            return <ProductItem item={product}/>
                        })
                    }
                </div>
            </div>
            {/*	End List Product	*/}
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
