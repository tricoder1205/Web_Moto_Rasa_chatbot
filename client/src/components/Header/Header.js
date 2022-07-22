import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo_moto.jpg";
import Cruiser from "../../assets/images/cruiser.jpg";
import Naked from "../../assets/images/naked.jpg";
import Sport from "../../assets/images/sport.png";
import Touring from "../../assets/images/touring.jpg";
import SportTouring from "../../assets/images/sport_touring.jpg";
import Adventure from "../../assets/images/ADVENTURE.jpg";

import './header.scss';


function Header() {
    const [search, setSearch] = useState(false);

    return (
      <div className="header">
        <div className="container">
            <div className="header__wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                
                <div className="header__right">
                    <div className="header_menu">
                        <div className="header_menu_item btn active">Trang chủ</div>
                        <div className="header_menu_item dongxe">
                            <p className="btn">Dòng xe</p>
                            <div className="header_submenu_dongxe_wrap">
                                <div className="header_submenu_dongxe">
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={Naked}  alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">HYPER NAKED</p>
                                    </div>
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={Sport}  alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">SUPPER SPORT</p>
                                    </div>
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={Touring}  alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">TOURING</p>
                                    </div>
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={SportTouring}  alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">SPORT TOURING</p>
                                    </div>
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={Cruiser}  alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">CRUISER</p>
                                    </div>
                                    <div className="header_submenu_dongxe_item">
                                        <div className="header_submenu_dongxe_item_img">
                                            <img src={Adventure} alt="type"/>
                                        </div>
                                        <p className="header_submenu_dongxe_item_type">ADVENTURE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_menu_item ">
                            <p className="btn">Dịch vụ</p>
                            <ul className="header_submenu_dichvu">
                                <li className="header_submenu_dichvu_item">Đặt lịch bảo dưỡng</li>
                            </ul>
                        </div>
                        <div className="header_menu_item">
                            <p className="btn">Phụ tùng </p>
                            <ul className="header_submenu_dichvu">
                                <li className="header_submenu_dichvu_item">Phuộc YSS</li>
                                <li className="header_submenu_dichvu_item">Bi nồi BANDO</li>
                                <li className="header_submenu_dichvu_item">Nhông Sên Dĩa</li>
                                <li className="header_submenu_dichvu_item">Mâm - Lớp xe</li>
                                <li className="header_submenu_dichvu_item">Vành - Căm</li>
                            </ul>
                        </div>
                        <div className="header_menu_item btn">Tin túc</div>
                    </div>
                    

                    <div className="header_cart">
                        <div className="header_search_icon btn" onClick={()=>setSearch(prev=>!prev)}>
                            <p><BsSearch className="icon"/></p>
                        </div>
                        <div className="header_cart_icon btn">
                            <FiShoppingCart className="icon"/>
                        </div>
                    </div>
                    <div className="header_account">
                        <AiOutlineUser className="icon"/>
                        <div className="header_login btn">Đăng nhập | </div>
                        <div className="header_register btn">Đăng ký</div>
                    </div>
                </div>
            </div>
        </div>
        {
            search &&
             <div className="header_search">
                <input type="text" className="header_search_input" placeholder="Nhập tên sản phẩm ..."/>
                <BsSearch className="icon"/>
                <div className="header_search_result"></div>
            </div>
        }
        
      </div>
    );
  }
  
  export default Header;