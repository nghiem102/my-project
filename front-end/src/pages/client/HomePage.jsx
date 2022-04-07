import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../../assets/client/main.css'
import { listProduct } from '../../features/productsSlice'

const HomePage = () => {
    const products = useSelector(data => data.product.value)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <main className="content">
        <div className="content__banner">
            <div className="banner-item grid wide row">
                <div className="banner-item-text l-5">
                    <h1 className="main-item-title">Puma Running SX</h1>
                    <p className="main-item-info">Đôi giày đã di chuyển những ngọn núi cho đến vĩnh cửu và vẫn làm như vậy với một chút liên lạc nhanh chóng của chủ nghĩa hiện đại</p>
                    <p className="main-item-price">3.200.000 đ</p>
                    <button className="main-item-btn">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
        <div className="content__product">
            <div className="product grid wide">
                <div className="product-title">
                    <h3>Sản phẩm mới nhất</h3>
                </div>
                <div className="product-list row">
                    {products?.map(item => 
                        <NavLink to={`/productDetail/${item._id}`} className="product-item col l-3" key={item._id}>
                            <div className="product-item-img">
                                <img src={item.img} alt="" width="300px" height="300px"/>
                            </div>
                            <div className="product-item-text">
                                <p className="product-item-name">{item.name}</p>
                                <p className="product-item-price">{item.price}</p>
                            </div>
                        </NavLink>  
                    )}
                </div>
                <a className="product-next" href="./product.html">
                    <i className='bx bx-right-arrow-alt'></i>
                    <p>Xem tất cả</p>
                </a>
            </div>
        </div>
    </main>
  )
}

export default HomePage