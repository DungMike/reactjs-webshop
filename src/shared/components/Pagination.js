import React from "react";
import {Link, useLocation} from "react-router-dom";
const Pagination = ({pages}) => {

    // tinh toan dau vao cho gia thuat phan trang
    // tao cau truc url de nguoi dung cos the click vao trang caan xem ket  qua 
    // tao ra 1 mang chua cac trang can hien thi
    // tao ra danhs ach phan trang op buoc do co ket hopw giao dien kem kieemr trang thais ddau cuois

    const {pathname, search} = useLocation();
    const query = new URLSearchParams(search);
    const  {total, limit, currentPage, hasNext, hasPre, prev, next} = pages;
    const totalPages = Math.ceil(total/limit);
    function formatUrl(page) {
        query.set("page", page);
        return `${pathname}?${query.toString()}`;
    }
    function renderPagesHTML(delta = 2) {
        const pagesHtml = [];
        const left = currentPage - delta;
        const right = currentPage + delta;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === currentPage ||
                i === totalPages ||
                (i >= left && i <= right)
            ) {
                pagesHtml.push(i);
            }
        }
        return pagesHtml;
    }
    
    return (
        <ul className="pagination">
            {(currentPage > 1 ? (
                <li className="page-item">
                    <Link to={formatUrl(prev)} className="page-link" href="#">
                        Trang trước
                    </Link>
                </li>
            ) : null ) }

            {renderPagesHTML().map((item) => {
                return (
                    <li className={`page-item ${currentPage === item && "active"}`}>
                        <Link to={formatUrl(item)} className={`page-link `} href="#">
                            {item}
                        </Link>
                    </li>
                );
            })}

            {currentPage < totalPages ? (
                <li className="page-item">
                    <Link to={formatUrl(next)} className="page-link" href="#">
                        Trang sau
                    </Link>
                </li>
            ) : null}
        </ul>
    );
}
export default Pagination;