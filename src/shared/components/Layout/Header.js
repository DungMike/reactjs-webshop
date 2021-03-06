import React from "react";
import { Link,useHistory } from "react-router-dom";
const Header = (props) => {
    const history = useHistory();
    const [keyword, setKeyword] = React.useState("");

    const handleOnChangeInput = (e)=>{
        const {value} = e.target;
        setKeyword(value);
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        history.push(`/search?q=${keyword}`);
    }
    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
                        <h1><Link to="/"><img className="img-fluid" src="images/logo.png" /></Link></h1>
                    </div>
                    <div id="search" className="col-lg-6 col-md-6 col-sm-12">
                        <form className="form-inline">
                            <input 
                                className="form-control mt-3" 
                                type="search" 
                                placeholder="Tìm kiếm" 
                                aria-label="Search"
                                onChange={handleOnChangeInput}
                                value={keyword} />
                            <button 
                                className="btn btn-danger mt-3" 
                                type="submit"
                                onClick={handleOnSubmit}
                                >Tìm kiếm</button>
                        </form>
                    </div>
                    <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
                        <a className="mt-4 mr-2" href="#">giỏ hàng</a><span className="mt-3">8</span>
                    </div>
                </div>
            </div>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
            </button>
        </div>
    )
}
export default Header;