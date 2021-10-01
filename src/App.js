import React from "react";
import axios from "axios";
import { BrowserRouter, Route, link, Switch } from "react-router-dom";
import { getCategories } from "./services/Api";
// import layout
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slider from "./shared/components/Layout/Slide";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";

//import page
import CartPage from "./pages/Cart/index";
import CategoryPage from "./pages/Category/index";
import HomePage  from "./pages/Home/index";
import NotFoundPage  from "./pages/NotFound/index";
import ProductDetailsPage  from "./pages/ProductDetails/index";
import SearchPage  from "./pages/Search/index";
import SuccessPage  from "./pages/Success/index";

const App = () => {
    
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        getCategories({}).then((res) => {
            setCategories(res.data.data.docs);
            // console.log(res.data.data.docs);
        });
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Header/>

                {/* body */}
                <div id="body">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav>
                            <Menu item={categories} />
                            </nav>
                        </div>
                        </div>
                        <div className="row">
                            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                                {/*	Slider	*/}
                                <Slider />
                                {/*	End Slider	*/}

                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/category-:id" component={CategoryPage} />
                                    <Route path="/product-details-:id" component={ProductDetailsPage} />
                                    <Route path="/search" component={SearchPage} />
                                    <Route path="/cart" component={CartPage} />
                                    <Route path="/success" component={SuccessPage} />
                                    <Route component={NotFoundPage} />
                                </Switch>
                            </div>
                            <Sidebar />
                        </div>

                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default App;
