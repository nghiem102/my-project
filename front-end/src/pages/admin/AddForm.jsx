import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../features/productsSlice'
import HeadDashboard from '../components/HeadDashboard'

const AddForm = () => {
    const categories = useSelector(data => data.category.value)
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onAdd = (data) => {
        dispatch(createProduct(data))
        navigate('/admin/dashboard/products')
    }
  return (
    <main>
        <HeadDashboard title={'Add Product'}/>
        <div id='AddForm'>
            <form onSubmit={handleSubmit(onAdd)}>
                <input type="text" {...register('name')} />
                <input type="text" {...register('img')} />
                <input type="number" {...register('price')} />
                <select {...register('category')}>
                    {categories?.map(item =>
                         <option key={item._id} value={item._id}>{item.name}</option>
                    )}
                </select>
                <input type="text" {...register('desc')} />
                <button>Add</button>
            </form>
        </div>
    </main>
  )
}

export default AddForm