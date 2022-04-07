import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


import HeadDashboard from '../components/HeadDashboard'
import '../../assets/admin/product.css'
import { listCategory, removeCategory } from '../../features/categorySlice'

const Category = () => {
    const categories = useSelector(data => data.category.value)

    const dispatch = useDispatch()

    const onRemove = (id) => {
        dispatch(removeCategory(id))
    }
    useEffect(() => {
        dispatch(listCategory())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <main>
        <HeadDashboard title={"Category"}/>
        <div id='category'>
            <button className='btn-add'>
                <NavLink className='add-link' to={'/admin/dashboard/addcategory'}>Add category</NavLink>
            </button>
            <table className='product-table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Category Name</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map((item, index) => 
                        <tr key={item._id}>
                            <td>{index +1}</td>
                            <td>{item.name}</td>
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
                                    <NavLink className='btn-link' to={`/admin/dashboard/${item._id}/editcategory`}>Edit</NavLink>
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

export default Category