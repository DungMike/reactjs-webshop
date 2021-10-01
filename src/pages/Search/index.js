import React from "react";
import ProductItem from "../../shared/components/product-item";
import { getProducts } from "../../services/Api";
import Pagination from "../../shared/components/Pagination";
const SearchPage = (props) => {
    
    
    const query = new URLSearchParams(props.location.search);

    const page = query.get("page") || 1;
    const key = query.get("q");
    const [products, setProducts] = React.useState(null);


    const [pages, updatePages] = React.useState({
        total: 0,
        limit: 12,
        currentPage: page,
    });
    React.useEffect(()=> {
        getProducts({
            params: {
                name:key,
                limit:12,
                page: page,
            },
        })
        .then(({data}) => {
            setProducts(data.data.docs);
            updatePages({ ...pages, ...data.data.pages });
        });
    }, [key, page]);
    return (
        <>
            
            <div className="products">
                <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{key}</span></div>
                <div className="product-list card-deck">
                    {
                        products?.map((product)=>{
                            return (
                                <ProductItem item={product}/>
                            )
                        })
                    }
                </div>
            </div>
            <div id="pagination">
	        <Pagination pages={pages} />
            </div>
        </>
    )
}
export default SearchPage;