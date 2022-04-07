import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../../assets/client/product.css'
import { listCategory } from '../../features/categorySlice'
import { listProduct, productByCategory } from '../../features/productsSlice'

const ProductsPage = () => {
  const products = useSelector(data => data.product.value)
  const categories = useSelector(data => data.category.value)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(listProduct())
      dispatch(listCategory())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getProductByCategory =  (id) => {
    dispatch(productByCategory(id))
  }

  return (
    <main className="content">
            <div className="grid wide row">
                <div className="content__category col l-3 m-0 c-0">
                    <div className="category-item end">
                        <h4 className="category-item-title">
                            Thương hiệu
                        </h4>
                        <ul>
                          {categories?.map(cate => 
                            <li key={cate._id} className="category-item-link">
                              <NavLink to="" onClick={() => getProductByCategory(cate._id)}>
                                {cate.name}
                              </NavLink>
                            </li>
                          )}
                        </ul>    
                    </div>
                </div>
                <div className="content__main col l-9 m-12 c-12">
                    <div className="conten-product row">
                        <h2 className="conten__product-title l-12 m-12 c-12">Sản phẩm</h2>
                        {products?.map(item => 
                            <NavLink key={item._id} to={`/productDetail/${item._id}`} className="content__product-item l-4 col m-6 c-12">
                                <div className="product-item-img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="product-item-text">
                                    <p className="product-item-name">{item.name}</p>
                                    <p className="product-item-price">{item.price}</p>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </main>
  )
}

export default ProductsPage