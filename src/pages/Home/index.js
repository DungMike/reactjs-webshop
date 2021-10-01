import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";


const HomePage = () => {
    const [latestProduct, setLatestProduct]  = React.useState([]);
    const [featuredProduct, setFeaturedProduct] = React.useState([]);
    React.useEffect(() => {
        // get latest product
        getProducts({
            params: {
                limit: 6,
            }
        }).then((res)=> {
            setLatestProduct(res.data.data.docs);
        });
        //get featured product
        getProducts({
            params: {
                limit: 6,
                "filter[is_featured]": true,
            }
        }).then((res) => {
            setFeaturedProduct(res.data.data.docs);
        });
    }, []);
    return (
        <>
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featuredProduct.map((product) => {
                            return <ProductItem item={product} />
                        })
                    }
                </div>
            </div>
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                    {
                        latestProduct.map((product) => {
                            return <ProductItem item={product} />
                        })
                    }
                </div>
            </div>
            
        </>
    )
}
export default HomePage;