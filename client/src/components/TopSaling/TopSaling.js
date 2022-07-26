import "./topsaling.scss";
import { Link } from "react-router-dom";
import picture1 from "../../assets/images/naked.jpg";


export default function TopSaling () {
    return (
        <div className="container">
            <div className="topsaling">
                <div className="topsaling_title">
                   <p> SẢN PHẨM BÁN CHẠY NHẤT</p>
                   <div className="see_all">Xem tất cả</div>
                </div>
                <div className="topsaling_list">
                    <Link to={'/product'} className="topsaling_list_item">
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
                    <Link to={'/product'} className="topsaling_list_item">
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
                    <Link to={'/product'} className="topsaling_list_item">
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
            </div>
        </div>
    );
}