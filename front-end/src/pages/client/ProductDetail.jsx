import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import '../../assets/client/details.css'
import { readProduct } from '../../features/productsSlice'

const ProductDetail = () => {
    const product = useSelector(data => data.product.product)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(readProduct(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <main className="content">
        <div className="detail grid wide row">
            <div className="detail__main l-8 m-12 c-12">
                <div className="main-text">
                    <p className="text-name">{product?.name}</p>
                    <p className="text-price">{product?.price}</p>
                </div>
                <div className="main-img">
                    <img src={product?.img} alt=""/>
                </div>
            </div>
            <div className="detail__content l-4 m-12 c-12">
                <div className="content-info">
                    <h5 className="content-title">Chi tiết sản phẩm</h5>
                    <p className="info-text">{product?.desc}</p>

                </div>
                <div className="content-choose">
                    <h5 className="choose-title">Chọn size</h5>
                    <div className="choose-btn">
                        <button>37</button>
                        <button>38</button>
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                    </div>
                </div>
                <div className="content-add">
                    <div className="quantity">
                        <div className="minus">
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className="number">
                            <input type="text" name="" id="inp" defaultValue="1"/>
                        </div>
                        <div className="plus">
                            <i className='bx bx-plus' ></i>
                        </div>
                    </div>
                    <div className="add">
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProductDetail