import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct } from '../../features/productsSlice'
import HeadDashboard from '../components/HeadDashboard'

const EditForm = () => {
    const categories = useSelector(data => data.category.value)
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await axios.get('http://localhost:3001/api/products/'+id)
            reset(data)
        }
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onUpdate = (data) => {
        dispatch(updateProduct(data))

        navigate('/admin/dashboard/products')
    }
  return (
    <main>
        <HeadDashboard title={'Edit Product'}/>
        <div id='EditForm'>
            <form onSubmit={handleSubmit(onUpdate)}>
                <input type="text" {...register('name')} />
                <input type="text" {...register('img')} />
                <input type="number" {...register('price')} />
                <select {...register('category')}>
                    {categories?.map(item =>
                         <option key={item._id} value={item._id}>{item.name}</option>
                    )}
                </select>
                <input type="text" {...register('desc')} />
                <button>Update</button>
            </form>
        </div>
    </main>
  )
}

export default EditForm