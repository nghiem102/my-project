import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/img/logo.jpg'

const Header = () => {
  return (
    
    <header className="header">
            <div className="grid wide">
                <div className="header__logo">
                    <NavLink to="/" className="header__logo-link">
                        <img className="header__logo-img" src={logo} alt=""/>
                    </NavLink>
                </div>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="product" className="nav__link active">Sản phẩm</NavLink></li>
                        <li className="nav__item"><NavLink to="" className="nav__link">Thương hiệu <i className='bx bxs-chevron-down'></i></NavLink></li>
                        <li className="nav__item"><NavLink to="" className="nav__link">Khuyến mại</NavLink></li>
                        <li className="nav__item"><NavLink to="" className="nav__link">Tin tức</NavLink></li>
                    </ul>
                </nav>
                <div className="header__icon">
                    <form action="" className="search-box">
                        <input type="text" className="search-form" required placeholder="Nhập từ khóa"/>
                        <button className="btn-search"><i className='bx bx-search'></i></button>
                    </form>
                    <div>
                        <a className="icon icon-cart" href="cart.html"><i className='bx bx-cart' ></i></a>
                    </div>
                    <div>
                        <a className="icon icon-user" href="login.html"><i className='bx bx-user-circle' ></i></a>
                    </div>
                </div>
                <label htmlFor="mobile-input" className="header__replace">
                    <i className="fas fa-bars header__replace-icon"></i>
                </label>

                <input type="checkbox" name="" hidden className="nav__input" id="mobile-input"/>

                <label htmlFor="mobile-input" className="nav__overlay"></label>
                <nav className="nav__mobile">
                    <label htmlFor="mobile-input">
                        <i className="fas fa-times nav__mobile-close"></i>
                    </label>
                    <ul className="nav__mobile-list">
                        <li className="nav__mobile-item">
                            <NavLink to="./index.html" className="nav__mobile-link"><i className="fas fa-home"></i>Trang chủ</NavLink>
                        </li>
                        <li className="nav__mobile-item">
                            <NavLink to="./product.html" className="nav__mobile-link"><i className="fas fa-mug-hot"></i>Sản phẩm</NavLink>
                        </li>
                        <li className="nav__mobile-item">
                            <NavLink to="" className="nav__mobile-link"><i className="fas fa-user-tag"></i>Khuyến mãi</NavLink>
                        </li>
                        <li className="nav__mobile-item">
                            <NavLink to="./news.html" className="nav__mobile-link"><i className="far fa-newspaper"></i>Tin tức</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Header