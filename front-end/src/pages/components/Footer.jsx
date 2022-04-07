import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/img/logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="grid wide">
            <div className="footer__logo">
                <img src={logo} alt="" className="footer__logo-img"/>
            </div>
            <div className="footer__contact row">
                <div className="contact contact-info l-3 m-6 c-12">
                    <h5>Thông tin liên hệ</h5>
                    <NavLink to=""><i className='bx bxs-phone-call'></i>0339362491</NavLink>
                    <br/>
                    <NavLink to=""><i className='bx bx-mail-send' ></i>ledinhnghiem102@gmail.com</NavLink>
                    <br/>
                    <NavLink to=""><i className='bx bxl-facebook-square' ></i>Facebook</NavLink>
                    <br/>
                    <NavLink to=""><i className='bx bxl-instagram-alt' ></i>Instagram</NavLink> 
                </div>
                <div className="contact contact-cagetory l-3 m-6 c-12">
                    <h5>Danh mục</h5>
                    <NavLink to="">Sản phẩm mới</NavLink>
                    <br/>
                    <NavLink to="">Sản phẩm 2 hand</NavLink>
                    <br/>
                    <NavLink to="">Thương hiệu</NavLink>
                </div>
                <div className="contact contact-policy l-3 m-6 c-12">
                    <h5>Chính sách</h5>
                    <NavLink to="">Chính sách vận chuyển</NavLink>
                    <br/>
                    <NavLink to="">Chính sách bảo hành</NavLink>
                    <br/>
                    <NavLink to="">Chính sách bảo mật</NavLink>
                    <br/>
                    <NavLink to="">Chính sách thanh toán</NavLink>
                </div>
                <div className="contact contact-support l-3 m-6 c-12">
                    <h5>Hỗ trợ</h5>
                    <NavLink to="">Hỗ trợ chọn size</NavLink>
                    <br/>
                    <NavLink to="">Hỗ trợ đổi trả</NavLink>
                    <br/>
                    <NavLink to="">Câu hỏi thường gặp</NavLink>
                    <br/>
                    <NavLink to="">Liên hệ</NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer