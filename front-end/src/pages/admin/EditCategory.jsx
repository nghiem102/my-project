import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateCategory } from '../../features/categorySlice'
import HeadDashboard from '../components/HeadDashboard'

const EditCategory = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await axios.get('http://localhost:3001/api/categories/'+id)
            reset(data)
        }
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onUpdate = (data) => {
        dispatch(updateCategory(data))

        navigate('/admin/dashboard/category')
    }
  return (
    <main>
        <HeadDashboard title={'Edit Category'}/>
        <div id='EditCategory'>
            <form onSubmit={handleSubmit(onUpdate)}>
                <input type="text" {...register('name')} />
                <button>Update</button>
            </form>
        </div>
    </main>
  )
}

export default EditCategory