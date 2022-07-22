import "./listproduct.scss";
import { Link } from "react-router-dom";
import picture1 from "../../assets/images/naked.jpg";
import { useState } from "react";


function ListProduct() {
    const [pagination_number, setPaginationNum] = useState(1);

    return (
        <div className="container">
            <div className="list__product_wrap">
                <h1 className="list__product_wrap_title">
                    DANH SÁCH SẢN PHẨM
                </h1>
                <div className="list__product_wrap_list">
                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>

                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>

                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>

                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>

                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>

                    <Link to={'/product'} className="list__product_wrap_list_item">
                        <img src={picture1} className="" alt="" />
                        <div className="item_info">
                            <div className="item_info_name">
                                MT10
                            </div>
                            <div className="item_info_price">
                                Giá: 469.000.000 đ
                            </div>  
                        </div>
                    </Link>
                </div>
                <div className="pagination">
                    <p className={`pagination_number btn ${pagination_number === 1 && 'active'}`} onClick={()=>setPaginationNum(1)}>1</p>
                    <p className={`pagination_number btn ${pagination_number === 2 && 'active'}`} onClick={()=>setPaginationNum(2)}>2</p>
                    <p className={`pagination_number btn ${pagination_number === 3 && 'active'}`} onClick={()=>setPaginationNum(3)}>3</p>
                    <p className={`pagination_number btn ${pagination_number === 4 && 'active'}`} onClick={()=>setPaginationNum(4)}>4</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ListProduct;