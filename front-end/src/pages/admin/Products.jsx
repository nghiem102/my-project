import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { listProduct, remove } from '../../features/productsSlice'
import HeadDashboard from '../components/HeadDashboard'
import '../../assets/admin/product.css'
import { listCategory } from '../../features/categorySlice'

const Products = () => {
    const products = useSelector(data => data.product.value)
    const categories = useSelector(data => data.category.value)

    const dispatch = useDispatch()

    const onRemove = (id) => {
        dispatch(remove(id))
    }
    useEffect(() => {
        dispatch(listProduct())
        dispatch(listCategory())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const getCategoryName = (id) =>  {
        const data = categories?.find(item => item._id === id)
        return data?.name
    }
    
    


  return (
    <main>
        <HeadDashboard title={"Products"}/>
        <div id='products'>
            <button className='btn-add'>
                <NavLink className='add-link' to={'/admin/dashboard/addproduct'}>Add product</NavLink>
            </button>
            <table className='product-table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => 
                        <tr key={item._id}>
                            <td>{index +1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.img} alt="" width='100px' /></td>
                            <td>{item.price}</td>
                            <td>{getCategoryName(item.category)}</td>
                            <td>
                                <button className='btn-delete' onClick={() => onRemove(item._id)}>
                                    <span className='text'>Delete</span>
                                    <span className='icon'>
                                        <i className='bx bx-x'></i>
                                    </span>
                                </button>
                            </td>
                            <td>
                                <button className='btn-edit'>
                                    <NavLink className='btn-link' to={`/admin/dashboard/${item._id}/editproduct`}>Edit</NavLink>
                                </button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default Products